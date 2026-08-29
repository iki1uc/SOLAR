// ─── CACHE-DRIVER · FINALVERSION ───────────────────────────────
// TMP · Session · Shadow · Pipelineblitz-State

import { Algorithmik } from "./algorithmik.js";

export const CacheDriver = {

  // 1) INIT · Schattenstart
  init() {
    this.tmp = {};
    this.state = "IDLE";
    this.last = null;
    this.tick = performance.now();
    this.shadow = true;            // kommt aus dem Schatten
  },

  // 2) STORE · Werte sichern
  store(key, values) {
    const calc = Algorithmik.RUN(values);

    this.tmp[key] = {
      raw: calc.raw,
      axis3: calc.axis3,
      axis9: calc.axis9,
      axis27: calc.axis27,
      axis81: calc.axis81,
      pipeline21: calc.pipeline21,
      life360: calc.life360,
      stamp: performance.now()
    };

    this.last = key;
    this.state = "ACTIVE";
  },

  // 3) LOAD · Werte abrufen
  load(key) {
    return this.tmp[key] || null;
  },

  // 4) TMP-RESPOS · Schattenantwort
  respond(key) {
    const entry = this.load(key);
    if (!entry) return null;

    return {
      axis3: entry.axis3,
      axis9: entry.axis9,
      axis27: entry.axis27,
      axis81: entry.axis81,
      pipeline21: entry.pipeline21,
      life360: entry.life360,
      stamp: entry.stamp
    };
  },

  // 5) CLEAR · Schatten löschen
  clear(key) {
    delete this.tmp[key];
    if (this.last === key) this.last = null;
    this.state = "IDLE";
  },

  // 6) RUN · Komplettausführung
  RUN(key, values) {
    this.store(key, values);
    return this.respond(key);
  }
};
