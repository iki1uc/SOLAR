// ─── UNI-ENGINE · FINALVERSION ───────────────────────────────
// Transport · Rotation · Pipelineblitz · FeuerIce · 360°
// arbeitet kohärent mit Algorithmik.RUN()

// ─── ALUF · Schwingung / Solar / Energie / Gravitation ───────

function swing(solar, energy, grav) {
  return (solar * -1) + (energy * +1) + grav;
}

const SOLAR = -1;     // Solar immer negativ
const ENERGY = +1;    // Energie immer positiv

function grav(value) {
  return Math.abs(value) * 0.33; // 33% atomare Bindung
}

export const Schwingung = {
  calc(value) {
    const solar = value * SOLAR;
    const energy = value * ENERGY;
    const gravitation = grav(value);

    return {
      raw: value,
      solar,
      energy,
      gravitation,
      swing: swing(solar, energy, gravitation)
    };
  }
};

// ─── IMPORTS ──────────────────────────────────────────────────

import { Algorithmik } from "./algorithmik.js";
import { CacheDriver } from "./cache.driver.js";

// ─── UNI-ENGINE ───────────────────────────────────────────────

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
      pulse: Math.abs(a.vector),
      swing: Schwingung.calc(a.value).swing   // NEU: atomare Schwingung
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

  // 6) RUN · Vollausführung (DEIN FEHLENDER BLOCK)
  RUN(key, values) {
    this.init(values);
    this.core(values);
    this.blitz();
    this.graviton();
    this.cache(key);

    return {
      axis3: this.axis3,
      axis9: this.axis9,
      axis27: this.axis27,
      axis81: this.axis81,
      pipeline21: this.pipeline21,
      blitz21: this.blitz21,
      graviton: this.RAM,
      sorted: this.SORTED,
      shadow: this.shadow,
      life360: this.life360
    };
  }
};
