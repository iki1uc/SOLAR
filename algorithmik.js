// ─── ALGORITHMIK · FINALVERSION ───────────────────────────────
// Kalkül · Matrix · 3/9/27/81 · Pipeline21 · Lebensraum360

export const Algorithmik = {

  // 1) 3-Achse: Grundsortierung
  axis3(values) {
    return values
      .map(Number)
      .filter(n => !isNaN(n))
      .sort((a,b)=>a-b);
  },

  // 2) 9-Achse: 360°-Lebensraum
  axis9(axis3) {
    return axis3.map((v,i)=>({
      value: v,
      index: i,
      degree: i * 40,                          // 9 Punkte → 360° / 9
      percent: (v / axis3[axis3.length-1]) * 100,
      vector: i === 0 ? 0 : v - axis3[i-1],
      te: v + "te"
    }));
  },

  // 3) 27-Achse: Matrix
  axis27(axis9, axis3) {
    return axis9.map(a => ({
      ...a,
      delta: Math.abs(a.value - axis3[0]),
      knot: a.index % 3 === 0                  // jeder 3. Punkt ist ein Knoten
    }));
  },

  // 4) 81-Achse: Raum / Findung
  axis81(axis27) {
    return axis27.map(a => ({
      ...a,
      room: a.degree >= 80 && a.degree <= 120, // 81-Raum
      station: a.degree === 80                 // 81-Fundpunkt
    }));
  },

  // 5) Pipeline21: 50%-Regel
  pipeline21(axis81) {
    return axis81.map(a => ({
      ...a,
      half: a.value * 0.5,
      full: a.value,
      deltaHalf: a.full - a.half
    }));
  },

  // 6) Lebensmatrix360
  life360(axis9) {
    return axis9.map(a => a.degree);
  },

  // 7) MASTER · Komplettausführung
  RUN(values) {
    const axis3 = this.axis3(values);
    const axis9 = this.axis9(axis3);
    const axis27 = this.axis27(axis9, axis3);
    const axis81 = this.axis81(axis27);
    const pipeline21 = this.pipeline21(axis81);
    const life360 = this.life360(axis9);

    return {
      raw: values,
      axis3,
      axis9,
      axis27,
      axis81,
      pipeline21,
      life360
    };
  }
};
