// ─── EVOTAAL · EVOcity · NIRWANA ───────────────────────────────
// MISS-Respo-Löser · Evolutions-Knoten

export const EVOTAAL = {

  // 1) MISS erkennen
  miss(axis3, axis9) {
    const diff = axis9.length - axis3.length;
    return {
      miss: diff > 0 ? diff : 0,
      level: diff > 0 ? "MISS" : "OK"
    };
  },

  // 2) Gleichung lösen
  solve(values) {
    const nums = values.map(Number).filter(n => !isNaN(n));
    const axis3 = nums.sort((a,b)=>a-b);
    const axis9 = axis3.map((v,i)=>({
      value: v,
      index: i,
      degree: i * 40
    }));

    const miss = this.miss(axis3, axis9);

    return {
      axis3,
      axis9,
      miss,
      solved: miss.miss === 0,
      evo: true,
      city: "EVOcity"
    };
  },

  // 3) NIRWANA aktivieren
  nirwana() {
    return {
      state: "EMPTY",
      cache: "SEN SA TION",
      speed: "∞",
      ready: true
    };
  }
};
