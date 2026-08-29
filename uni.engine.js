// ─── UNI-ENGINE · FINALVERSION ───────────────────────────────
// Transport · Rotation · Pipelineblitz · FeuerIce · 360°
// arbeitet kohärent mit Algorithmik.RUN()

import { Algorithmik } from "./algorithmik.js";
import { CacheDriver } from "./cache.driver.js";

export const UNIEngine = {

  // 1) INIT · Startimpuls
  init(values) {
    this.raw = values;
    this.tick = performance.now();
    this.state = "RUN";
    this.fire = true;
    this.ice = true;
    this.blitz = true;
  },

  // 2) CORE · Achsen aus Algorithmik holen
  core(values) {
    const calc = Algorithmik.RUN(values);

    this.axis3 = calc.axis3;
    this.axis9 = calc.axis9;
    this.axis27 = calc.axis27;
    this.axis81 = calc.axis81;
    this.pipeline21 = calc.pipeline21;
    this.life360 = calc.life360;
  },

  // 3) BLITZ · FeuerIce-Impuls
  blitz() {
    this.blitz21 = this.pipeline21.map(a => ({
      ...a,
      fire: a.vector >= 0,
      ice: a.vector < 0,
      pulse: Math.abs(a.vector)
    }));
  },

  // 4) GRAVITATION · Stabilisierung
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

  // 5) CACHE · Schatten speichern
  cache(key) {
    CacheDriver.store(key, this.raw);
    this.shadow = CacheDriver.respond(key);
  },

  // 6) RUN · Vollausführung
  RUN(key, values
