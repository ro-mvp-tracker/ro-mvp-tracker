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
            }
        },
        {
            "id": 1652,
            "map": "lhz_dun02",
            "name": "Egnigem Cenia",
            "respawn": {
                "min": 6300,
                "max": 8100,
            },
            "respawnOld": {
                "min": 7200,
                "max": 7800,
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
