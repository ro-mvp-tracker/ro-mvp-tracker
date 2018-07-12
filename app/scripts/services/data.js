'use strict';

/*globals app */

/**
 * @ngdoc service
 * @name roMvpTrackerApp.DataSrv
 * @description
 * # DataSrv
 * Service in the roMvpTrackerApp.
 */
app.service('DataSrv', function (firebase, $firebaseObject, $firebaseArray) {
    var service = {};

    service.getMvpList = function() {
        return [{
            "id": 1511,
            "map": "moc_pryd06",
            "name": "Amon Ra",
            "respawn": {
                "min": 3600,
                "max": 4200,
            },
            "respawnOld": {
                "min": 3600,
                "max": 4200,
            },
            "stats": {
                "hp": 1214138,
                "race": "Demi-Human",
                "property": "Earth 3",
                "size": "Large",
                "hit": 109,
                "flee": 237,
                "def": 26,
                "mdef": 52,
                "xp": {
                    "base": 698112,
                    "job": 287128,
                    "mvp": 2181600
                },
                "elements": {
                    "Neutral": 1,
                    "Water": 1,
                    "Earth": 0,
                    "Fire": 2,
                    "Wind": 0,
                    "Poison": 1,
                    "Holy": 1,
                    "Shadow": 1,
                    "Ghost": 0.5,
                    "Undead": 0.5
                }
            }
        },
        {
            "id": 1096,
            "map": "pay_fild04",
            "name": "Angeling",
            "respawn": {
                "min": 3600,
                "max": 5400,
            },
            "respawnOld": {
                "min": 3600,
                "max": 5400,
            },
            "stats": {
                "hp": 55000,
                "race": "Angel",
                "property": "Holy 3",
                "size": "Medium",
                "hit": 90,
                "flee": 163,
                "def": 0,
                "mdef": 70,
                "xp": {
                    "base": 1304,
                    "job": 1152,
                    "mvp": 0
                },
                "elements": {
                    "Neutral": 1,
                    "Water": 0,
                    "Earth": 0,
                    "Fire": 0,
                    "Wind": 0,
                    "Poison": 0,
                    "Holy": 1,
                    "Shadow": 2,
                    "Ghost": 0,
                    "Undead": 1.75
                }
            }
        },
        {
            "id": 1096,
            "map": "xmas_dun01",
            "name": "Angeling",
            "respawn": {
                "min": 3600,
                "max": 5400,
            },
            "respawnOld": {
                "min": 3600,
                "max": 5400,
            },
            "stats": {
                "hp": 55000,
                "race": "Angel",
                "property": "Holy 3",
                "size": "Medium",
                "hit": 90,
                "flee": 163,
                "def": 0,
                "mdef": 70,
                "xp": {
                    "base": 1304,
                    "job": 1152,
                    "mvp": 0
                },
                "elements": {
                    "Neutral": 1,
                    "Water": 0,
                    "Earth": 0,
                    "Fire": 0,
                    "Wind": 0,
                    "Poison": 0,
                    "Holy": 1,
                    "Shadow": 2,
                    "Ghost": 0,
                    "Undead": 1.75
                }
            }
        },
        {
            "id": 1096,
            "map": "yuno_fild03",
            "name": "Angeling",
            "respawn": {
                "min": 3600,
                "max": 5400,
            },
            "respawnOld": {
                "min": 3600,
                "max": 5400,
            },
            "stats": {
                "hp": 55000,
                "race": "Angel",
                "property": "Holy 3",
                "size": "Medium",
                "hit": 90,
                "flee": 163,
                "def": 0,
                "mdef": 70,
                "xp": {
                    "base": 1304,
                    "job": 1152,
                    "mvp": 0
                },
                "elements": {
                    "Neutral": 1,
                    "Water": 0,
                    "Earth": 0,
                    "Fire": 0,
                    "Wind": 0,
                    "Poison": 0,
                    "Holy": 1,
                    "Shadow": 2,
                    "Ghost": 0,
                    "Undead": 1.75
                }
            }
        },
        {
            "id": 1388,
            "map": "yuno_fild05",
            "name": "Archangeling",
            "respawn": {
                "min": 3600,
                "max": 3780,
            },
            "respawnOld": {
                "min": 3600,
                "max": 3780,
            },
            "stats": {
                "hp": 79523,
                "race": "Angel",
                "property": "Holy 3",
                "size": "Medium",
                "hit": 145,
                "flee": 200,
                "def": 54,
                "mdef": 58,
                "xp": {
                    "base": 33216,
                    "job": 17384,
                    "mvp": 0
                },
                "elements": {
                    "Neutral": 1,
                    "Water": 0.25,
                    "Earth": 0.25,
                    "Fire": 0.25,
                    "Wind": 0.25,
                    "Poison": 0.25,
                    "Holy": -0.5,
                    "Shadow": 1.75,
                    "Ghost": 0.25,
                    "Undead": 1.5
                }
            }
        },
        {
            "id": 1785,
            "map": "ra_fild02",
            "name": "Atroce",
            "respawn": {
                "min": 14400,
                "max": 15000,
            },
            "respawnOld": {
                "min": 14400,
                "max": 15000,
            },
            "stats": {
                "hp": 1008420,
                "race": "Brute",
                "property": "Dark 3",
                "size": "Large",
                "hit": 189,
                "flee": 246,
                "def": 25,
                "mdef": 25,
                "xp": {
                    "base": 2364400,
                    "job": 951160,
                    "mvp": 5388750
                },
                "elements": {
                    "Neutral": 1,
                    "Water": 0.5,
                    "Earth": 0.5,
                    "Fire": 0.5,
                    "Wind": 0.5,
                    "Poison": 0,
                    "Holy": 1.75,
                    "Shadow": -0.5,
                    "Ghost": 0.25,
                    "Undead": 0
                }
            }
        },
        {
            "id": 1785,
            "map": "ra_fild03",
            "name": "Atroce",
            "respawn": {
                "min": 10800,
                "max": 11400,
            },
            "respawnOld": {
                "min": 10800,
                "max": 11400,
            },
            "stats": {
                "hp": 1008420,
                "race": "Brute",
                "property": "Dark 3",
                "size": "Large",
                "hit": 189,
                "flee": 246,
                "def": 25,
                "mdef": 25,
                "xp": {
                    "base": 2364400,
                    "job": 951160,
                    "mvp": 5388750
                },
                "elements": {
                    "Neutral": 1,
                    "Water": 0.5,
                    "Earth": 0.5,
                    "Fire": 0.5,
                    "Wind": 0.5,
                    "Poison": 0,
                    "Holy": 1.75,
                    "Shadow": -0.5,
                    "Ghost": 0.25,
                    "Undead": 0
                }
            }
        },
        {
            "id": 1785,
            "map": "ra_fild04",
            "name": "Atroce",
            "respawn": {
                "min": 18000,
                "max": 18600,
            },
            "respawnOld": {
                "min": 18000,
                "max": 18600,
            },
            "stats": {
                "hp": 1008420,
                "race": "Brute",
                "property": "Dark 3",
                "size": "Large",
                "hit": 189,
                "flee": 246,
                "def": 25,
                "mdef": 25,
                "xp": {
                    "base": 2364400,
                    "job": 951160,
                    "mvp": 5388750
                },
                "elements": {
                    "Neutral": 1,
                    "Water": 0.5,
                    "Earth": 0.5,
                    "Fire": 0.5,
                    "Wind": 0.5,
                    "Poison": 0,
                    "Holy": 1.75,
                    "Shadow": -0.5,
                    "Ghost": 0.25,
                    "Undead": 0
                }
            }
        },
        {
            "id": 1785,
            "map": "ve_fild01",
            "name": "Atroce",
            "respawn": {
                "min": 10800,
                "max": 11400,
            },
            "respawnOld": {
                "min": 10800,
                "max": 11400,
            },
            "stats": {
                "hp": 1008420,
                "race": "Brute",
                "property": "Dark 3",
                "size": "Large",
                "hit": 189,
                "flee": 246,
                "def": 25,
                "mdef": 25,
                "xp": {
                    "base": 2364400,
                    "job": 951160,
                    "mvp": 5388750
                },
                "elements": {
                    "Neutral": 1,
                    "Water": 0.5,
                    "Earth": 0.5,
                    "Fire": 0.5,
                    "Wind": 0.5,
                    "Poison": 0,
                    "Holy": 1.75,
                    "Shadow": -0.5,
                    "Ghost": 0.25,
                    "Undead": 0
                }
            }
        },
        {
            "id": 1785,
            "map": "ve_fild02",
            "name": "Atroce",
            "respawn": {
                "min": 21600,
                "max": 22200,
            },
            "respawnOld": {
                "min": 21600,
                "max": 22200,
            },
            "stats": {
                "hp": 1008420,
                "race": "Brute",
                "property": "Dark 3",
                "size": "Large",
                "hit": 189,
                "flee": 246,
                "def": 25,
                "mdef": 25,
                "xp": {
                    "base": 2364400,
                    "job": 951160,
                    "mvp": 5388750
                },
                "elements": {
                    "Neutral": 1,
                    "Water": 0.5,
                    "Earth": 0.5,
                    "Fire": 0.5,
                    "Wind": 0.5,
                    "Poison": 0,
                    "Holy": 1.75,
                    "Shadow": -0.5,
                    "Ghost": 0.25,
                    "Undead": 0
                }
            }
        },
        {
            "id": 1630,
            "map": "lou_dun03",
            "name": "White Lady",
            "respawn": {
                "min": 7020,
                "max": 7620,
            },
            "respawnOld": {
                "min": 7020,
                "max": 7620,
            },
            "stats": {
                "hp": 253221,
                "race": "Demi-Human",
                "property": "Wind 3",
                "size": "Large",
                "hit": 170,
                "flee": 312,
                "def": 20,
                "mdef": 55,
                "xp": {
                    "base": 362000,
                    "job": 131560,
                    "mvp": 1131250
                },
                "elements": {
                    "Neutral": 1,
                    "Water": 0,
                    "Earth": 2,
                    "Fire": 1,
                    "Wind": -0.25,
                    "Poison": 1,
                    "Holy": 1,
                    "Shadow": 1,
                    "Ghost": 0.5,
                    "Undead": 0.5
                }
            }
        },
        {
            "id": 1039,
            "map": "prt_maze03",
            "name": "Baphomet",
            "respawn": {
                "min": 6300,
                "max": 8100,
            },
            "respawnOld": {
                "min": 7200,
                "max": 7800,
            },
            "stats": {
                "hp": 668000,
                "race": "Demon",
                "property": "Dark 3",
                "size": "Large",
                "hit": 253,
                "flee": 276,
                "def": 35,
                "mdef": 45,
                "xp": {
                    "base": 858000,
                    "job": 303160,
                    "mvp": 2681250
                },
                "elements": {
                    "Neutral": 1,
                    "Water": 0.5,
                    "Earth": 0.5,
                    "Fire": 0.5,
                    "Wind": 0.5,
                    "Poison": 0,
                    "Holy": 1.75,
                    "Shadow": -0.5,
                    "Ghost": 0.25,
                    "Undead": 0
                }
            }
        },
        {
            "id": 1873,
            "map": "abbey03",
            "name": "Beelzebub",
            "respawn": {
                "min": 43200,
                "max": 43800,
            },
            "respawnOld": {
                "min": 43200,
                "max": 43800,
            },
            "stats": {
                "hp": 6666666,
                "race": "Demon",
                "property": "Ghost 4",
                "size": "Small",
                "hit": 228,
                "flee": 339,
                "def": 40,
                "mdef": 35,
                "xp": {
                    "base": 0,
                    "job": 0,
                    "mvp": 0
                },
                "elements": {
                    "Neutral": 0,
                    "Water": 1,
                    "Earth": 1,
                    "Fire": 1,
                    "Wind": 1,
                    "Poison": 0.25,
                    "Holy": 1,
                    "Shadow": 1,
                    "Ghost": 2,
                    "Undead": 1
                }
            }
        },
        {
            "id": 1646,
            "map": "lhz_dun03",
            "name": "Lord Knight Seyren (Bio 3)",
            "respawn": {
                "min": 6000,
                "max": 7800,
            },
            "respawnOld": {
                "min": 6000,
                "max": 7800,
            },
            "stats": {
                "hp": 1647590,
                "race": "Demi-Human",
                "property": "Fire 4",
                "size": "Medium",
                "hit": 229,
                "flee": 304,
                "def": 72,
                "mdef": 37,
                "xp": {
                    "base": 38684800,
                    "job": 12559760,
                    "mvp": 120890000
                },
                "elements": {
                    "Neutral": 1,
                    "Water": 2,
                    "Earth": 0,
                    "Fire": -0.5,
                    "Wind": 1,
                    "Poison": 0.75,
                    "Holy": 0.75,
                    "Shadow": 0.75,
                    "Ghost": 0.25,
                    "Undead": 0.25
                }
            }
        },
        {
            "id": 1647,
            "map": "lhz_dun03",
            "name": "Assassin Cross Eremes (Bio 3)",
            "respawn": {
                "min": 6000,
                "max": 7800,
            },
            "respawnOld": {
                "min": 6000,
                "max": 7800,
            },
            "stats": {
                "hp": 1411230,
                "race": "Demi-Human",
                "property": "Poison 4",
                "size": "Medium",
                "hit": 300,
                "flee": 296,
                "def": 37,
                "mdef": 39,
                "xp": {
                    "base": 32667200,
                    "job": 12739040,
                    "mvp": 102085000
                },
                "elements": {
                    "Neutral": 1,
                    "Water": 0.75,
                    "Earth": 0.75,
                    "Fire": 0.75,
                    "Wind": 0.75,
                    "Poison": 0,
                    "Holy": 1.25,
                    "Shadow": -0.25,
                    "Ghost": 0.25,
                    "Undead": -0.25
                }
            }
        },
        {
            "id": 1648,
            "map": "lhz_dun03",
            "name": "Whitesmith Howard (Bio 3)",
            "respawn": {
                "min": 6000,
                "max": 7800,
            },
            "respawnOld": {
                "min": 6000,
                "max": 7800,
            },
            "stats": {
                "hp": 1460000,
                "race": "Demi-Human",
                "property": "Earth 4",
                "size": "Medium",
                "hit": 192,
                "flee": 310,
                "def": 66,
                "mdef": 36,
                "xp": {
                    "base": 32018720,
                    "job": 11368000,
                    "mvp": 100058500
                },
                "elements": {
                    "Neutral": 1,
                    "Water": 1,
                    "Earth": -0.25,
                    "Fire": 2,
                    "Wind": 0,
                    "Poison": 0.75,
                    "Holy": 0.75,
                    "Shadow": 0.75,
                    "Ghost": 0.25,
                    "Undead": 0.25
                }
            }
        },
        {
            "id": 1649,
            "map": "lhz_dun03",
            "name": "High Priest Margaretha (Bio 3)",
            "respawn": {
                "min": 6000,
                "max": 7800,
            },
            "respawnOld": {
                "min": 6000,
                "max": 7800,
            },
            "stats": {
                "hp": 1092910,
                "race": "Demi-Human",
                "property": "Holy 4",
                "size": "Medium",
                "hit": 203,
                "flee": 266,
                "def": 35,
                "mdef": 78,
                "xp": {
                    "base": 34056000,
                    "job": 10550400,
                    "mvp": 106425000
                },
                "elements": {
                    "Neutral": 1,
                    "Water": 0,
                    "Earth": 0,
                    "Fire": 0,
                    "Wind": 0,
                    "Poison": 0,
                    "Holy": 1,
                    "Shadow": 2,
                    "Ghost": 0,
                    "Undead": 1.75
                }
            }
        },
        {
            "id": 1650,
            "map": "lhz_dun03",
            "name": "Sniper Cecil (Bio 3)",
            "respawn": {
                "min": 6000,
                "max": 7800,
            },
            "respawnOld": {
                "min": 6000,
                "max": 7800,
            },
            "stats": {
                "hp": 1349000,
                "race": "Demi-Human",
                "property": "Holy 4",
                "size": "Medium",
                "hit": 299,
                "flee": 367,
                "def": 22,
                "mdef": 35,
                "xp": {
                    "base": 32744000,
                    "job": 12208000,
                    "mvp": 102325000
                },
                "elements": {
                    "Neutral": 1,
                    "Water": 0,
                    "Earth": 2,
                    "Fire": 1,
                    "Wind": -0.5,
                    "Poison": 0.75,
                    "Holy": 0.75,
                    "Shadow": 0.75,
                    "Ghost": 0.25,
                    "Undead": 0.25
                }
            }
        },
        {
            "id": 1651,
            "map": "lhz_dun03",
            "name": "High Wizard Kathryne (Bio 3)",
            "respawn": {
                "min": 6000,
                "max": 7800,
            },
            "respawnOld": {
                "min": 6000,
                "max": 7800,
            },
            "stats": {
                "hp": 1069920,
                "race": "Demi-Human",
                "property": "Ghost 3",
                "size": "Medium",
                "hit": 208,
                "flee": 302,
                "def": 10,
                "mdef": 88,
                "xp": {
                    "base": 32065600,
                    "job": 13093600,
                    "mvp": 100205000
                },
                "elements": {
                    "Neutral": 0,
                    "Water": 1,
                    "Earth": 1,
                    "Fire": 1,
                    "Wind": 1,
                    "Poison": 0.5,
                    "Holy": 1,
                    "Shadow": 1,
                    "Ghost": 1.75,
                    "Undead": 1
                }
            }
        },
        {
            "id": 2068,
            "map": "bra_dun02",
            "name": "Boitata",
            "respawn": {
                "min": 6300,
                "max": 8100,
            },
            "respawnOld": {
                "min": 7200,
                "max": 7800,
            },
            "stats": {
                "hp": 1283990,
                "race": "Formless",
                "property": "Fire 3",
                "size": "Large",
                "hit": 212,
                "flee": 268,
                "def": 32,
                "mdef": 66,
                "xp": {
                    "base": 594304,
                    "job": 623600,
                    "mvp": 1857200
                },
                "elements": {
                    "Neutral": 1,
                    "Water": 2,
                    "Earth": 0,
                    "Fire": -0.25,
                    "Wind": 1,
                    "Poison": 1,
                    "Holy": 1,
                    "Shadow": 1,
                    "Ghost": 0.5,
                    "Undead": 0.5
                }
            }
        },/*
        {
            "id": 1272,
            "map": "gld_dun04",
            "name": "Dark Lord",
            "respawn": {
                "min": 28800,
                "max": 29400,
            },
            "respawnOld": {
                "min": 28800,
                "max": 29400,
            }
        },*/
        {
            "id": 1272,
            "map": "gl_chyard",
            "name": "Dark Lord",
            "respawn": {
                "min": 3600,
                "max": 4200,
            },
            "respawnOld": {
                "min": 3600,
                "max": 4200,
            },
            "stats": {
                "hp": 720000,
                "race": "Demon",
                "property": "Undead 4",
                "size": "Large",
                "hit": 220,
                "flee": 254,
                "def": 30,
                "mdef": 70,
                "xp": {
                    "base": 526240,
                    "job": 360360,
                    "mvp": 1644500
                },
                "elements": {
                    "Neutral": 1,
                    "Water": 1.5,
                    "Earth": 0.5,
                    "Fire": 2,
                    "Wind": 1,
                    "Poison": -1,
                    "Holy": 2,
                    "Shadow": -1,
                    "Ghost": 1.75,
                    "Undead": 0
                }
            }
        },
        {
            "id": 1719,
            "map": "abyss_03",
            "name": "Detale",
            "respawn": {
                "min": 10800,
                "max": 11400,
            },
            "respawnOld": {
                "min": 10800,
                "max": 11400,
            },
            "stats": {
                "hp": 960000,
                "race": "Dragon",
                "property": "Dark 3",
                "size": "Large",
                "hit": 200,
                "flee": 305,
                "def": 66,
                "mdef": 59,
                "xp": {
                    "base": 2334800,
                    "job": 986432,
                    "mvp": 7296250
                },
                "elements": {
                    "Neutral": 1,
                    "Water": 0.5,
                    "Earth": 0.5,
                    "Fire": 0.5,
                    "Wind": 0.5,
                    "Poison": 0,
                    "Holy": 1.75,
                    "Shadow": -0.5,
                    "Ghost": 0.25,
                    "Undead": 0
                }
            }
        },
        {
            "id": 1582,
            "map": "pay_fild04",
            "name": "Deviling",
            "respawn": {
                "min": 7200,
                "max": 10800,
            },
            "respawnOld": {
                "min": 7200,
                "max": 10800,
            },
            "stats": {
                "hp": 64500,
                "race": "Demon",
                "property": "Dark 4",
                "size": "Medium",
                "hit": 101,
                "flee": 183,
                "def": 5,
                "mdef": 70,
                "xp": {
                    "base": 1688,
                    "job": 3296,
                    "mvp": 0
                },
                "elements": {
                    "Neutral": 1,
                    "Water": 0.25,
                    "Earth": 0.25,
                    "Fire": 0.25,
                    "Wind": 0.25,
                    "Poison": -0.25,
                    "Holy": 2,
                    "Shadow": -1,
                    "Ghost": 0,
                    "Undead": 0
                }
            }
        },
        {
            "id": 1582,
            "map": "yuno_fild03",
            "name": "Deviling",
            "respawn": {
                "min": 3600,
                "max": 5400,
            },
            "respawnOld": {
                "min": 3600,
                "max": 5400,
            },
            "stats": {
                "hp": 64500,
                "race": "Demon",
                "property": "Dark 4",
                "size": "Medium",
                "hit": 101,
                "flee": 183,
                "def": 5,
                "mdef": 70,
                "xp": {
                    "base": 1688,
                    "job": 3296,
                    "mvp": 0
                },
                "elements": {
                    "Neutral": 1,
                    "Water": 0.25,
                    "Earth": 0.25,
                    "Fire": 0.25,
                    "Wind": 0.25,
                    "Poison": -0.25,
                    "Holy": 2,
                    "Shadow": -1,
                    "Ghost": 0,
                    "Undead": 0
                }
            }
        },
        {
            "id": 1046,
            "map": "gef_dun02",
            "name": "Doppelganger",
            "respawn": {
                "min": 6300,
                "max": 8100,
            },
            "respawnOld": {
                "min": 7200,
                "max": 7800,
            },
            "stats": {
                "hp": 249000,
                "race": "Demon",
                "property": "Dark 3",
                "size": "Medium",
                "hit": 182,
                "flee": 272,
                "def": 60,
                "mdef": 35,
                "xp": {
                    "base": 411840,
                    "job": 85800,
                    "mvp": 1287000
                },
                "elements": {
                    "Neutral": 1,
                    "Water": 0.5,
                    "Earth": 0.5,
                    "Fire": 0.5,
                    "Wind": 0.5,
                    "Poison": 0,
                    "Holy": 1.75,
                    "Shadow": -0.5,
                    "Ghost": 0.25,
                    "Undead": 0
                }
            }
        },/*
        {
            "id": 1046,
            "map": "gld_dun02",
            "name": "Doppelganger",
            "respawn": {
                "min": 28800,
                "max": 29400,
            },
            "respawnOld": {
                "min": 28800,
                "max": 29400,
            }
        },*/
        {
            "id": 1389,
            "map": "gef_dun01",
            "name": "Dracula",
            "respawn": {
                "min": 3600,
                "max": 4200,
            },
            "respawnOld": {
                "min": 3600,
                "max": 4200,
            },
            "stats": {
                "hp": 320096,
                "race": "Demon",
                "property": "Dark 4",
                "size": "Large",
                "hit": 200,
                "flee": 245,
                "def": 45,
                "mdef": 76,
                "xp": {
                    "base": 961256,
                    "job": 310960,
                    "mvp": 3003900
                },
                "elements": {
                    "Neutral": 1,
                    "Water": 0.25,
                    "Earth": 0.25,
                    "Fire": 0.25,
                    "Wind": 0.25,
                    "Poison": -0.25,
                    "Holy": 2,
                    "Shadow": -1,
                    "Ghost": 0,
                    "Undead": 0
                }
            }
        },
        {
            "id": 1112,
            "map": "treasure02",
            "name": "Drake",
            "respawn": {
                "min": 6300,
                "max": 8100,
            },
            "respawnOld": {
                "min": 7200,
                "max": 7800,
            },
            "stats": {
                "hp": 326666,
                "race": "Undead",
                "property": "Undead 1",
                "size": "Large",
                "hit": 170,
                "flee": 224,
                "def": 20,
                "mdef": 35,
                "xp": {
                    "base": 228800,
                    "job": 183040,
                    "mvp": 715000
                },
                "elements": {
                    "Neutral": 1,
                    "Water": 1,
                    "Earth": 1,
                    "Fire": 1.25,
                    "Wind": 1,
                    "Poison": -0.25,
                    "Holy": 1.5,
                    "Shadow": -0.25,
                    "Ghost": 1,
                    "Undead": 0
                }
            }
        },/*
        {
            "id": 1115,
            "map": "gld_dun01",
            "name": "Eddga",
            "respawn": {
                "min": 28800,
                "max": 29400,
            },
            "respawnOld": {
                "min": 28800,
                "max": 29400,
            }
        },*/
        {
            "id": 1115,
            "map": "pay_fild11",
            "name": "Eddga",
            "respawn": {
                "min": 6300,
                "max": 8100,
            },
            "respawnOld": {
                "min": 7200,
                "max": 7800,
            },
            "stats": {
                "hp": 152000,
                "race": "Brute",
                "property": "Fire 1",
                "size": "Large",
                "hit": 155,
                "flee": 230,
                "def": 15,
                "mdef": 15,
                "xp": {
                    "base": 200200,
                    "job": 102960,
                    "mvp": 625600
                },
                "elements": {
                    "Neutral": 1,
                    "Water": 1.5,
                    "Earth": 0.5,
                    "Fire": 0.25,
                    "Wind": 1,
                    "Poison": 1.25,
                    "Holy": 1,
                    "Shadow": 1,
                    "Ghost": 1,
                    "Undead": 1
                }
            }
        },
        {
            "id": 1658,
            "map": "lhz_dun02",
            "name": "Egnigem Cenia",
            "respawn": {
                "min": 6300,
                "max": 8100,
            },
            "respawnOld": {
                "min": 7200,
                "max": 7800,
            },
            "stats": {
                "hp": 214200,
                "race": "Demi-Human",
                "property": "Fire 2",
                "size": "Medium",
                "hit": 159,
                "flee": 264,
                "def": 48,
                "mdef": 25,
                "xp": {
                    "base": 2070080,
                    "job": 688000,
                    "mvp": 6469000
                },
                "elements": {
                    "Neutral": 1,
                    "Water": 1.75,
                    "Earth": 0.25,
                    "Fire": 0,
                    "Wind": 1,
                    "Poison": 1.25,
                    "Holy": 1,
                    "Shadow": 1,
                    "Ghost": 0.75,
                    "Undead": 0.75
                }
            }
        },
        {
            "id": 1418,
            "map": "gon_dun03",
            "name": "Evil Snake Lord",
            "respawn": {
                "min": 5640,
                "max": 6240,
            },
            "respawnOld": {
                "min": 5640,
                "max": 6240,
            },
            "stats": {
                "hp": 254993,
                "race": "Brute",
                "property": "Ghost 3",
                "size": "Large",
                "hit": 176,
                "flee": 312,
                "def": 25,
                "mdef": 55,
                "xp": {
                    "base": 274304,
                    "job": 143600,
                    "mvp": 857200
                },
                "elements": {
                    "Neutral": 0,
                    "Water": 1,
                    "Earth": 1,
                    "Fire": 1,
                    "Wind": 1,
                    "Poison": 0.5,
                    "Holy": 1,
                    "Shadow": 1,
                    "Ghost": 1.75,
                    "Undead": 1
                }
            }
        },
        {
            "id": 1871,
            "map": "abbey02",
            "name": "Fallen Bishop Hibram",
            "respawn": {
                "min": 6300,
                "max": 8100,
            },
            "respawnOld": {
                "min": 7200,
                "max": 7800,
            },
            "stats": {
                "hp": 3333333,
                "race": "Demon",
                "property": "Dark 2",
                "size": "Medium",
                "hit": 180,
                "flee": 275,
                "def": 50,
                "mdef": 0,
                "xp": {
                    "base": 8888888,
                    "job": 8888888,
                    "mvp": 27777750
                },
                "elements": {
                    "Neutral": 1,
                    "Water": 0.75,
                    "Earth": 0.75,
                    "Fire": 0.75,
                    "Wind": 0.75,
                    "Poison": 0.25,
                    "Holy": 1.5,
                    "Shadow": -0.25,
                    "Ghost": 0.5,
                    "Undead": 0
                }
            }
        },
        {
            "id": 1252,
            "map": "xmas_fild01",
            "name": "Garm",
            "respawn": {
                "min": 6300,
                "max": 8100,
            },
            "respawnOld": {
                "min": 7200,
                "max": 7800,
            },
            "stats": {
                "hp": 197000,
                "race": "Brute",
                "property": "Water 4",
                "size": "Medium",
                "hit": 219,
                "flee": 243,
                "def": 40,
                "mdef": 45,
                "xp": {
                    "base": 400400,
                    "job": 160160,
                    "mvp": 1251250
                },
                "elements": {
                    "Neutral": 1,
                    "Water": -0.5,
                    "Earth": 1,
                    "Fire": 0,
                    "Wind": 2,
                    "Poison": 0.25,
                    "Holy": 0.75,
                    "Shadow": 0.75,
                    "Ghost": 0.25,
                    "Undead": 0.25
                }
            }
        },/*
        {
            "id": 1120,
            "map": "gld_dun04",
            "name": "Ghostring",
            "respawn": {
                "min": 14400,
                "max": 21600,
            },
            "respawnOld": {
                "min": 14400,
                "max": 21600,
            }
        },*/
        {
            "id": 1120,
            "map": "pay_fild04",
            "name": "Ghostring",
            "respawn": {
                "min": 3600,
                "max": 5400,
            },
            "respawnOld": {
                "min": 3600,
                "max": 5400,
            },
            "stats": {
                "hp": 73300,
                "race": "Demon",
                "property": "Ghost 4",
                "size": "Medium",
                "hit": 65,
                "flee": 165,
                "def": 0,
                "mdef": 60,
                "xp": {
                    "base": 808,
                    "job": 864,
                    "mvp": 0
                },
                "elements": {
                    "Neutral": 0,
                    "Water": 1,
                    "Earth": 1,
                    "Fire": 1,
                    "Wind": 1,
                    "Poison": 0.25,
                    "Holy": 1,
                    "Shadow": 1,
                    "Ghost": 2,
                    "Undead": 1
                }
            }
        },
        {
            "id": 1120,
            "map": "prt_maze03",
            "name": "Ghostring",
            "respawn": {
                "min": 6780,
                "max": 10200,
            },
            "respawnOld": {
                "min": 6780,
                "max": 10200,
            },
            "stats": {
                "hp": 73300,
                "race": "Demon",
                "property": "Ghost 4",
                "size": "Medium",
                "hit": 65,
                "flee": 165,
                "def": 0,
                "mdef": 60,
                "xp": {
                    "base": 808,
                    "job": 864,
                    "mvp": 0
                },
                "elements": {
                    "Neutral": 0,
                    "Water": 1,
                    "Earth": 1,
                    "Fire": 1,
                    "Wind": 1,
                    "Poison": 0.25,
                    "Holy": 1,
                    "Shadow": 1,
                    "Ghost": 2,
                    "Undead": 1
                }
            }
        },
        {
            "id": 1120,
            "map": "treasure02",
            "name": "Ghostring",
            "respawn": {
                "min": 1980,
                "max": 3180,
            },
            "respawnOld": {
                "min": 1980,
                "max": 3180,
            },
            "stats": {
                "hp": 73300,
                "race": "Demon",
                "property": "Ghost 4",
                "size": "Medium",
                "hit": 65,
                "flee": 165,
                "def": 0,
                "mdef": 60,
                "xp": {
                    "base": 808,
                    "job": 864,
                    "mvp": 0
                },
                "elements": {
                    "Neutral": 0,
                    "Water": 1,
                    "Earth": 1,
                    "Fire": 1,
                    "Wind": 1,
                    "Poison": 0.25,
                    "Holy": 1,
                    "Shadow": 1,
                    "Ghost": 2,
                    "Undead": 1
                }
            }
        },
        {
            "id": 1768,
            "map": "ra_san05",
            "name": "Gloom Under Night",
            "respawn": {
                "min": 18000,
                "max": 18600,
            },
            "respawnOld": {
                "min": 18000,
                "max": 18600,
            },
            "stats": {
                "hp": 2298000,
                "race": "Formless",
                "property": "Ghost 3",
                "size": "Large",
                "hit": 224,
                "flee": 275,
                "def": 10,
                "mdef": 20,
                "xp": {
                    "base": 7697400,
                    "job": 2211560,
                    "mvp": 24054350
                },
                "elements": {
                    "Neutral": 0,
                    "Water": 1,
                    "Earth": 1,
                    "Fire": 1,
                    "Wind": 1,
                    "Poison": 0.5,
                    "Holy": 1,
                    "Shadow": 1,
                    "Ghost": 1.75,
                    "Undead": 1
                }
            }
        },
        {
            "id": 1086,
            "map": "prt_sewb4",
            "name": "Golden Thief Bug",
            "respawn": {
                "min": 3600,
                "max": 4200,
            },
            "respawnOld": {
                "min": 3600,
                "max": 4200,
            },
            "stats": {
                "hp": 126000,
                "race": "Insect",
                "property": "Fire 2",
                "size": "Large",
                "hit": 159,
                "flee": 224,
                "def": 60,
                "mdef": 45,
                "xp": {
                    "base": 114400,
                    "job": 57200,
                    "mvp": 357500
                },
                "elements": {
                    "Neutral": 1,
                    "Water": 1.75,
                    "Earth": 0.25,
                    "Fire": 0,
                    "Wind": 1,
                    "Poison": 1.25,
                    "Holy": 1,
                    "Shadow": 1,
                    "Ghost": 0.75,
                    "Undead": 0.75
                }
            }
        },
        {
            "id": 1885,
            "map": "mosk_dun03",
            "name": "Gopinich",
            "respawn": {
                "min": 6300,
                "max": 8100,
            },
            "respawnOld": {
                "min": 7200,
                "max": 7800,
            },
            "stats": {
                "hp": 299321,
                "race": "Brute",
                "property": "Earth 3",
                "size": "Large",
                "hit": 170,
                "flee": 312,
                "def": 20,
                "mdef": 42,
                "xp": {
                    "base": 362000,
                    "job": 131560,
                    "mvp": 1131250
                },
                "elements": {
                    "Neutral": 1,
                    "Water": 1,
                    "Earth": 0,
                    "Fire": 2,
                    "Wind": 0,
                    "Poison": 1,
                    "Holy": 1,
                    "Shadow": 1,
                    "Ghost": 0.5,
                    "Undead": 0.5
                }
            }
        },
        {
            "id": 1990,
            "map": "man_fild03",
            "name": "Hardrock Mammoth",
            "respawn": {
                "min": 14400,
                "max": 14460,
            },
            "respawnOld": {
                "min": 14400,
                "max": 14460,
            },
            "stats": {
                "hp": 4137000,
                "race": "Brute",
                "property": "Earth 3",
                "size": "Large",
                "hit": 170,
                "flee": 340,
                "def": 50,
                "mdef": 60,
                "xp": {
                    "base": 6619200,
                    "job": 3309600,
                    "mvp": 69922800
                },
                "elements": {
                    "Neutral": 1,
                    "Water": 1,
                    "Earth": 0,
                    "Fire": 2,
                    "Wind": 0,
                    "Poison": 1,
                    "Holy": 1,
                    "Shadow": 1,
                    "Ghost": 0.5,
                    "Undead": 0.5
                }
            }
        },
        {
            "id": 1832,
            "map": "thor_v03",
            "name": "Ifrit",
            "respawn": {
                "min": 39600,
                "max": 40200,
            },
            "respawnOld": {
                "min": 39600,
                "max": 40200,
            },
            "stats": {
                "hp": 7700000,
                "race": "Formless",
                "property": "Fire 4",
                "size": "Large",
                "hit": 299,
                "flee": 373,
                "def": 40,
                "mdef": 50,
                "xp": {
                    "base": 25234568,
                    "job": 24916160,
                    "mvp": 78858000
                },
                "elements": {
                    "Neutral": 1,
                    "Water": 2,
                    "Earth": 0,
                    "Fire": -0.5,
                    "Wind": 1,
                    "Poison": 0.75,
                    "Holy": 0.75,
                    "Shadow": 0.75,
                    "Ghost": 0.25,
                    "Undead": 0.25
                }
            }
        },
        {
            "id": 1492,
            "map": "ama_dun03",
            "name": "Incantation Samurai",
            "respawn": {
                "min": 5460,
                "max": 6060,
            },
            "respawnOld": {
                "min": 5460,
                "max": 6060,
            },
            "stats": {
                "hp": 218652,
                "race": "Demi-Human",
                "property": "Dark 4",
                "size": "Large",
                "hit": 176,
                "flee": 296,
                "def": 10,
                "mdef": 51,
                "xp": {
                    "base": 264760,
                    "job": 145712,
                    "mvp": 827350
                },
                "elements": {
                    "Neutral": 1,
                    "Water": 0.5,
                    "Earth": 0.5,
                    "Fire": 0.5,
                    "Wind": 0.5,
                    "Poison": 0,
                    "Holy": 1.75,
                    "Shadow": -0.5,
                    "Ghost": 0.25,
                    "Undead": 0
                }
            }
        },
        {
            "id": 1734,
            "map": "kh_dun02",
            "name": "Kiel D-01",
            "respawn": {
                "min": 7200,
                "max": 10800,
            },
            "respawnOld": {
                "min": 7200,
                "max": 10800,
            },
            "stats": {
                "hp": 1523000,
                "race": "Formless",
                "property": "Dark 2",
                "size": "Medium",
                "hit": 240,
                "flee": 364,
                "def": 28,
                "mdef": 32,
                "xp": {
                    "base": 18849600,
                    "job": 4100816,
                    "mvp": 58905000
                },
                "elements": {
                    "Neutral": 1,
                    "Water": 0.75,
                    "Earth": 0.75,
                    "Fire": 0.75,
                    "Wind": 0.75,
                    "Poison": 0.25,
                    "Holy": 1.5,
                    "Shadow": -0.25,
                    "Ghost": 0.5,
                    "Undead": 0
                }
            }
        },
        {
            "id": 2202,
            "map": "iz_dun05",
            "name": "Kraken",
            "respawn": {
                "min": 6300,
                "max": 8100,
            },
            "respawnOld": {
                "min": 7200,
                "max": 7800,
            },
            "stats": {
                "hp": 7283640,
                "race": "Fish",
                "property": "Water 4",
                "size": "Large",
                "hit": 260,
                "flee": 345,
                "def": 11,
                "mdef": 63,
                "xp": {
                    "base": 14159976,
                    "job": 10764440,
                    "mvp": 24583300
                },
                "elements": {
                    "Neutral": 1,
                    "Water": -0.5,
                    "Earth": 1,
                    "Fire": 0,
                    "Wind": 2,
                    "Poison": 0.25,
                    "Holy": 0.75,
                    "Shadow": 0.75,
                    "Ghost": 0.25,
                    "Undead": 0.25
                }
            }
        },
        {
            "id": 1779,
            "map": "ice_dun03",
            "name": "Ktullanux",
            "respawn": {
                "min": 7200,
                "max": 7260,
            },
            "respawnOld": {
                "min": 7200,
                "max": 7260,
            },
            "stats": {
                "hp": 4417000,
                "race": "Brute",
                "property": "Water 4",
                "size": "Large",
                "hit": 244,
                "flee": 350,
                "def": 40,
                "mdef": 42,
                "xp": {
                    "base": 21760400,
                    "job": 8960160,
                    "mvp": 53001250
                },
                "elements": {
                    "Neutral": 1,
                    "Water": -0.5,
                    "Earth": 1,
                    "Fire": 0,
                    "Wind": 2,
                    "Poison": 0.25,
                    "Holy": 0.75,
                    "Shadow": 0.75,
                    "Ghost": 0.25,
                    "Undead": 0.25
                }
            }
        },
        {
            "id": 1688,
            "map": "ayo_dun02",
            "name": "Lady Tanee",
            "respawn": {
                "min": 25200,
                "max": 25800,
            },
            "respawnOld": {
                "min": 25200,
                "max": 25800,
            },
            "stats": {
                "hp": 493000,
                "race": "Plant",
                "property": "Wind 3",
                "size": "Large",
                "hit": 234,
                "flee": 374,
                "def": 20,
                "mdef": 44,
                "xp": {
                    "base": 519960,
                    "job": 345776,
                    "mvp": 1624850
                },
                "elements": {
                    "Neutral": 1,
                    "Water": 0,
                    "Earth": 2,
                    "Fire": 1,
                    "Wind": -0.25,
                    "Poison": 1,
                    "Holy": 1,
                    "Shadow": 1,
                    "Ghost": 0.5,
                    "Undead": 0.5
                }
            }
        },
        {
            "id": 2156,
            "map": "dew_dun01",
            "name": "Leak",
            "respawn": {
                "min": 6300,
                "max": 8100,
            },
            "respawnOld": {
                "min": 7200,
                "max": 7800,
            },
            "stats": {
                "hp": 1645800,
                "race": "Demon",
                "property": "Dark 2",
                "size": "Large",
                "hit": 225,
                "flee": 341,
                "def": 37,
                "mdef": 51,
                "xp": {
                    "base": 6808320,
                    "job": 3361344,
                    "mvp": 11820000
                },
                "elements": {
                    "Neutral": 1,
                    "Water": 0.75,
                    "Earth": 0.75,
                    "Fire": 0.75,
                    "Wind": 0.75,
                    "Poison": 0.25,
                    "Holy": 1.5,
                    "Shadow": -0.25,
                    "Ghost": 0.5,
                    "Undead": 0
                }
            }
        },
        {
            "id": 1373,
            "map": "niflheim",
            "name": "Lord of Death",
            "respawn": {
                "min": 7980,
                "max": 8040,
            },
            "respawnOld": {
                "min": 7980,
                "max": 8040,
            },
            "stats": {
                "hp": 603383,
                "race": "Demon",
                "property": "Dark 3",
                "size": "Large",
                "hit": 213,
                "flee": 269,
                "def": 77,
                "mdef": 73,
                "xp": {
                    "base": 1050744,
                    "job": 346760,
                    "mvp": 3283550
                },
                "elements": {
                    "Neutral": 1,
                    "Water": 0.5,
                    "Earth": 0.5,
                    "Fire": 0.5,
                    "Wind": 0.5,
                    "Poison": 0,
                    "Holy": 1.75,
                    "Shadow": -0.5,
                    "Ghost": 0.25,
                    "Undead": 0
                }
            }
        },
        {
            "id": 1147,
            "map": "anthell02",
            "name": "Maya",
            "respawn": {
                "min": 6300,
                "max": 8100,
            },
            "respawnOld": {
                "min": 7200,
                "max": 7800,
            },
            "stats": {
                "hp": 169000,
                "race": "Insect",
                "property": "Earth 4",
                "size": "Large",
                "hit": 198,
                "flee": 238,
                "def": 60,
                "mdef": 25,
                "xp": {
                    "base": 343200,
                    "job": 143000,
                    "mvp": 1072500
                },
                "elements": {
                    "Neutral": 1,
                    "Water": 1,
                    "Earth": -0.25,
                    "Fire": 2,
                    "Wind": 0,
                    "Poison": 0.75,
                    "Holy": 0.75,
                    "Shadow": 0.75,
                    "Ghost": 0.25,
                    "Undead": 0.25
                }
            }
        },/*
        {
            "id": 1147,
            "map": "gld_dun03",
            "name": "Maya",
            "respawn": {
                "min": 28800,
                "max": 29400,
            },
            "respawnOld": {
                "min": 28800,
                "max": 29400,
            }
        },*/
        {
            "id": 1289,
            "map": "anthell01",
            "name": "Maya Purple",
            "respawn": {
                "min": 7200,
                "max": 10800,
            },
            "respawnOld": {
                "min": 7200,
                "max": 10800,
            },
            "stats": {
                "hp": 55479,
                "race": "Insect",
                "property": "Earth 4",
                "size": "Large",
                "hit": 191,
                "flee": 246,
                "def": 68,
                "mdef": 48,
                "xp": {
                    "base": 83968,
                    "job": 31144,
                    "mvp": 0
                },
                "elements": {
                    "Neutral": 1,
                    "Water": 1,
                    "Earth": -0.25,
                    "Fire": 2,
                    "Wind": 0,
                    "Poison": 0.75,
                    "Holy": 0.75,
                    "Shadow": 0.75,
                    "Ghost": 0.25,
                    "Undead": 0.25
                }
            }
        },/*
        {
            "id": 1289,
            "map": "gld_dun03",
            "name": "Maya Purple",
            "respawn": {
                "min": 1200,
                "max": 1800,
            },
            "respawnOld": {
                "min": 1200,
                "max": 1800,
            }
        },*/
        {
            "id": 1059,
            "map": "mjolnir_04",
            "name": "Mistress",
            "respawn": {
                "min": 6300,
                "max": 8100,
            },
            "respawnOld": {
                "min": 7200,
                "max": 7800,
            },
            "stats": {
                "hp": 212000,
                "race": "Insect",
                "property": "Wind 4",
                "size": "Large",
                "hit": 259,
                "flee": 219,
                "def": 40,
                "mdef": 60,
                "xp": {
                    "base": 314600,
                    "job": 217360,
                    "mvp": 983100
                },
                "elements": {
                    "Neutral": 1,
                    "Water": 0,
                    "Earth": 2,
                    "Fire": 1,
                    "Wind": -0.5,
                    "Poison": 0.75,
                    "Holy": 0.75,
                    "Shadow": 0.75,
                    "Ghost": 0.25,
                    "Undead": 0.25
                }
            }
        },
        {
            "id": 1150,
            "map": "pay_dun04",
            "name": "Moonlight Flower",
            "respawn": {
                "min": 3600,
                "max": 4200,
            },
            "respawnOld": {
                "min": 3600,
                "max": 4200,
            },
            "stats": {
                "hp": 120000,
                "race": "Demon",
                "property": "Fire 3",
                "size": "Medium",
                "hit": 186,
                "flee": 237,
                "def": 10,
                "mdef": 55,
                "xp": {
                    "base": 220000,
                    "job": 114400,
                    "mvp": 687500
                },
                "elements": {
                    "Neutral": 1,
                    "Water": 2,
                    "Earth": 0,
                    "Fire": -0.25,
                    "Wind": 1,
                    "Poison": 1,
                    "Holy": 1,
                    "Shadow": 1,
                    "Ghost": 0.5,
                    "Undead": 0.5
                }
            }
        },
        {
            "id": 1087,
            "map": "gef_fild02",
            "name": "Orc Hero",
            "respawn": {
                "min": 86400,
                "max": 87000,
            },
            "respawnOld": {
                "min": 86400,
                "max": 87000,
            },
            "stats": {
                "hp": 585700,
                "race": "Demi-Human",
                "property": "Earth 2",
                "size": "Large",
                "hit": 188,
                "flee": 257,
                "def": 40,
                "mdef": 45,
                "xp": {
                    "base": 469040,
                    "job": 263120,
                    "mvp": 1465750
                },
                "elements": {
                    "Neutral": 1,
                    "Water": 1,
                    "Earth": 0.5,
                    "Fire": 1.75,
                    "Wind": 0.25,
                    "Poison": 1.25,
                    "Holy": 1,
                    "Shadow": 1,
                    "Ghost": 0.75,
                    "Undead": 0.75
                }
            }
        },
        {
            "id": 1087,
            "map": "gef_fild14",
            "name": "Orc Hero",
            "respawn": {
                "min": 3600,
                "max": 4200,
            },
            "respawnOld": {
                "min": 3600,
                "max": 4200,
            },
            "stats": {
                "hp": 585700,
                "race": "Demi-Human",
                "property": "Earth 2",
                "size": "Large",
                "hit": 188,
                "flee": 257,
                "def": 40,
                "mdef": 45,
                "xp": {
                    "base": 469040,
                    "job": 263120,
                    "mvp": 1465750
                },
                "elements": {
                    "Neutral": 1,
                    "Water": 1,
                    "Earth": 0.5,
                    "Fire": 1.75,
                    "Wind": 0.25,
                    "Poison": 1.25,
                    "Holy": 1,
                    "Shadow": 1,
                    "Ghost": 0.75,
                    "Undead": 0.75
                }
            }
        },
        {
            "id": 1190,
            "map": "gef_fild10",
            "name": "Orc Lord",
            "respawn": {
                "min": 6300,
                "max": 8100,
            },
            "respawnOld": {
                "min": 7200,
                "max": 7800,
            },
            "stats": {
                "hp": 783000,
                "race": "Demi-Human",
                "property": "Earth 4",
                "size": "Large",
                "hit": 176,
                "flee": 259,
                "def": 40,
                "mdef": 5,
                "xp": {
                    "base": 497640,
                    "job": 68640,
                    "mvp": 1555100
                },
                "elements": {
                    "Neutral": 1,
                    "Water": 1,
                    "Earth": -0.25,
                    "Fire": 2,
                    "Wind": 0,
                    "Poison": 0.75,
                    "Holy": 0.75,
                    "Shadow": 0.75,
                    "Ghost": 0.25,
                    "Undead": 0.25
                }
            }
        },
        {
            "id": 1038,
            "map": "moc_pryd04",
            "name": "Osiris",
            "respawn": {
                "min": 3600,
                "max": 10800,
            },
            "respawnOld": {
                "min": 3600,
                "max": 10800,
            },
            "stats": {
                "hp": 415400,
                "race": "Undead",
                "property": "Undead 4",
                "size": "Medium",
                "hit": 173,
                "flee": 239,
                "def": 10,
                "mdef": 25,
                "xp": {
                    "base": 572000,
                    "job": 228800,
                    "mvp": 1787500
                },
                "elements": {
                    "Neutral": 1,
                    "Water": 1.5,
                    "Earth": 0.5,
                    "Fire": 2,
                    "Wind": 1,
                    "Poison": -1,
                    "Holy": 2,
                    "Shadow": -1,
                    "Ghost": 1.75,
                    "Undead": 0
                }
            }
        },
        {
            "id": 1157,
            "map": "in_sphinx5",
            "name": "Pharaoh",
            "respawn": {
                "min": 3600,
                "max": 4200,
            },
            "respawnOld": {
                "min": 3600,
                "max": 4200,
            },
            "stats": {
                "hp": 445997,
                "race": "Demi-Human",
                "property": "Dark 3",
                "size": "Large",
                "hit": 206,
                "flee": 257,
                "def": 67,
                "mdef": 70,
                "xp": {
                    "base": 919920,
                    "job": 335192,
                    "mvp": 2874750
                },
                "elements": {
                    "Neutral": 1,
                    "Water": 0.5,
                    "Earth": 0.5,
                    "Fire": 0.5,
                    "Wind": 0.5,
                    "Poison": 0,
                    "Holy": 1.75,
                    "Shadow": -0.5,
                    "Ghost": 0.25,
                    "Undead": 0
                }
            }
        },
        {
            "id": 1159,
            "map": "moc_fild17",
            "name": "Phreeoni",
            "respawn": {
                "min": 6300,
                "max": 8100,
            },
            "respawnOld": {
                "min": 7200,
                "max": 7800,
            },
            "stats": {
                "hp": 188000,
                "race": "Brute",
                "property": "Neutral 3",
                "size": "Large",
                "hit": 174,
                "flee": 274,
                "def": 10,
                "mdef": 20,
                "xp": {
                    "base": 257400,
                    "job": 131560,
                    "mvp": 804350
                },
                "elements": {
                    "Neutral": 1,
                    "Water": 1,
                    "Earth": 1,
                    "Fire": 1,
                    "Wind": 1,
                    "Poison": 1,
                    "Holy": 1,
                    "Shadow": 1,
                    "Ghost": 0,
                    "Undead": 1
                }
            }
        },
        {
            "id": 2087,
            "map": "dic_dun02",
            "name": "Queen Scaraba",
            "respawn": {
                "min": 7200,
                "max": 7260,
            },
            "respawnOld": {
                "min": 7200,
                "max": 7260,
            },
            "stats": {
                "hp": 2441600,
                "race": "Insect",
                "property": "Earth 3",
                "size": "Large",
                "hit": 199,
                "flee": 377,
                "def": 42,
                "mdef": 62,
                "xp": {
                    "base": 3281760,
                    "job": 1697600,
                    "mvp": 10255500
                },
                "elements": {
                    "Neutral": 1,
                    "Water": 1,
                    "Earth": 0,
                    "Fire": 2,
                    "Wind": 0,
                    "Poison": 1,
                    "Holy": 1,
                    "Shadow": 1,
                    "Ghost": 0.5,
                    "Undead": 0.5
                }
            }
        },
        {
            "id": 2165,
            "map": "dic_dun03",
            "name": "Gold Queen Scaraba",
            "respawn": {
                "min": 7200,
                "max": 7260,
            },
            "respawnOld": {
                "min": 7200,
                "max": 7260,
            },
            "stats": {
                "hp": 6441600,
                "race": "Insect",
                "property": "Earth 3",
                "size": "Large",
                "hit": 249,
                "flee": 421,
                "def": 42,
                "mdef": 62,
                "xp": {
                    "base": 32817600,
                    "job": 16976000,
                    "mvp": 20511000
                },
                "elements": {
                    "Neutral": 1,
                    "Water": 1,
                    "Earth": 0,
                    "Fire": 2,
                    "Wind": 0,
                    "Poison": 1,
                    "Holy": 1,
                    "Shadow": 1,
                    "Ghost": 0.5,
                    "Undead": 0.5
                }
            }
        },
        {
            "id": 1623,
            "map": "ein_dun02",
            "name": "RSX-0806",
            "respawn": {
                "min": 7500,
                "max": 8100,
            },
            "respawnOld": {
                "min": 7500,
                "max": 8100,
            },
            "stats": {
                "hp": 560733,
                "race": "Formless",
                "property": "Neutral 3",
                "size": "Large",
                "hit": 157,
                "flee": 254,
                "def": 39,
                "mdef": 41,
                "xp": {
                    "base": 248080,
                    "job": 256088,
                    "mvp": 775250
                },
                "elements": {
                    "Neutral": 1,
                    "Water": 1,
                    "Earth": 1,
                    "Fire": 1,
                    "Wind": 1,
                    "Poison": 1,
                    "Holy": 1,
                    "Shadow": 1,
                    "Ghost": 0,
                    "Undead": 1
                }
            }
        },
        {
            "id": 1251,
            "map": "xmas_dun02",
            "name": "Stormy Knight",
            "respawn": {
                "min": 3600,
                "max": 4200,
            },
            "respawnOld": {
                "min": 3600,
                "max": 4200,
            },
            "stats": {
                "hp": 240000,
                "race": "Formless",
                "property": "Wind 4",
                "size": "Large",
                "hit": 282,
                "flee": 282,
                "def": 35,
                "mdef": 60,
                "xp": {
                    "base": 514800,
                    "job": 171600,
                    "mvp": 1608750
                },
                "elements": {
                    "Neutral": 1,
                    "Water": 0,
                    "Earth": 2,
                    "Fire": 1,
                    "Wind": -0.5,
                    "Poison": 0.75,
                    "Holy": 0.75,
                    "Shadow": 0.75,
                    "Ghost": 0.25,
                    "Undead": 0.25
                }
            }
        },
        {
            "id": 1583,
            "map": "beach_dun",
            "name": "Tao Gunka (West)",
            "respawn": {
                "min": 18000,
                "max": 18600,
            },
            "respawnOld": {
                "min": 18000,
                "max": 18600,
            },
            "stats": {
                "hp": 240000,
                "race": "Formless",
                "property": "Wind 4",
                "size": "Large",
                "hit": 282,
                "flee": 282,
                "def": 35,
                "mdef": 60,
                "xp": {
                    "base": 514800,
                    "job": 171600,
                    "mvp": 1608750
                },
                "elements": {
                    "Neutral": 1,
                    "Water": 1,
                    "Earth": 1,
                    "Fire": 1,
                    "Wind": 1,
                    "Poison": 1,
                    "Holy": 1,
                    "Shadow": 1,
                    "Ghost": 0,
                    "Undead": 1
                }
            }
        },
        {
            "id": 1583,
            "map": "beach_dun2",
            "name": "Tao Gunka (North)",
            "respawn": {
                "min": 18000,
                "max": 18600,
            },
            "respawnOld": {
                "min": 18000,
                "max": 18600,
            },
            "stats": {
                "hp": 193000,
                "race": "Demon",
                "property": "Neutral 3",
                "size": "Large",
                "hit": 175,
                "flee": 285,
                "def": 20,
                "mdef": 20,
                "xp": {
                    "base": 473400,
                    "job": 83560,
                    "mvp": 1479350
                },
                "elements": {
                    "Neutral": 1,
                    "Water": 1,
                    "Earth": 1,
                    "Fire": 1,
                    "Wind": 1,
                    "Poison": 1,
                    "Holy": 1,
                    "Shadow": 1,
                    "Ghost": 0,
                    "Undead": 1
                }
            }
        },
        {
            "id": 1583,
            "map": "beach_dun3",
            "name": "Tao Gunka (East)",
            "respawn": {
                "min": 18000,
                "max": 18600,
            },
            "respawnOld": {
                "min": 18000,
                "max": 18600,
            },
            "stats": {
                "hp": 193000,
                "race": "Demon",
                "property": "Neutral 3",
                "size": "Large",
                "hit": 175,
                "flee": 285,
                "def": 20,
                "mdef": 20,
                "xp": {
                    "base": 473400,
                    "job": 83560,
                    "mvp": 1479350
                },
                "elements": {
                    "Neutral": 1,
                    "Water": 1,
                    "Earth": 1,
                    "Fire": 1,
                    "Wind": 1,
                    "Poison": 1,
                    "Holy": 1,
                    "Shadow": 1,
                    "Ghost": 0,
                    "Undead": 1
                }
            }
        },
        {
            "id": 1991,
            "map": "spl_fild03",
            "name": "Tendrillion",
            "respawn": {
                "min": 3600,
                "max": 3660,
            },
            "respawnOld": {
                "min": 3600,
                "max": 3660,
            },
            "stats": {
                "hp": 3657330,
                "race": "Brute",
                "property": "Earth 2",
                "size": "Large",
                "hit": 193,
                "flee": 335,
                "def": 33,
                "mdef": 30,
                "xp": {
                    "base": 5851728,
                    "job": 2925864,
                    "mvp": 49969000
                },
                "elements": {
                    "Neutral": 1,
                    "Water": 1,
                    "Earth": 0.5,
                    "Fire": 1.75,
                    "Wind": 0.25,
                    "Poison": 1.25,
                    "Holy": 1,
                    "Shadow": 1,
                    "Ghost": 0.75,
                    "Undead": 0.75
                }
            }
        },
        {
            "id": 1708,
            "map": "thana_boss",
            "name": "Thanatos",
            "respawn": {
                "min": 7200,
                "max": 7260,
            },
            "respawnOld": {
                "min": 7200,
                "max": 7260,
            },
            "stats": {
                "hp": 445660,
                "race": "Demon",
                "property": "Ghost 4",
                "size": "Large",
                "hit": 227,
                "flee": 321,
                "def": 35,
                "mdef": 35,
                "xp": {
                    "base": 29328000,
                    "job": 17160480,
                    "mvp": 91650000
                },
                "elements": {
                    "Neutral": 0,
                    "Water": 1,
                    "Earth": 1,
                    "Fire": 1,
                    "Wind": 1,
                    "Poison": 0.25,
                    "Holy": 1,
                    "Shadow": 1,
                    "Ghost": 2,
                    "Undead": 1
                }
            }
        },
        {
            "id": 1312,
            "map": "tur_dun04",
            "name": "Turtle General",
            "respawn": {
                "min": 3600,
                "max": 4200,
            },
            "respawnOld": {
                "min": 3600,
                "max": 4200,
            },
            "stats": {
                "hp": 320700,
                "race": "Brute",
                "property": "Earth 2",
                "size": "Large",
                "hit": 162,
                "flee": 277,
                "def": 50,
                "mdef": 54,
                "xp": {
                    "base": 145616,
                    "job": 78400,
                    "mvp": 455050
                },
                "elements": {
                    "Neutral": 1,
                    "Water": 1,
                    "Earth": 0.5,
                    "Fire": 1.75,
                    "Wind": 0.25,
                    "Poison": 1.25,
                    "Holy": 1,
                    "Shadow": 1,
                    "Ghost": 0.75,
                    "Undead": 0.75
                }
            }
        },
        {
            "id": 1751,
            "map": "odin_tem03",
            "name": "Valkyrie Randgris",
            "respawn": {
                "min": 28800,
                "max": 50400,
            },
            "respawnOld": {
                "min": 28800,
                "max": 50400,
            },
            "stats": {
                "hp": 3567200,
                "race": "Angel",
                "property": "Holy 4",
                "size": "Large",
                "hit": 239,
                "flee": 394,
                "def": 25,
                "mdef": 42,
                "xp": {
                    "base": 22839200,
                    "job": 24916160,
                    "mvp": 71372500
                },
                "elements": {
                    "Neutral": 1,
                    "Water": 0,
                    "Earth": 0,
                    "Fire": 0,
                    "Wind": 0,
                    "Poison": 0,
                    "Holy": 1,
                    "Shadow": 2,
                    "Ghost": 0,
                    "Undead": 1.75
                }
            }
        },
        {
            "id": 1685,
            "map": "jupe_core",
            "name": "Vesper",
            "respawn": {
                "min": 6300,
                "max": 8100,
            },
            "respawnOld": {
                "min": 7200,
                "max": 7800,
            },
            "stats": {
                "hp": 640700,
                "race": "Brute",
                "property": "Holy 2",
                "size": "Large",
                "hit": 167,
                "flee": 332,
                "def": 50,
                "mdef": 54,
                "xp": {
                    "base": 1600000,
                    "job": 800000,
                    "mvp": 5000000
                },
                "elements": {
                    "Neutral": 1,
                    "Water": 0.5,
                    "Earth": 0.5,
                    "Fire": 0.5,
                    "Wind": 0.5,
                    "Poison": 0.5,
                    "Holy": -0.25,
                    "Shadow": 1.5,
                    "Ghost": 0.5,
                    "Undead": 1.25
                }
            }
        },
        {
            "id": 1917,
            "map": "moc_fild22",
            "name": "Wounded Morroc",
            "respawn": {
                "min": 43200,
                "max": 54000,
            },
            "respawnOld": {
                "min": 43200,
                "max": 54000,
            },
            "stats": {
                "hp": 8388607,
                "race": "Demon",
                "property": "Dark 4",
                "size": "Large",
                "hit": 279,
                "flee": 354,
                "def": 29,
                "mdef": 65,
                "xp": {
                    "base": 28800000,
                    "job": 24000000,
                    "mvp": 180000000
                },
                "elements": {
                    "Neutral": 1,
                    "Water": 0.25,
                    "Earth": 0.25,
                    "Fire": 0.25,
                    "Wind": 0.25,
                    "Poison": -0.25,
                    "Holy": 2,
                    "Shadow": -1,
                    "Ghost": 0,
                    "Undead": 0
                }
            }
        }];
    };

    service.get = function(path) {
        var ref = firebase.database().ref(path);

        return ref;
    };

    service.getObj = function(path) {
        var ref = service.get(path);
        var obj = $firebaseObject(ref);

        return obj;
    };

    service.getArr = function(path) {
        var ref = service.get(path);
        var arr = $firebaseArray(ref);

        return arr;
    };

    return service;
});
