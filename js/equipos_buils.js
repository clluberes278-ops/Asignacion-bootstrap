/* ============================================================
   BD_Builds - Datos estructurados de Builds y Equipos
    ============================================================ */

const BD_Builds = {

    "Sunna": {
        buildPremium: {
            wengine: { nombre: "Thoughtbop", imagen: "https://tse2.mm.bing.net/th/id/OIP.amjLgo1inFvew0ANZNx5jgAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" },
            altWengines: [
                { nombre: "Weeping Cradle",   imagen: "https://mintparm.jp/zenlesszonezero/wp-content/uploads/2024/09/Weeping-Cradle.webp" },
                { nombre: "Kaboom the Cannon", imagen: "https://www.korometa.com/wp-content/uploads/2024/07/kaboom-the-cannon.png" }
            ],
            discSet: [
                { nombre: "Moonlight Lullaby", piezas: 4, imagen: "https://img.game8.co/4254751/7e0cf5cd2fbb0dc0459e3d50e50bb49a.png/show" },
                { nombre: "Astral Voice",      piezas: 2, imagen: "https://techwiser.com/wp-content/uploads/2025/06/1-25.webp" }
            ],
            mainStats: { 6: "Regen. de Energía / ATQ", 5: "ATQ", 4: "ATQ" },
            substats: ["ATQ", "Prob. de Golpe Crítico", "Daño Crítico"]
        },
        buildF2P: {
            wengine: { nombre: "Weeping Cradle", imagen: "https://mintparm.jp/zenlesszonezero/wp-content/uploads/2024/09/Weeping-Cradle.webp" },
            altWengines: [
                { nombre: "Kaboom the Cannon", imagen: "https://www.korometa.com/wp-content/uploads/2024/07/kaboom-the-cannon.png" }
            ],
            discSet: [
                { nombre: "Moonlight Lullaby", piezas: 4, imagen: "https://img.game8.co/4254751/7e0cf5cd2fbb0dc0459e3d50e50bb49a.png/show" },
                { nombre: "Astral Voice",      piezas: 2, imagen: "https://techwiser.com/wp-content/uploads/2025/06/1-25.webp" }
            ],
            mainStats: { 6: "Regen. de Energía / ATQ", 5: "ATQ", 4: "ATQ" },
            substats: ["ATQ", "Prob. de Golpe Crítico", "Daño Crítico"]
        },
        equipos: [
            {
                nombre: "Equipo F2P de Sunna",
                miembros: [
                    { id: "Sunna", rol: "Auxiliar" },
                    { id: "Billy", rol: "Atacante" },
                    { id: "Anby",  rol: "Aturdidor" }
                ],
                bangboo: { nombre: "Sumoboo", imagen: "https://tse4.mm.bing.net/th/id/OIP.YzWVubEGMCCGPuP17_8EDwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" }
            },
            {
                nombre: "Equipo Anómalo de Sunna",
                miembros: [
                    { id: "Sunna",  rol: "Auxiliar" },
                    { id: "Aria",   rol: "Anómalo" },
                    { id: "Yuzuha", rol: "Auxiliar" }
                ],
                bangboo: { nombre: "Biggest Fan", imagen: "https://static.icy-veins.com/images/zenless-zone-zero/bangboo/biggest-fan.webp" },
            }
        ]
    },

    "Ellen": {
        buildPremium: {
            wengine: { nombre: "Deep Sea Visitor", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_S_11.png" },
            altWengines: [
                { nombre: "The Brimstone", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_S_01.png" },
                { nombre: "Starlight Engine", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_01.png" }
            ],
            discSet: [
                { nombre: "Polar Metal", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Ice_01.png" },
                { nombre: "Woodpecker Electro", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Crit_01.png" }
            ],
            mainStats: { 6: "ATQ%", 5: "Daño de Hielo", 4: "Prob. Crítico / Daño Crítico" },
            substats: ["Prob. Crítico", "Daño Crítico", "ATQ%", "Perforación"]
        },
        buildF2P: {
            wengine: { nombre: "Starlight Engine", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_01.png" },
            altWengines: [
                { nombre: "[Lunar] Noviluna", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_B_01.png" }
            ],
            discSet: [
                { nombre: "Polar Metal", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Ice_01.png" },
                { nombre: "Woodpecker Electro", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Crit_01.png" }
            ],
            mainStats: { 6: "ATQ%", 5: "Daño de Hielo", 4: "Prob. Crítico" },
            substats: ["ATQ%", "Prob. Crítico", "Daño Crítico"]
        },
        equipos: [
            {
                nombre: "Equipo Monohielo Victoria",
                miembros: [
                    { id: "Ellen", rol: "Atacante" },
                    { id: "Lycaon", rol: "Aturdidor" },
                    { id: "Soukaku", rol: "Auxiliar" }
                ],
                bangboo: { nombre: "Sharkboo", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Bangboo_S_02.png" }
            }
        ]
    },

    "Zhu Yuan": {
        buildPremium: {
            wengine: { nombre: "Riot Suppressor Mark VI", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_S_12.png" },
            altWengines: [
                { nombre: "The Brimstone", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_S_01.png" },
                { nombre: "Starlight Engine", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_01.png" }
            ],
            discSet: [
                { nombre: "Chaotic Metal", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Ether_01.png" },
                { nombre: "Woodpecker Electro", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Crit_01.png" }
            ],
            mainStats: { 6: "ATQ%", 5: "Daño de Éter", 4: "Prob. Crítico / Daño Crítico" },
            substats: ["Prob. Crítico", "Daño Crítico", "ATQ%"]
        },
        buildF2P: {
            wengine: { nombre: "Starlight Engine", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_01.png" },
            altWengines: [],
            discSet: [
                { nombre: "Chaotic Metal", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Ether_01.png" },
                { nombre: "Woodpecker Electro", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Crit_01.png" }
            ],
            mainStats: { 6: "ATQ%", 5: "Daño de Éter", 4: "Prob. Crítico" },
            substats: ["Prob. Crítico", "Daño Crítico", "ATQ%"]
        },
        equipos: [
            {
                nombre: "Equipo NEPS Éter",
                miembros: [
                    { id: "Zhu Yuan", rol: "Atacante" },
                    { id: "Qingyi", rol: "Aturdidor" },
                    { id: "Nicole", rol: "Auxiliar" }
                ],
                bangboo: { nombre: "Resonaboo", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Bangboo_S_05.png" }
            }
        ]
    },

    "Jane Doe": {
        buildPremium: {
            wengine: { nombre: "Sharpened Stinger", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_S_13.png" },
            altWengines: [
                { nombre: "Weeping Gemini", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_08.png" },
                { nombre: "Roaring Ride", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_09.png" }
            ],
            discSet: [
                { nombre: "Fanged Metal", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Physical_01.png" },
                { nombre: "Freedom Blues", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Anomaly_01.png" }
            ],
            mainStats: { 6: "Maestría de Anomalía", 5: "Daño Físico / ATQ%", 4: "Prob. de Anomalía" },
            substats: ["Maestría de Anomalía", "ATQ%", "Penetración"]
        },
        buildF2P: {
            wengine: { nombre: "Weeping Gemini", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_08.png" },
            altWengines: [
                { nombre: "Rainforest Gourmet", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_10.png" }
            ],
            discSet: [
                { nombre: "Fanged Metal", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Physical_01.png" },
                { nombre: "Freedom Blues", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Anomaly_01.png" }
            ],
            mainStats: { 6: "Maestría de Anomalía", 5: "ATQ%", 4: "Prob. de Anomalía" },
            substats: ["Maestría de Anomalía", "ATQ%"]
        },
        equipos: [
            {
                nombre: "Equipo Anomalía NEPS",
                miembros: [
                    { id: "Jane Doe", rol: "Anomalo" },
                    { id: "Seth", rol: "Defensor" },
                    { id: "Grace", rol: "Anomalo" }
                ],
                bangboo: { nombre: "Officer Cui", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Bangboo_S_08.png" }
            }
        ]
    },

    "Ukinami Yuzuha": {
        buildPremium: {
            wengine: { nombre: "Spook Shack Exclusive", imagen: "https://placehold.co/100x100?text=W-Engine+Yuzuha" },
            altWengines: [
                { nombre: "Weeping Cradle", imagen: "https://mintparm.jp/zenlesszonezero/wp-content/uploads/2024/09/Weeping-Cradle.webp" }
            ],
            discSet: [
                { nombre: "Fanged Metal", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Physical_01.png" },
                { nombre: "Swing Jazz", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Energy_01.png" }
            ],
            mainStats: { 6: "Regen. de Energía", 5: "Daño Físico", 4: "ATQ%" },
            substats: ["ATQ%", "Prob. Crítico", "Daño Crítico"]
        },
        buildF2P: {
            wengine: { nombre: "Kaboom the Cannon", imagen: "https://www.korometa.com/wp-content/uploads/2024/07/kaboom-the-cannon.png" },
            altWengines: [],
            discSet: [
                { nombre: "Fanged Metal", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Physical_01.png" },
                { nombre: "Swing Jazz", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Energy_01.png" }
            ],
            mainStats: { 6: "Regen. de Energía", 5: "ATQ%", 4: "ATQ%" },
            substats: ["ATQ%", "Regen. Energía"]
        },
        equipos: [
            {
                nombre: "Equipo Sinergia Promeia",
                miembros: [
                    { id: "Ukinami Yuzuha", rol: "Auxiliar" },
                    { id: "Promeia", rol: "Anomalo" },
                    { id: "Nicole", rol: "Auxiliar" } // Reemplazo seguro si no existe Velina en BD
                ],
                bangboo: { nombre: "Luckyboo", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Bangboo_A_05.png" }
            },
            {
                nombre: "Soporte Zhu Yuan",
                miembros: [
                    { id: "Ukinami Yuzuha", rol: "Auxiliar" },
                    { id: "Zhu Yuan", rol: "Atacante" },
                    { id: "Nicole", rol: "Auxiliar" }
                ],
                bangboo: { nombre: "Resonaboo", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Bangboo_S_05.png" }
            }
        ]
    },

    "Promeia": {
        buildPremium: {
            wengine: { nombre: "Krampus Judgment", imagen: "https://placehold.co/100x100?text=W-Engine+Promeia" },
            altWengines: [
                { nombre: "Weeping Gemini", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_08.png" }
            ],
            discSet: [
                { nombre: "Polar Metal", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Ice_01.png" },
                { nombre: "Freedom Blues", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Anomaly_01.png" }
            ],
            mainStats: { 6: "Maestría de Anomalía", 5: "Daño de Hielo", 4: "Prob. de Anomalía" },
            substats: ["Maestría de Anomalía", "ATQ%", "Perforación"]
        },
        buildF2P: {
            wengine: { nombre: "Rainforest Gourmet", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_10.png" },
            altWengines: [],
            discSet: [
                { nombre: "Polar Metal", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Ice_01.png" },
                { nombre: "Freedom Blues", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Anomaly_01.png" }
            ],
            mainStats: { 6: "Maestría de Anomalía", 5: "ATQ%", 4: "Prob. de Anomalía" },
            substats: ["Maestría de Anomalía", "ATQ%"]
        },
        equipos: [
            {
                nombre: "Trío Anomalía Krampus",
                miembros: [
                    { id: "Promeia", rol: "Anomalo" },
                    { id: "Zhao", rol: "Defensor" },
                    { id: "Ukinami Yuzuha", rol: "Auxiliar" }
                ],
                bangboo: { nombre: "Sharkboo", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Bangboo_S_02.png" }
            }
        ]
    },

    "Zhao": {
        buildPremium: {
            wengine: { nombre: "Frozen Scales", imagen: "https://placehold.co/100x100?text=W-Engine+Zhao" },
            altWengines: [
                { nombre: "Big Cylinder", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_06.png" }
            ],
            discSet: [
                { nombre: "Polar Metal", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Ice_01.png" },
                { nombre: "Soul Rock", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_DEF_01.png" }
            ],
            mainStats: { 6: "DEF%", 5: "Daño de Hielo", 4: "Prob. Crítico" },
            substats: ["DEF%", "Prob. Crítico", "Daño Crítico"]
        },
        buildF2P: {
            wengine: { nombre: "Spring Embrace", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_11.png" },
            altWengines: [],
            discSet: [
                { nombre: "Soul Rock", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_DEF_01.png" },
                { nombre: "Polar Metal", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Ice_01.png" }
            ],
            mainStats: { 6: "DEF%", 5: "DEF%", 4: "DEF%" },
            substats: ["DEF%", "Vida%", "Resistencia"]
        },
        equipos: [
            {
                nombre: "Defensa Sinergia Krampus",
                miembros: [
                    { id: "Zhao", rol: "Defensor" },
                    { id: "Promeia", rol: "Anomalo" },
                    { id: "Ukinami Yuzuha", rol: "Auxiliar" }
                ],
                bangboo: { nombre: "Penguinboo", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Bangboo_A_02.png" }
            },
            {
                nombre: "Escuadrón Victoria Hielo",
                miembros: [
                    { id: "Zhao", rol: "Defensor" },
                    { id: "Ellen", rol: "Atacante" },
                    { id: "Lycaon", rol: "Aturdidor" }
                ],
                bangboo: { nombre: "Sharkboo", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Bangboo_S_02.png" }
            }
        ]
    },

    "Dialyn": {
        buildPremium: {
            wengine: { nombre: "The Restrained", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_S_06.png" },
            altWengines: [
                { nombre: "Precious Fossilized Core", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_05.png" }
            ],
            discSet: [
                { nombre: "Shockstar Disco", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Stun_01.png" },
                { nombre: "Fanged Metal", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Physical_01.png" }
            ],
            mainStats: { 6: "Impacto", 5: "Daño Físico / ATQ%", 4: "Prob. Crítico / ATQ%" },
            substats: ["Impacto", "ATQ%", "Prob. Crítico"]
        },
        buildF2P: {
            wengine: { nombre: "Demara Battery Mark II", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_04.png" },
            altWengines: [],
            discSet: [
                { nombre: "Shockstar Disco", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Stun_01.png" },
                { nombre: "Fanged Metal", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Physical_01.png" }
            ],
            mainStats: { 6: "Impacto", 5: "ATQ%", 4: "ATQ%" },
            substats: ["Impacto", "ATQ%"]
        },
        equipos: [
            {
                nombre: "Equipo Aturdimiento Krampus",
                miembros: [
                    { id: "Dialyn", rol: "Aturdidor" },
                    { id: "Promeia", rol: "Anomalo" },
                    { id: "Ukinami Yuzuha", rol: "Auxiliar" }
                ],
                bangboo: { nombre: "Amillion", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Bangboo_S_01.png" }
            }
        ]
    },

    "Ye Shunguang": {
        buildPremium: {
            wengine: { nombre: "Steel Cushion", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_S_02.png" },
            altWengines: [
                { nombre: "Starlight Engine", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_01.png" }
            ],
            discSet: [
                { nombre: "Fanged Metal", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Physical_01.png" },
                { nombre: "Woodpecker Electro", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Crit_01.png" }
            ],
            mainStats: { 6: "ATQ%", 5: "Daño Físico", 4: "Prob. Crítico / Daño Crítico" },
            substats: ["Prob. Crítico", "Daño Crítico", "ATQ%", "Perforación"]
        },
        buildF2P: {
            wengine: { nombre: "Starlight Engine", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_01.png" },
            altWengines: [],
            discSet: [
                { nombre: "Fanged Metal", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Physical_01.png" },
                { nombre: "Woodpecker Electro", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Crit_01.png" }
            ],
            mainStats: { 6: "ATQ%", 5: "Daño Físico", 4: "Prob. Crítico" },
            substats: ["Prob. Crítico", "ATQ%", "Daño Crítico"]
        },
        equipos: [
            {
                nombre: "Trío Yunkui Summit",
                miembros: [
                    { id: "Ye Shunguang", rol: "Atacante" },
                    { id: "Yixuan", rol: "Ruptura" },
                    { id: "Ju Fufu", rol: "Aturdidor" }
                ],
                bangboo: { nombre: "Bagboo", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Bangboo_A_01.png" }
            }
        ]
    },

    "Yixuan": {
        buildPremium: {
            wengine: { nombre: "Tome of Presages", imagen: "https://placehold.co/100x100?text=W-Engine+Yixuan" },
            altWengines: [
                { nombre: "Weeping Gemini", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_08.png" }
            ],
            discSet: [
                { nombre: "Freedom Blues", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Anomaly_01.png" },
                { nombre: "Swing Jazz", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Energy_01.png" }
            ],
            mainStats: { 6: "Maestría de Anomalía", 5: "ATQ%", 4: "Prob. de Anomalía" },
            substats: ["Maestría de Anomalía", "ATQ%", "Regen. de Energía"]
        },
        buildF2P: {
            wengine: { nombre: "Weeping Gemini", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_08.png" },
            altWengines: [],
            discSet: [
                { nombre: "Freedom Blues", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Anomaly_01.png" },
                { nombre: "Swing Jazz", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Energy_01.png" }
            ],
            mainStats: { 6: "Maestría de Anomalía", 5: "ATQ%", 4: "Prob. de Anomalía" },
            substats: ["Maestría de Anomalía", "ATQ%"]
        },
        equipos: [
            {
                nombre: "Sinergia Yunkui Táctica",
                miembros: [
                    { id: "Yixuan", rol: "Ruptura" },
                    { id: "Pan Yinhui", rol: "Defensor" },
                    { id: "Ju Fufu", rol: "Aturdidor" }
                ],
                bangboo: { nombre: "Exploreboo", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Bangboo_A_06.png" }
            }
        ]
    },

    "Ju Fufu": {
        buildPremium: {
            wengine: { nombre: "Hellfire Gears", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_S_04.png" },
            altWengines: [
                { nombre: "Precious Fossilized Core", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_05.png" }
            ],
            discSet: [
                { nombre: "Shockstar Disco", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Stun_01.png" },
                { nombre: "Inferno Metal", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Fire_01.png" }
            ],
            mainStats: { 6: "Impacto", 5: "Daño de Fuego / ATQ%", 4: "Prob. Crítico" },
            substats: ["Impacto", "ATQ%", "Prob. Crítico"]
        },
        buildF2P: {
            wengine: { nombre: "Precious Fossilized Core", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_05.png" },
            altWengines: [],
            discSet: [
                { nombre: "Shockstar Disco", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Stun_01.png" },
                { nombre: "Inferno Metal", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Fire_01.png" }
            ],
            mainStats: { 6: "Impacto", 5: "ATQ%", 4: "ATQ%" },
            substats: ["Impacto", "ATQ%"]
        },
        equipos: [
            {
                nombre: "Yunkui Vanguardia",
                miembros: [
                    { id: "Ju Fufu", rol: "Aturdidor" },
                    { id: "Yixuan", rol: "Ruptura" },
                    { id: "Pan Yinhui", rol: "Defensor" }
                ],
                bangboo: { nombre: "Cryboo", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Bangboo_A_03.png" }
            }
        ]
    },

    "Pan Yinhui": {
        buildPremium: {
            wengine: { nombre: "Tusks of Fury", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_S_14.png" },
            altWengines: [
                { nombre: "Bunny Band", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_07.png" }
            ],
            discSet: [
                { nombre: "Soul Rock", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_DEF_01.png" },
                { nombre: "Swing Jazz", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Energy_01.png" }
            ],
            mainStats: { 6: "DEF%", 5: "DEF%", 4: "DEF%" },
            substats: ["DEF%", "Vida%", "Regen. de Energía"]
        },
        buildF2P: {
            wengine: { nombre: "Bunny Band", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_07.png" },
            altWengines: [],
            discSet: [
                { nombre: "Soul Rock", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_DEF_01.png" },
                { nombre: "Swing Jazz", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Energy_01.png" }
            ],
            mainStats: { 6: "DEF%", 5: "DEF%", 4: "DEF%" },
            substats: ["DEF%", "Vida%"]
        },
        equipos: [
            {
                nombre: "Muralla Yunkui",
                miembros: [
                    { id: "Pan Yinhui", rol: "Defensor" },
                    { id: "Yixuan", rol: "Ruptura" },
                    { id: "Ju Fufu", rol: "Aturdidor" }
                ],
                bangboo: { nombre: "Avocaboo", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Bangboo_A_07.png" }
            }
        ]
    },

    "Nangong Yu": {
        buildPremium: {
            wengine: { nombre: "Angelic Chord", imagen: "https://placehold.co/100x100?text=W-Engine+Nangong" },
            altWengines: [
                { nombre: "The Restrained", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_S_06.png" }
            ],
            discSet: [
                { nombre: "Shockstar Disco", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Stun_01.png" },
                { nombre: "Chaotic Metal", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Ether_01.png" }
            ],
            mainStats: { 6: "Impacto", 5: "Daño de Éter", 4: "Prob. Crítico" },
            substats: ["Impacto", "ATQ%", "Prob. Crítico"]
        },
        buildF2P: {
            wengine: { nombre: "Demara Battery Mark II", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_04.png" },
            altWengines: [],
            discSet: [
                { nombre: "Shockstar Disco", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Stun_01.png" },
                { nombre: "Chaotic Metal", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Ether_01.png" }
            ],
            mainStats: { 6: "Impacto", 5: "ATQ%", 4: "ATQ%" },
            substats: ["Impacto", "ATQ%"]
        },
        equipos: [
            {
                nombre: "Angels of Delusion - Impacto",
                miembros: [
                    { id: "Nangong Yu", rol: "Aturdidor" },
                    { id: "Aria", rol: "Anomalo" },
                    { id: "Sunna", rol: "Auxiliar" }
                ],
                bangboo: { nombre: "Resonaboo", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Bangboo_S_05.png" }
            }
        ]
    },

    "Aria": {
        buildPremium: {
            wengine: { nombre: "Vocal Synthesizer", imagen: "https://placehold.co/100x100?text=W-Engine+Aria" },
            altWengines: [
                { nombre: "Weeping Gemini", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_08.png" }
            ],
            discSet: [
                { nombre: "Chaotic Metal", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Ether_01.png" },
                { nombre: "Freedom Blues", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Anomaly_01.png" }
            ],
            mainStats: { 6: "Maestría de Anomalía", 5: "Daño de Éter", 4: "Prob. de Anomalía" },
            substats: ["Maestría de Anomalía", "ATQ%", "Perforación"]
        },
        buildF2P: {
            wengine: { nombre: "Weeping Gemini", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_08.png" },
            altWengines: [],
            discSet: [
                { nombre: "Freedom Blues", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Anomaly_01.png" },
                { nombre: "Chaotic Metal", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Ether_01.png" }
            ],
            mainStats: { 6: "Maestría de Anomalía", 5: "ATQ%", 4: "Prob. de Anomalía" },
            substats: ["Maestría de Anomalía", "ATQ%"]
        },
        equipos: [
            {
                nombre: "Coro de Éter",
                miembros: [
                    { id: "Aria", rol: "Anomalo" },
                    { id: "Nangong Yu", rol: "Aturdidor" },
                    { id: "Sunna", rol: "Auxiliar" }
                ],
                bangboo: { nombre: "Devilboo", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Bangboo_A_08.png" }
            }
        ]
    },

    "Cissia": {
        buildPremium: {
            wengine: { nombre: "Metropolitan Enforcer", imagen: "https://placehold.co/100x100?text=W-Engine+Cissia" },
            altWengines: [
                { nombre: "The Brimstone", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_S_01.png" }
            ],
            discSet: [
                { nombre: "Thunder Metal", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Electric_01.png" },
                { nombre: "Woodpecker Electro", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Crit_01.png" }
            ],
            mainStats: { 6: "ATQ%", 5: "Daño Eléctrico", 4: "Prob. Crítico / Daño Crítico" },
            substats: ["Prob. Crítico", "Daño Crítico", "ATQ%", "Perforación"]
        },
        buildF2P: {
            wengine: { nombre: "Starlight Engine", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_01.png" },
            altWengines: [],
            discSet: [
                { nombre: "Thunder Metal", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Electric_01.png" },
                { nombre: "Woodpecker Electro", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Crit_01.png" }
            ],
            mainStats: { 6: "ATQ%", 5: "Daño Eléctrico", 4: "Prob. Crítico" },
            substats: ["Prob. Crítico", "Daño Crítico", "ATQ%"]
        },
        equipos: [
            {
                nombre: "Operativo Metropolitano",
                miembros: [
                    { id: "Cissia", rol: "Atacante" },
                    { id: "Trigger", rol: "Aturdidor" },
                    { id: "Rina", rol: "Auxiliar" }
                ],
                bangboo: { nombre: "Plugboo", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Bangboo_S_04.png" }
            }
        ]
    },

    "Pyrois": {
        buildPremium: {
            wengine: { nombre: "Phaethon's Guiding Star", imagen: "https://placehold.co/100x100?text=W-Engine+Pyrois" },
            altWengines: [
                { nombre: "Riot Suppressor Mark VI", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_S_12.png" }
            ],
            discSet: [
                { nombre: "Chaotic Metal", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Ether_01.png" },
                { nombre: "Woodpecker Electro", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Crit_01.png" }
            ],
            mainStats: { 6: "ATQ%", 5: "Daño de Éter", 4: "Prob. Crítico / Daño Crítico" },
            substats: ["Prob. Crítico", "Daño Crítico", "ATQ%", "Perforación"]
        },
        buildF2P: {
            wengine: { nombre: "Starlight Engine", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_01.png" },
            altWengines: [],
            discSet: [
                { nombre: "Chaotic Metal", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Ether_01.png" },
                { nombre: "Woodpecker Electro", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Crit_01.png" }
            ],
            mainStats: { 6: "ATQ%", 5: "Daño de Éter", 4: "Prob. Crítico" },
            substats: ["Prob. Crítico", "Daño Crítico", "ATQ%"]
        },
        equipos: [
            {
                nombre: "Red Phaethon",
                miembros: [
                    { id: "Pyrois", rol: "Atacante" },
                    { id: "Anby", rol: "Aturdidor" }, // Reemplazos genéricos si Norma/Velina no están instanciados
                    { id: "Nicole", rol: "Auxiliar" }
                ],
                bangboo: { nombre: "Amillion", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Bangboo_S_01.png" }
            }
        ]
    },

    // ============================================================
// FALTANTES - BUILD GENÉRICAS POR ROL Y ATRIBUTO
// ============================================================

    "Nekomata": {
        buildPremium: {
            wengine: { nombre: "The Brimstone", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_S_01.png" },
            altWengines: [
                { nombre: "Starlight Engine", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_01.png" }
            ],
            discSet: [
                { nombre: "Fanged Metal", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Physical_01.png" },
                { nombre: "Woodpecker Electro", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Crit_01.png" }
            ],
            mainStats: { 6: "ATQ%", 5: "Daño Físico", 4: "Prob. Crítico / Daño Crítico" },
            substats: ["Prob. Crítico", "Daño Crítico", "ATQ%"]
        },
        buildF2P: {
            wengine: { nombre: "Starlight Engine", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_01.png" },
            altWengines: [],
            discSet: [
                { nombre: "Fanged Metal", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Physical_01.png" },
                { nombre: "Woodpecker Electro", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Crit_01.png" }
            ],
            mainStats: { 6: "ATQ%", 5: "Daño Físico", 4: "Prob. Crítico" },
            substats: ["Prob. Crítico", "ATQ%", "Daño Crítico"]
        },
        equipos: [
            {
                nombre: "Liebres Astutas Clásico",
                miembros: [
                    { id: "Nekomata", rol: "Atacante" },
                    { id: "Anby", rol: "Aturdidor" },
                    { id: "Nicole", rol: "Auxiliar" }
                ],
                bangboo: { nombre: "Amillion", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Bangboo_S_01.png" }
            }
        ]
    },

    "Anby": {
        buildPremium: {
            wengine: { nombre: "Precious Fossilized Core", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_05.png" },
            altWengines: [
                { nombre: "Demara Battery Mark II", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_04.png" }
            ],
            discSet: [
                { nombre: "Shockstar Disco", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Stun_01.png" },
                { nombre: "Thunder Metal", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Electric_01.png" }
            ],
            mainStats: { 6: "Impacto", 5: "ATQ%", 4: "Prob. Crítico" },
            substats: ["Impacto", "ATQ%", "Prob. Crítico"]
        },
        buildF2P: {
            wengine: { nombre: "Demara Battery Mark II", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_04.png" },
            altWengines: [],
            discSet: [
                { nombre: "Shockstar Disco", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Stun_01.png" },
                { nombre: "Thunder Metal", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Electric_01.png" }
            ],
            mainStats: { 6: "Impacto", 5: "ATQ%", 4: "ATQ%" },
            substats: ["Impacto", "ATQ%"]
        },
        equipos: [
            {
                nombre: "Electro Shock",
                miembros: [
                    { id: "Anby", rol: "Aturdidor" },
                    { id: "Billy", rol: "Atacante" },
                    { id: "Nicole", rol: "Auxiliar" }
                ],
                bangboo: { nombre: "Plugboo", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Bangboo_S_04.png" }
            }
        ]
    },

    "Nicole": {
        buildPremium: {
            wengine: { nombre: "Kaboom the Cannon", imagen: "https://www.korometa.com/wp-content/uploads/2024/07/kaboom-the-cannon.png" },
            altWengines: [
                { nombre: "Weeping Cradle", imagen: "https://mintparm.jp/zenlesszonezero/wp-content/uploads/2024/09/Weeping-Cradle.webp" }
            ],
            discSet: [
                { nombre: "Swing Jazz", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Energy_01.png" },
                { nombre: "Chaotic Metal", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Ether_01.png" }
            ],
            mainStats: { 6: "Regen. de Energía", 5: "ATQ%", 4: "ATQ%" },
            substats: ["ATQ%", "Regen. de Energía", "Penetración"]
        },
        buildF2P: {
            wengine: { nombre: "Kaboom the Cannon", imagen: "https://www.korometa.com/wp-content/uploads/2024/07/kaboom-the-cannon.png" },
            altWengines: [],
            discSet: [
                { nombre: "Swing Jazz", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Energy_01.png" },
                { nombre: "Chaotic Metal", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Ether_01.png" }
            ],
            mainStats: { 6: "Regen. de Energía", 5: "ATQ%", 4: "ATQ%" },
            substats: ["ATQ%", "Regen. de Energía"]
        },
        equipos: [
            {
                nombre: "Soporte Éter",
                miembros: [
                    { id: "Nicole", rol: "Auxiliar" },
                    { id: "Zhu Yuan", rol: "Atacante" },
                    { id: "Qingyi", rol: "Aturdidor" }
                ],
                bangboo: { nombre: "Resonaboo", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Bangboo_S_05.png" }
            }
        ]
    },

    "Billy": {
        buildPremium: {
            wengine: { nombre: "The Brimstone", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_S_01.png" },
            altWengines: [
                { nombre: "Starlight Engine", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_01.png" }
            ],
            discSet: [
                { nombre: "Fanged Metal", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Physical_01.png" },
                { nombre: "Woodpecker Electro", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Crit_01.png" }
            ],
            mainStats: { 6: "ATQ%", 5: "Daño Físico", 4: "Prob. Crítico / Daño Crítico" },
            substats: ["Prob. Crítico", "Daño Crítico", "ATQ%"]
        },
        buildF2P: {
            wengine: { nombre: "Starlight Engine", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_01.png" },
            altWengines: [],
            discSet: [
                { nombre: "Fanged Metal", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Physical_01.png" },
                { nombre: "Woodpecker Electro", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Crit_01.png" }
            ],
            mainStats: { 6: "ATQ%", 5: "Daño Físico", 4: "Prob. Crítico" },
            substats: ["Prob. Crítico", "ATQ%", "Daño Crítico"]
        },
        equipos: [
            {
                nombre: "Duelo de Forajidos",
                miembros: [
                    { id: "Billy", rol: "Atacante" },
                    { id: "Anby", rol: "Aturdidor" },
                    { id: "Nicole", rol: "Auxiliar" }
                ],
                bangboo: { nombre: "Amillion", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Bangboo_S_01.png" }
            }
        ]
    },

    "Lycaon": {
        buildPremium: {
            wengine: { nombre: "The Restrained", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_S_06.png" },
            altWengines: [
                { nombre: "Precious Fossilized Core", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_05.png" }
            ],
            discSet: [
                { nombre: "Shockstar Disco", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Stun_01.png" },
                { nombre: "Polar Metal", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Ice_01.png" }
            ],
            mainStats: { 6: "Impacto", 5: "Daño de Hielo", 4: "Prob. Crítico" },
            substats: ["Impacto", "ATQ%", "Prob. Crítico"]
        },
        buildF2P: {
            wengine: { nombre: "Demara Battery Mark II", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_04.png" },
            altWengines: [],
            discSet: [
                { nombre: "Shockstar Disco", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Stun_01.png" },
                { nombre: "Polar Metal", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Ice_01.png" }
            ],
            mainStats: { 6: "Impacto", 5: "ATQ%", 4: "ATQ%" },
            substats: ["Impacto", "ATQ%"]
        },
        equipos: [
            {
                nombre: "Victoria Hielo",
                miembros: [
                    { id: "Lycaon", rol: "Aturdidor" },
                    { id: "Ellen", rol: "Atacante" },
                    { id: "Soukaku", rol: "Auxiliar" }
                ],
                bangboo: { nombre: "Sharkboo", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Bangboo_S_02.png" }
            }
        ]
    },

    "Rina": {
        buildPremium: {
            wengine: { nombre: "Weeping Cradle", imagen: "https://mintparm.jp/zenlesszonezero/wp-content/uploads/2024/09/Weeping-Cradle.webp" },
            altWengines: [
                { nombre: "Kaboom the Cannon", imagen: "https://www.korometa.com/wp-content/uploads/2024/07/kaboom-the-cannon.png" }
            ],
            discSet: [
                { nombre: "Swing Jazz", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Energy_01.png" },
                { nombre: "Thunder Metal", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Electric_01.png" }
            ],
            mainStats: { 6: "Regen. de Energía", 5: "ATQ%", 4: "ATQ%" },
            substats: ["ATQ%", "Regen. de Energía", "Penetración"]
        },
        buildF2P: {
            wengine: { nombre: "Kaboom the Cannon", imagen: "https://www.korometa.com/wp-content/uploads/2024/07/kaboom-the-cannon.png" },
            altWengines: [],
            discSet: [
                { nombre: "Swing Jazz", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Energy_01.png" },
                { nombre: "Thunder Metal", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Electric_01.png" }
            ],
            mainStats: { 6: "Regen. de Energía", 5: "ATQ%", 4: "ATQ%" },
            substats: ["ATQ%", "Regen. de Energía"]
        },
        equipos: [
            {
                nombre: "Servicio Penetrante",
                miembros: [
                    { id: "Rina", rol: "Auxiliar" },
                    { id: "Grace", rol: "Anomalo" },
                    { id: "Anton", rol: "Atacante" }
                ],
                bangboo: { nombre: "Plugboo", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Bangboo_S_04.png" }
            }
        ]
    },

    "Corin": {
        buildPremium: {
            wengine: { nombre: "Steel Cushion", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_S_02.png" },
            altWengines: [
                { nombre: "Starlight Engine", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_01.png" }
            ],
            discSet: [
                { nombre: "Fanged Metal", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Physical_01.png" },
                { nombre: "Woodpecker Electro", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Crit_01.png" }
            ],
            mainStats: { 6: "ATQ%", 5: "Daño Físico", 4: "Prob. Crítico / Daño Crítico" },
            substats: ["Prob. Crítico", "Daño Crítico", "ATQ%"]
        },
        buildF2P: {
            wengine: { nombre: "Starlight Engine", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_01.png" },
            altWengines: [],
            discSet: [
                { nombre: "Fanged Metal", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Physical_01.png" },
                { nombre: "Woodpecker Electro", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Crit_01.png" }
            ],
            mainStats: { 6: "ATQ%", 5: "Daño Físico", 4: "Prob. Crítico" },
            substats: ["Prob. Crítico", "ATQ%", "Daño Crítico"]
        },
        equipos: [
            {
                nombre: "Limpieza Victoria",
                miembros: [
                    { id: "Corin", rol: "Atacante" },
                    { id: "Lycaon", rol: "Aturdidor" },
                    { id: "Rina", rol: "Auxiliar" }
                ],
                bangboo: { nombre: "Amillion", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Bangboo_S_01.png" }
            }
        ]
    },

    "Grace": {
        buildPremium: {
            wengine: { nombre: "Weeping Gemini", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_08.png" },
            altWengines: [
                { nombre: "Rainforest Gourmet", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_10.png" }
            ],
            discSet: [
                { nombre: "Freedom Blues", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Anomaly_01.png" },
                { nombre: "Thunder Metal", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Electric_01.png" }
            ],
            mainStats: { 6: "Maestría de Anomalía", 5: "Daño Eléctrico", 4: "Prob. de Anomalía" },
            substats: ["Maestría de Anomalía", "ATQ%", "Penetración"]
        },
        buildF2P: {
            wengine: { nombre: "Weeping Gemini", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_08.png" },
            altWengines: [],
            discSet: [
                { nombre: "Freedom Blues", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Anomaly_01.png" },
                { nombre: "Thunder Metal", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Electric_01.png" }
            ],
            mainStats: { 6: "Maestría de Anomalía", 5: "ATQ%", 4: "Prob. de Anomalía" },
            substats: ["Maestría de Anomalía", "ATQ%"]
        },
        equipos: [
            {
                nombre: "Industrias Eléctricas",
                miembros: [
                    { id: "Grace", rol: "Anomalo" },
                    { id: "Anton", rol: "Atacante" },
                    { id: "Koleda", rol: "Aturdidor" }
                ],
                bangboo: { nombre: "Plugboo", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Bangboo_S_04.png" }
            }
        ]
    },

    "Koleda": {
        buildPremium: {
            wengine: { nombre: "Hellfire Gears", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_S_04.png" },
            altWengines: [
                { nombre: "Precious Fossilized Core", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_05.png" }
            ],
            discSet: [
                { nombre: "Shockstar Disco", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Stun_01.png" },
                { nombre: "Inferno Metal", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Fire_01.png" }
            ],
            mainStats: { 6: "Impacto", 5: "Daño de Fuego", 4: "Prob. Crítico" },
            substats: ["Impacto", "ATQ%", "Prob. Crítico"]
        },
        buildF2P: {
            wengine: { nombre: "Demara Battery Mark II", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_04.png" },
            altWengines: [],
            discSet: [
                { nombre: "Shockstar Disco", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Stun_01.png" },
                { nombre: "Inferno Metal", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Fire_01.png" }
            ],
            mainStats: { 6: "Impacto", 5: "ATQ%", 4: "ATQ%" },
            substats: ["Impacto", "ATQ%"]
        },
        equipos: [
            {
                nombre: "Belobog Pesado",
                miembros: [
                    { id: "Koleda", rol: "Aturdidor" },
                    { id: "Grace", rol: "Anomalo" },
                    { id: "Ben", rol: "Defensor" }
                ],
                bangboo: { nombre: "Cryboo", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Bangboo_A_03.png" }
            }
        ]
    },

    "Anton": {
        buildPremium: {
            wengine: { nombre: "The Brimstone", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_S_01.png" },
            altWengines: [
                { nombre: "Starlight Engine", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_01.png" }
            ],
            discSet: [
                { nombre: "Thunder Metal", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Electric_01.png" },
                { nombre: "Woodpecker Electro", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Crit_01.png" }
            ],
            mainStats: { 6: "ATQ%", 5: "Daño Eléctrico", 4: "Prob. Crítico / Daño Crítico" },
            substats: ["Prob. Crítico", "Daño Crítico", "ATQ%"]
        },
        buildF2P: {
            wengine: { nombre: "Starlight Engine", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_01.png" },
            altWengines: [],
            discSet: [
                { nombre: "Thunder Metal", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Electric_01.png" },
                { nombre: "Woodpecker Electro", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Crit_01.png" }
            ],
            mainStats: { 6: "ATQ%", 5: "Daño Eléctrico", 4: "Prob. Crítico" },
            substats: ["Prob. Crítico", "ATQ%", "Daño Crítico"]
        },
        equipos: [
            {
                nombre: "Taladro Eléctrico",
                miembros: [
                    { id: "Anton", rol: "Atacante" },
                    { id: "Grace", rol: "Anomalo" },
                    { id: "Koleda", rol: "Aturdidor" }
                ],
                bangboo: { nombre: "Plugboo", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Bangboo_S_04.png" }
            }
        ]
    },

    "Ben": {
        buildPremium: {
            wengine: { nombre: "Tusks of Fury", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_S_14.png" },
            altWengines: [
                { nombre: "Bunny Band", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_07.png" }
            ],
            discSet: [
                { nombre: "Soul Rock", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_DEF_01.png" },
                { nombre: "Inferno Metal", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Fire_01.png" }
            ],
            mainStats: { 6: "DEF%", 5: "DEF%", 4: "DEF%" },
            substats: ["DEF%", "Vida%", "Regen. de Energía"]
        },
        buildF2P: {
            wengine: { nombre: "Bunny Band", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_07.png" },
            altWengines: [],
            discSet: [
                { nombre: "Soul Rock", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_DEF_01.png" },
                { nombre: "Inferno Metal", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Fire_01.png" }
            ],
            mainStats: { 6: "DEF%", 5: "DEF%", 4: "DEF%" },
            substats: ["DEF%", "Vida%"]
        },
        equipos: [
            {
                nombre: "Muro Belobog",
                miembros: [
                    { id: "Ben", rol: "Defensor" },
                    { id: "Koleda", rol: "Aturdidor" },
                    { id: "Grace", rol: "Anomalo" }
                ],
                bangboo: { nombre: "Avocaboo", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Bangboo_A_07.png" }
            }
        ]
    },

    "Soukaku": {
        buildPremium: {
            wengine: { nombre: "Kaboom the Cannon", imagen: "https://www.korometa.com/wp-content/uploads/2024/07/kaboom-the-cannon.png" },
            altWengines: [
                { nombre: "Weeping Cradle", imagen: "https://mintparm.jp/zenlesszonezero/wp-content/uploads/2024/09/Weeping-Cradle.webp" }
            ],
            discSet: [
                { nombre: "Swing Jazz", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Energy_01.png" },
                { nombre: "Polar Metal", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Ice_01.png" }
            ],
            mainStats: { 6: "Regen. de Energía", 5: "ATQ%", 4: "ATQ%" },
            substats: ["ATQ%", "Regen. de Energía", "Penetración"]
        },
        buildF2P: {
            wengine: { nombre: "Kaboom the Cannon", imagen: "https://www.korometa.com/wp-content/uploads/2024/07/kaboom-the-cannon.png" },
            altWengines: [],
            discSet: [
                { nombre: "Swing Jazz", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Energy_01.png" },
                { nombre: "Polar Metal", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Ice_01.png" }
            ],
            mainStats: { 6: "Regen. de Energía", 5: "ATQ%", 4: "ATQ%" },
            substats: ["ATQ%", "Regen. de Energía"]
        },
        equipos: [
            {
                nombre: "Sección 6 Hielo",
                miembros: [
                    { id: "Soukaku", rol: "Auxiliar" },
                    { id: "Miyabi", rol: "Anomalo" },
                    { id: "Yanagi", rol: "Anomalo" }
                ],
                bangboo: { nombre: "Sharkboo", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Bangboo_S_02.png" }
            }
        ]
    },

    "Yanagi": {
        buildPremium: {
            wengine: { nombre: "Weeping Gemini", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_08.png" },
            altWengines: [
                { nombre: "Rainforest Gourmet", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_10.png" }
            ],
            discSet: [
                { nombre: "Freedom Blues", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Anomaly_01.png" },
                { nombre: "Thunder Metal", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Electric_01.png" }
            ],
            mainStats: { 6: "Maestría de Anomalía", 5: "Daño Eléctrico", 4: "Prob. de Anomalía" },
            substats: ["Maestría de Anomalía", "ATQ%", "Penetración"]
        },
        buildF2P: {
            wengine: { nombre: "Weeping Gemini", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_08.png" },
            altWengines: [],
            discSet: [
                { nombre: "Freedom Blues", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Anomaly_01.png" },
                { nombre: "Thunder Metal", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Electric_01.png" }
            ],
            mainStats: { 6: "Maestría de Anomalía", 5: "ATQ%", 4: "Prob. de Anomalía" },
            substats: ["Maestría de Anomalía", "ATQ%"]
        },
        equipos: [
            {
                nombre: "Sección 6 Eléctrica",
                miembros: [
                    { id: "Yanagi", rol: "Anomalo" },
                    { id: "Harumasa", rol: "Atacante" },
                    { id: "Soukaku", rol: "Auxiliar" }
                ],
                bangboo: { nombre: "Plugboo", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Bangboo_S_04.png" }
            }
        ]
    },

    "Harumasa": {
        buildPremium: {
            wengine: { nombre: "The Brimstone", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_S_01.png" },
            altWengines: [
                { nombre: "Starlight Engine", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_01.png" }
            ],
            discSet: [
                { nombre: "Thunder Metal", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Electric_01.png" },
                { nombre: "Woodpecker Electro", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Crit_01.png" }
            ],
            mainStats: { 6: "ATQ%", 5: "Daño Eléctrico", 4: "Prob. Crítico / Daño Crítico" },
            substats: ["Prob. Crítico", "Daño Crítico", "ATQ%"]
        },
        buildF2P: {
            wengine: { nombre: "Starlight Engine", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_01.png" },
            altWengines: [],
            discSet: [
                { nombre: "Thunder Metal", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Electric_01.png" },
                { nombre: "Woodpecker Electro", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Crit_01.png" }
            ],
            mainStats: { 6: "ATQ%", 5: "Daño Eléctrico", 4: "Prob. Crítico" },
            substats: ["Prob. Crítico", "ATQ%", "Daño Crítico"]
        },
        equipos: [
            {
                nombre: "Sección 6 Ofensiva",
                miembros: [
                    { id: "Harumasa", rol: "Atacante" },
                    { id: "Yanagi", rol: "Anomalo" },
                    { id: "Soukaku", rol: "Auxiliar" }
                ],
                bangboo: { nombre: "Plugboo", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Bangboo_S_04.png" }
            }
        ]
    },

    "Miyabi": {
        buildPremium: {
            wengine: { nombre: "Weeping Gemini", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_08.png" },
            altWengines: [
                { nombre: "Rainforest Gourmet", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_10.png" }
            ],
            discSet: [
                { nombre: "Polar Metal", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Ice_01.png" },
                { nombre: "Freedom Blues", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Anomaly_01.png" }
            ],
            mainStats: { 6: "Maestría de Anomalía", 5: "Daño de Hielo", 4: "Prob. de Anomalía" },
            substats: ["Maestría de Anomalía", "ATQ%", "Penetración"]
        },
        buildF2P: {
            wengine: { nombre: "Weeping Gemini", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_08.png" },
            altWengines: [],
            discSet: [
                { nombre: "Polar Metal", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Ice_01.png" },
                { nombre: "Freedom Blues", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Anomaly_01.png" }
            ],
            mainStats: { 6: "Maestría de Anomalía", 5: "ATQ%", 4: "Prob. de Anomalía" },
            substats: ["Maestría de Anomalía", "ATQ%"]
        },
        equipos: [
            {
                nombre: "Cazadora del Vacío",
                miembros: [
                    { id: "Miyabi", rol: "Anomalo" },
                    { id: "Yanagi", rol: "Anomalo" },
                    { id: "Soukaku", rol: "Auxiliar" }
                ],
                bangboo: { nombre: "Sharkboo", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Bangboo_S_02.png" }
            }
        ]
    },

    "Qingyi": {
        buildPremium: {
            wengine: { nombre: "The Restrained", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_S_06.png" },
            altWengines: [
                { nombre: "Precious Fossilized Core", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_05.png" }
            ],
            discSet: [
                { nombre: "Shockstar Disco", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Stun_01.png" },
                { nombre: "Thunder Metal", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Electric_01.png" }
            ],
            mainStats: { 6: "Impacto", 5: "Daño Eléctrico", 4: "Prob. Crítico" },
            substats: ["Impacto", "ATQ%", "Prob. Crítico"]
        },
        buildF2P: {
            wengine: { nombre: "Demara Battery Mark II", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_04.png" },
            altWengines: [],
            discSet: [
                { nombre: "Shockstar Disco", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Stun_01.png" },
                { nombre: "Thunder Metal", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Electric_01.png" }
            ],
            mainStats: { 6: "Impacto", 5: "ATQ%", 4: "ATQ%" },
            substats: ["Impacto", "ATQ%"]
        },
        equipos: [
            {
                nombre: "NEPS Eléctrico",
                miembros: [
                    { id: "Qingyi", rol: "Aturdidor" },
                    { id: "Zhu Yuan", rol: "Atacante" },
                    { id: "Nicole", rol: "Auxiliar" }
                ],
                bangboo: { nombre: "Plugboo", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Bangboo_S_04.png" }
            }
        ]
    },

    "Seth": {
        buildPremium: {
            wengine: { nombre: "Tusks of Fury", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_S_14.png" },
            altWengines: [
                { nombre: "Bunny Band", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_07.png" }
            ],
            discSet: [
                { nombre: "Soul Rock", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_DEF_01.png" },
                { nombre: "Thunder Metal", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Electric_01.png" }
            ],
            mainStats: { 6: "DEF%", 5: "DEF%", 4: "DEF%" },
            substats: ["DEF%", "Vida%", "Regen. de Energía"]
        },
        buildF2P: {
            wengine: { nombre: "Bunny Band", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_07.png" },
            altWengines: [],
            discSet: [
                { nombre: "Soul Rock", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_DEF_01.png" },
                { nombre: "Thunder Metal", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Electric_01.png" }
            ],
            mainStats: { 6: "DEF%", 5: "DEF%", 4: "DEF%" },
            substats: ["DEF%", "Vida%"]
        },
        equipos: [
            {
                nombre: "Escolta NEPS",
                miembros: [
                    { id: "Seth", rol: "Defensor" },
                    { id: "Jane Doe", rol: "Anomalo" },
                    { id: "Qingyi", rol: "Aturdidor" }
                ],
                bangboo: { nombre: "Officer Cui", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Bangboo_S_08.png" }
            }
        ]
    },

    "Lucy": {
        buildPremium: {
            wengine: { nombre: "Kaboom the Cannon", imagen: "https://www.korometa.com/wp-content/uploads/2024/07/kaboom-the-cannon.png" },
            altWengines: [
                { nombre: "Weeping Cradle", imagen: "https://mintparm.jp/zenlesszonezero/wp-content/uploads/2024/09/Weeping-Cradle.webp" }
            ],
            discSet: [
                { nombre: "Swing Jazz", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Energy_01.png" },
                { nombre: "Inferno Metal", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Fire_01.png" }
            ],
            mainStats: { 6: "Regen. de Energía", 5: "ATQ%", 4: "ATQ%" },
            substats: ["ATQ%", "Regen. de Energía", "Penetración"]
        },
        buildF2P: {
            wengine: { nombre: "Kaboom the Cannon", imagen: "https://www.korometa.com/wp-content/uploads/2024/07/kaboom-the-cannon.png" },
            altWengines: [],
            discSet: [
                { nombre: "Swing Jazz", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Energy_01.png" },
                { nombre: "Inferno Metal", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Fire_01.png" }
            ],
            mainStats: { 6: "Regen. de Energía", 5: "ATQ%", 4: "ATQ%" },
            substats: ["ATQ%", "Regen. de Energía"]
        },
        equipos: [
            {
                nombre: "Hijos de Calydón",
                miembros: [
                    { id: "Lucy", rol: "Auxiliar" },
                    { id: "Burnice", rol: "Anomalo" },
                    { id: "Piper", rol: "Anomalo" }
                ],
                bangboo: { nombre: "Bangboo de Combate", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Bangboo_A_06.png" }
            }
        ]
    },

    "Piper": {
        buildPremium: {
            wengine: { nombre: "Weeping Gemini", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_08.png" },
            altWengines: [
                { nombre: "Rainforest Gourmet", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_10.png" }
            ],
            discSet: [
                { nombre: "Fanged Metal", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Physical_01.png" },
                { nombre: "Freedom Blues", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Anomaly_01.png" }
            ],
            mainStats: { 6: "Maestría de Anomalía", 5: "Daño Físico", 4: "Prob. de Anomalía" },
            substats: ["Maestría de Anomalía", "ATQ%", "Penetración"]
        },
        buildF2P: {
            wengine: { nombre: "Weeping Gemini", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_08.png" },
            altWengines: [],
            discSet: [
                { nombre: "Fanged Metal", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Physical_01.png" },
                { nombre: "Freedom Blues", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Anomaly_01.png" }
            ],
            mainStats: { 6: "Maestría de Anomalía", 5: "ATQ%", 4: "Prob. de Anomalía" },
            substats: ["Maestría de Anomalía", "ATQ%"]
        },
        equipos: [
            {
                nombre: "Camionera Anómala",
                miembros: [
                    { id: "Piper", rol: "Anomalo" },
                    { id: "Burnice", rol: "Anomalo" },
                    { id: "Lucy", rol: "Auxiliar" }
                ],
                bangboo: { nombre: "Luckyboo", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Bangboo_A_05.png" }
            }
        ]
    },

    "Burnice": {
        buildPremium: {
            wengine: { nombre: "Weeping Gemini", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_08.png" },
            altWengines: [
                { nombre: "Rainforest Gourmet", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_10.png" }
            ],
            discSet: [
                { nombre: "Inferno Metal", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Fire_01.png" },
                { nombre: "Freedom Blues", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Anomaly_01.png" }
            ],
            mainStats: { 6: "Maestría de Anomalía", 5: "Daño de Fuego", 4: "Prob. de Anomalía" },
            substats: ["Maestría de Anomalía", "ATQ%", "Penetración"]
        },
        buildF2P: {
            wengine: { nombre: "Weeping Gemini", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_08.png" },
            altWengines: [],
            discSet: [
                { nombre: "Inferno Metal", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Fire_01.png" },
                { nombre: "Freedom Blues", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Anomaly_01.png" }
            ],
            mainStats: { 6: "Maestría de Anomalía", 5: "ATQ%", 4: "Prob. de Anomalía" },
            substats: ["Maestría de Anomalía", "ATQ%"]
        },
        equipos: [
            {
                nombre: "Motera Ardiente",
                miembros: [
                    { id: "Burnice", rol: "Anomalo" },
                    { id: "Piper", rol: "Anomalo" },
                    { id: "Caesar", rol: "Defensor" }
                ],
                bangboo: { nombre: "Cryboo", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Bangboo_A_03.png" }
            }
        ]
    },

    "Caesar": {
        buildPremium: {
            wengine: { nombre: "Tusks of Fury", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_S_14.png" },
            altWengines: [
                { nombre: "Bunny Band", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_07.png" }
            ],
            discSet: [
                { nombre: "Soul Rock", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_DEF_01.png" },
                { nombre: "Fanged Metal", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Physical_01.png" }
            ],
            mainStats: { 6: "DEF%", 5: "DEF%", 4: "DEF%" },
            substats: ["DEF%", "Vida%", "Regen. de Energía"]
        },
        buildF2P: {
            wengine: { nombre: "Bunny Band", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_07.png" },
            altWengines: [],
            discSet: [
                { nombre: "Soul Rock", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_DEF_01.png" },
                { nombre: "Fanged Metal", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Physical_01.png" }
            ],
            mainStats: { 6: "DEF%", 5: "DEF%", 4: "DEF%" },
            substats: ["DEF%", "Vida%"]
        },
        equipos: [
            {
                nombre: "Reina de la Carretera",
                miembros: [
                    { id: "Caesar", rol: "Defensor" },
                    { id: "Burnice", rol: "Anomalo" },
                    { id: "Lucy", rol: "Auxiliar" }
                ],
                bangboo: { nombre: "Avocaboo", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Bangboo_A_07.png" }
            }
        ]
    },

    "Lighter": {
        buildPremium: {
            wengine: { nombre: "Hellfire Gears", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_S_04.png" },
            altWengines: [
                { nombre: "Precious Fossilized Core", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_05.png" }
            ],
            discSet: [
                { nombre: "Shockstar Disco", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Stun_01.png" },
                { nombre: "Inferno Metal", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Fire_01.png" }
            ],
            mainStats: { 6: "Impacto", 5: "Daño de Fuego", 4: "Prob. Crítico" },
            substats: ["Impacto", "ATQ%", "Prob. Crítico"]
        },
        buildF2P: {
            wengine: { nombre: "Demara Battery Mark II", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_04.png" },
            altWengines: [],
            discSet: [
                { nombre: "Shockstar Disco", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Stun_01.png" },
                { nombre: "Inferno Metal", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Fire_01.png" }
            ],
            mainStats: { 6: "Impacto", 5: "ATQ%", 4: "ATQ%" },
            substats: ["Impacto", "ATQ%"]
        },
        equipos: [
            {
                nombre: "Campeón Calydón",
                miembros: [
                    { id: "Lighter", rol: "Aturdidor" },
                    { id: "Burnice", rol: "Anomalo" },
                    { id: "Caesar", rol: "Defensor" }
                ],
                bangboo: { nombre: "Cryboo", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Bangboo_A_03.png" }
            }
        ]
    },

    "Pulchra": {
        buildPremium: {
            wengine: { nombre: "The Restrained", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_S_06.png" },
            altWengines: [
                { nombre: "Precious Fossilized Core", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_05.png" }
            ],
            discSet: [
                { nombre: "Shockstar Disco", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Stun_01.png" },
                { nombre: "Fanged Metal", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Physical_01.png" }
            ],
            mainStats: { 6: "Impacto", 5: "Daño Físico", 4: "Prob. Crítico" },
            substats: ["Impacto", "ATQ%", "Prob. Crítico"]
        },
        buildF2P: {
            wengine: { nombre: "Demara Battery Mark II", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_04.png" },
            altWengines: [],
            discSet: [
                { nombre: "Shockstar Disco", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Stun_01.png" },
                { nombre: "Fanged Metal", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Physical_01.png" }
            ],
            mainStats: { 6: "Impacto", 5: "ATQ%", 4: "ATQ%" },
            substats: ["Impacto", "ATQ%"]
        },
        equipos: [
            {
                nombre: "Felina Aturdidora",
                miembros: [
                    { id: "Pulchra", rol: "Aturdidor" },
                    { id: "Nekomata", rol: "Atacante" },
                    { id: "Lucy", rol: "Auxiliar" }
                ],
                bangboo: { nombre: "Luckyboo", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Bangboo_A_05.png" }
            }
        ]
    },

    "Astra Yao": {
        buildPremium: {
            wengine: { nombre: "Weeping Cradle", imagen: "https://mintparm.jp/zenlesszonezero/wp-content/uploads/2024/09/Weeping-Cradle.webp" },
            altWengines: [
                { nombre: "Kaboom the Cannon", imagen: "https://www.korometa.com/wp-content/uploads/2024/07/kaboom-the-cannon.png" }
            ],
            discSet: [
                { nombre: "Swing Jazz", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Energy_01.png" },
                { nombre: "Chaotic Metal", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Ether_01.png" }
            ],
            mainStats: { 6: "Regen. de Energía", 5: "ATQ%", 4: "ATQ%" },
            substats: ["ATQ%", "Regen. de Energía", "Penetración"]
        },
        buildF2P: {
            wengine: { nombre: "Kaboom the Cannon", imagen: "https://www.korometa.com/wp-content/uploads/2024/07/kaboom-the-cannon.png" },
            altWengines: [],
            discSet: [
                { nombre: "Swing Jazz", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Energy_01.png" },
                { nombre: "Chaotic Metal", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Ether_01.png" }
            ],
            mainStats: { 6: "Regen. de Energía", 5: "ATQ%", 4: "ATQ%" },
            substats: ["ATQ%", "Regen. de Energía"]
        },
        equipos: [
            {
                nombre: "Dúo Estrellas",
                miembros: [
                    { id: "Astra Yao", rol: "Auxiliar" },
                    { id: "Evelyn", rol: "Atacante" },
                    { id: "Nicole", rol: "Auxiliar" }
                ],
                bangboo: { nombre: "Resonaboo", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Bangboo_S_05.png" }
            }
        ]
    },

    "Evelyn": {
        buildPremium: {
            wengine: { nombre: "The Brimstone", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_S_01.png" },
            altWengines: [
                { nombre: "Starlight Engine", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_01.png" }
            ],
            discSet: [
                { nombre: "Inferno Metal", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Fire_01.png" },
                { nombre: "Woodpecker Electro", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Crit_01.png" }
            ],
            mainStats: { 6: "ATQ%", 5: "Daño de Fuego", 4: "Prob. Crítico / Daño Crítico" },
            substats: ["Prob. Crítico", "Daño Crítico", "ATQ%"]
        },
        buildF2P: {
            wengine: { nombre: "Starlight Engine", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_01.png" },
            altWengines: [],
            discSet: [
                { nombre: "Inferno Metal", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Fire_01.png" },
                { nombre: "Woodpecker Electro", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Crit_01.png" }
            ],
            mainStats: { 6: "ATQ%", 5: "Daño de Fuego", 4: "Prob. Crítico" },
            substats: ["Prob. Crítico", "ATQ%", "Daño Crítico"]
        },
        equipos: [
            {
                nombre: "Dúo Lira",
                miembros: [
                    { id: "Evelyn", rol: "Atacante" },
                    { id: "Astra Yao", rol: "Auxiliar" },
                    { id: "Koleda", rol: "Aturdidor" }
                ],
                bangboo: { nombre: "Cryboo", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Bangboo_A_03.png" }
            }
        ]
    },

    "Soldier 11": {
        buildPremium: {
            wengine: { nombre: "The Brimstone", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_S_01.png" },
            altWengines: [
                { nombre: "Starlight Engine", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_01.png" }
            ],
            discSet: [
                { nombre: "Inferno Metal", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Fire_01.png" },
                { nombre: "Woodpecker Electro", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Crit_01.png" }
            ],
            mainStats: { 6: "ATQ%", 5: "Daño de Fuego", 4: "Prob. Crítico / Daño Crítico" },
            substats: ["Prob. Crítico", "Daño Crítico", "ATQ%"]
        },
        buildF2P: {
            wengine: { nombre: "Starlight Engine", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_01.png" },
            altWengines: [],
            discSet: [
                { nombre: "Inferno Metal", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Fire_01.png" },
                { nombre: "Woodpecker Electro", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Crit_01.png" }
            ],
            mainStats: { 6: "ATQ%", 5: "Daño de Fuego", 4: "Prob. Crítico" },
            substats: ["Prob. Crítico", "ATQ%", "Daño Crítico"]
        },
        equipos: [
            {
                nombre: "Escuadrón Obol",
                miembros: [
                    { id: "Soldier 11", rol: "Atacante" },
                    { id: "Trigger", rol: "Aturdidor" },
                    { id: "Rina", rol: "Auxiliar" }
                ],
                bangboo: { nombre: "Cryboo", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Bangboo_A_03.png" }
            }
        ]
    },

    "Trigger": {
        buildPremium: {
            wengine: { nombre: "The Restrained", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_S_06.png" },
            altWengines: [
                { nombre: "Precious Fossilized Core", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_05.png" }
            ],
            discSet: [
                { nombre: "Shockstar Disco", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Stun_01.png" },
                { nombre: "Thunder Metal", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Electric_01.png" }
            ],
            mainStats: { 6: "Impacto", 5: "Daño Eléctrico", 4: "Prob. Crítico" },
            substats: ["Impacto", "ATQ%", "Prob. Crítico"]
        },
        buildF2P: {
            wengine: { nombre: "Demara Battery Mark II", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_04.png" },
            altWengines: [],
            discSet: [
                { nombre: "Shockstar Disco", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Stun_01.png" },
                { nombre: "Thunder Metal", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Electric_01.png" }
            ],
            mainStats: { 6: "Impacto", 5: "ATQ%", 4: "ATQ%" },
            substats: ["Impacto", "ATQ%"]
        },
        equipos: [
            {
                nombre: "Francotirador Obol",
                miembros: [
                    { id: "Trigger", rol: "Aturdidor" },
                    { id: "Soldier 11", rol: "Atacante" },
                    { id: "Rina", rol: "Auxiliar" }
                ],
                bangboo: { nombre: "Plugboo", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Bangboo_S_04.png" }
            }
        ]
    },

    "Orphie y Magus": {
        buildPremium: {
            wengine: { nombre: "The Brimstone", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_S_01.png" },
            altWengines: [
                { nombre: "Starlight Engine", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_01.png" }
            ],
            discSet: [
                { nombre: "Inferno Metal", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Fire_01.png" },
                { nombre: "Woodpecker Electro", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Crit_01.png" }
            ],
            mainStats: { 6: "ATQ%", 5: "Daño de Fuego", 4: "Prob. Crítico / Daño Crítico" },
            substats: ["Prob. Crítico", "Daño Crítico", "ATQ%"]
        },
        buildF2P: {
            wengine: { nombre: "Starlight Engine", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_01.png" },
            altWengines: [],
            discSet: [
                { nombre: "Inferno Metal", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Fire_01.png" },
                { nombre: "Woodpecker Electro", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Crit_01.png" }
            ],
            mainStats: { 6: "ATQ%", 5: "Daño de Fuego", 4: "Prob. Crítico" },
            substats: ["Prob. Crítico", "ATQ%", "Daño Crítico"]
        },
        equipos: [
            {
                nombre: "Estrategia Táctica",
                miembros: [
                    { id: "Orphie y Magus", rol: "Atacante" },
                    { id: "Trigger", rol: "Aturdidor" },
                    { id: "Soldier 11", rol: "Atacante" }
                ],
                bangboo: { nombre: "Cryboo", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Bangboo_A_03.png" }
            }
        ]
    },

    "Alice Thymefield": {
        buildPremium: {
            wengine: { nombre: "Weeping Gemini", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_08.png" },
            altWengines: [
                { nombre: "Rainforest Gourmet", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_10.png" }
            ],
            discSet: [
                { nombre: "Fanged Metal", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Physical_01.png" },
                { nombre: "Freedom Blues", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Anomaly_01.png" }
            ],
            mainStats: { 6: "Maestría de Anomalía", 5: "Daño Físico", 4: "Prob. de Anomalía" },
            substats: ["Maestría de Anomalía", "ATQ%", "Penetración"]
        },
        buildF2P: {
            wengine: { nombre: "Weeping Gemini", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Weapon_A_08.png" },
            altWengines: [],
            discSet: [
                { nombre: "Fanged Metal", piezas: 4, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Physical_01.png" },
                { nombre: "Freedom Blues", piezas: 2, imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Equip_Anomaly_01.png" }
            ],
            mainStats: { 6: "Maestría de Anomalía", 5: "ATQ%", 4: "Prob. de Anomalía" },
            substats: ["Maestría de Anomalía", "ATQ%"]
        },
        equipos: [
            {
                nombre: "Spook Shack Anómalo",
                miembros: [
                    { id: "Alice Thymefield", rol: "Anomalo" },
                    { id: "Ukinami Yuzuha", rol: "Auxiliar" },
                    { id: "Promeia", rol: "Anomalo" }
                ],
                bangboo: { nombre: "Luckyboo", imagen: "https://zzz.gg/_ipx/w_200&q_70/images/Bangboo_A_05.png" }
            }
        ]
    }

};