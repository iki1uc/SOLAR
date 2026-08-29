// ───────────────────────────────────────────────
// TION.js · Sichtbarkeit von SEN·SA·TION
// Vernarrativierter Impuls + Algorithmus
// ───────────────────────────────────────────────

import { Schwingung } from "./SEN.js";
import SA from "./SA.js";
import { UNIEngine } from "./uni.engine.js";

export const TION = {

    frame: 0,

    // 1) IMPULS · erzeugt einen neuen System‑Impuls
    impulse() {
        this.frame++;

        const swing = Schwingung.calc(this.frame);

        const values = Array.from({length:81}, (_,i)=>i+1);
        const engine = UNIEngine.RUN("TION", values);

        return {
            frame: this.frame,
            swing,
            engine,
            status: SA
        };
    },

    // 2) NARRATIV · erzeugt die System‑Geschichte
    narrativ(data) {
        return `
SEN·SA·TION FRAME ${data.frame}

STATUS: ${data.status.STATUS}
IMPULSE: ${data.status.IMPULSE}
HARMONIE: ${data.status.HARMONIE}

SWING: ${data.swing.swing}
SOLAR: ${data.swing.solar}
ENERGIE: ${data.swing.energy}
GRAVITATION: ${data.swing.gravitation}

ALUF: ${data.status.ALUF}
ROOT: ${data.status.ROOT}

HALLE: ${data.status.HALLE}
INDEX: ${data.status.INDEX}
MODULE: ${data.status.MODULE}

MELDUNG:
"${data.status.MELDUNG}"
`;
    },

    // 3) RUN · Hauptfunktion für TION.html
    RUN() {
        const data = this.impulse();
        return this.narrativ(data);
    }
};
