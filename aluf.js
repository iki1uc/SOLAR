// ─── ALUF · Offener Raum ────────────────────────────────────────
// Leben ist kein Labyrinth mehr

export const ALUF = {

  // 1) Freiheit: Jede Station hat Exit
  exit(station) {
    return {
      station,
      status: "FREI",
      aluf: {
        A: station + ".axis",
        L: station + ".light",
        U: "OUR.base",
        F: "EXIT"
      },
      labyrinth: false
    };
  },

  // 2) Alle Einzeichen-Respos offen
  open(respos) {
    return respos.map(r => ({
      ...r,
      aluf: this.exit(r.station),
      ausweg: true
    }));
  },

  // 3) ALUF-Parameter für jede Station
  params(station, axis3, life360) {
    return {
      station,
      aluf: {
        Achse: axis3,
        Licht: life360,
        Ursprung: "OUR.base",
        Freiheit: "EXIT"
      },
      offen: true
    };
  }
};
