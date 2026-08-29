// ─── 81.js · UNI-9 · 360° Lebensraum ───────────────────────────────
export function UNI9(values) {

  // 1) 3-Achse: Grundsortierung
  const axis3 = values
    .map(Number)
    .filter(n => !isNaN(n))
    .sort((a,b)=>a-b);

  // 2) 9-Achse: Struktur
  const axis9 = axis3.map((v,i)=>({
    value: v,
    index: i,
    degree: (i * 40),       // 9 Punkte → 360° / 9 = 40°
    percent: (v / axis3[axis3.length-1]) * 100,
    vector: i === 0 ? 0 : v - axis3[i-1],
    te: v + "te"
  }));

  // 3) 27-Achse: Matrix
  const axis27 = axis9.map(a => ({
    ...a,
    delta: Math.abs(a.value - axis3[0]),
    knot: a.index % 3 === 0
  }));

  // 4) 81-Achse: Raum (Findung)
  const axis81 = axis27.map(a => ({
    ...a,
    room: a.degree >= 80 && a.degree <= 120,   // 81-Raum
    station: a.degree === 80                   // 81-Fundpunkt
  }));

  // 5) Pipeline21: 50%-Regel
  const pipeline21 = axis81.map(a => ({
    ...a,
    half: a.value * 0.5,
    full: a.value,
    deltaHalf: a.full - a.half
  }));

  // 6) Lebensmatrix zurückgeben
  return {
    raw: values,
    axis3,
    axis9,
    axis27,
    axis81,
    pipeline21,
    life360: axis9.map(a => a.degree)
  };
}
