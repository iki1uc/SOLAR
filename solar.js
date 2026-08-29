import { EVOTAAL } from "./evotaal.js";
import { NIRWANA } from "./nirwana.js";

export const UNIEngine = {
  // ... bestehender Code ...

  // NEU: EVOcity-Integration
  evo(values) {
    const miss = EVOTAAL.miss(this.axis3, this.axis9);
    if (miss.miss > 0) {
      this.evo = EVOTAAL.solve(values);
      this.nirwana = NIRWANA.RUN(values);
    }
    return { miss, evo: this.evo, nirwana: this.nirwana };
  },

  RUN(key, values) {
    this.init(values);
    this.core(values);
    this.blitz();
    this.graviton();
    this.cache(key);
    this.evo(values); // NEU

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
      life360: this.life360,
      evo: this.evo,       // NEU
      nirwana: this.nirwana // NEU
    };
  }
};
