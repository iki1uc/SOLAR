// ─── PIPELINEBLITZ · SOLAR-KERNEL ───────────────────────────────
// RUN · FEUERICE · 3Ø9Ø81 · 360° Transport

export const Pipelineblitz = {

  // 1) INIT · Startimpuls
  init(values) {
    this.raw = values;
    this.tick = performance.now();
    this.state = "RUN";
    this.fire = true;
    this.ice = true;
    this.blitz = true;
  },

  // 2) CORE · Dreiecksachse → 360° Rotation
  core(values) {
    const nums = values.map(Number).filter(n => !isNaN(n)).sort((a,b)=>a-b);

    this.axis3 = nums;
    this.axis9 = nums.map((v,i)=>({
      value: v,
      index: i,
      degree: i * 40,                 // 9 Punkte → 360° / 9
      vector: i === 0 ? 0 : v - nums[i-1],
      percent: (v / nums[nums.length-1]) * 100,
      te: v + "te"
    });

    this.life360 = this.axis9.map(a => a.degree);
  },

  // 3) BLITZ · Pipeline21 · FeuerIce
  blitz() {
    this.pipeline21 = this.axis9.map(a => ({
      ...a,
      half: a.value * 0.5,
      full: a.value,
      delta: a.full - a.half,
      fire: a.vector >= 0,
      ice: a.vector < 0
    }));
  },

  // 4) GRAVITATION · Bindung · Stabilisierung
  graviton() {
    this.RAM = {
      RAW: this.raw.length,
      USED: this.axis3.length,
      FREE: Math.max(0, this.raw.length - this.axis3.length),
      PUMP: true
    };

    this.SORTED = {
      numbers: this.axis3,
      percent: this.axis3.map(v => v + "%"),
      degree: this.axis3.map(v => v + "°"),
      te: this.axis3.map(v => v + "te")
    };
  },

  // 5) RUN · Vollausführung
  RUN(values) {
    this.init(values);
    this.core(values);
    this.blitz();
    this.graviton();
    return {
      axis3: this.axis3,
      axis9: this.axis9,
      pipeline21: this.pipeline21,
      graviton: this.RAM,
      sorted: this.SORTED,
      life360: this.life360
    };
  }
};
