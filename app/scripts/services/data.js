'use strict';

/*globals app */

/**
 * @ngdoc service
 * @name roMvpTrackerApp.DataSrv
 * @description
 * # DataSrv
 * Service in the roMvpTrackerApp.
 */
app.service('DataSrv', function () {
    var service = {};

    service.getMvpList = function() {
        return [{
            "id": 0,
            "map": "moc_pryd06",
            "name": "Amon Ra",
            "respawn": {
                "min": 3600,
                "max": 4200,
            }
        },
        {
            "id": 0,
            "map": "pay_fild04",
            "name": "Angeling",
            "respawn": {
                "min": 3600,
                "max": 5400,
            }
        },
        {
            "id": 0,
            "map": "xmas_dun01",
            "name": "Angeling",
            "respawn": {
                "min": 3600,
                "max": 5400,
            }
        },
        {
            "id": 0,
            "map": "yuno_fild03",
            "name": "Angeling",
            "respawn": {
                "min": 3600,
                "max": 5400,
            }
        },
        {
            "id": 0,
            "map": "yuno_fild05",
            "name": "Archangeling",
            "respawn": {
                "min": 3600,
                "max": 3780,
            }
        },
        {
            "id": 0,
            "map": "ra_fild02",
            "name": "Atroce",
            "respawn": {
                "min": 14400,
                "max": 15000,
            }
        },
        {
            "id": 0,
            "map": "ra_fild03",
            "name": "Atroce",
            "respawn": {
                "min": 10800,
                "max": 11400,
            }
        },
        {
            "id": 0,
            "map": "ra_fild04",
            "name": "Atroce",
            "respawn": {
                "min": 18000,
                "max": 18600,
            }
        },
        {
            "id": 0,
            "map": "ve_fild01",
            "name": "Atroce",
            "respawn": {
                "min": 10800,
                "max": 11400,
            }
        },
        {
            "id": 0,
            "map": "ve_fild02",
            "name": "Atroce",
            "respawn": {
                "min": 21600,
                "max": 22200,
            }
        },
        {
            "id": 0,
            "map": "lou_dun03",
            "name": "White Lady",
            "respawn": {
                "min": 7020,
                "max": 7620,
            }
        },
        {
            "id": 0,
            "map": "prt_maze03",
            "name": "Baphomet",
            "respawn": {
                "min": 7200,
                "max": 7800,
            }
        },
        {
            "id": 0,
            "map": "abbey03",
            "name": "Beelzebub",
            "respawn": {
                "min": 43200,
                "max": 43800,
            }
        },
        {
            "id": 0,
            "map": "lhz_dun03",
            "name": "Bio3 MVP",
            "respawn": {
                "min": 6000,
                "max": 7800,
            }
        },
        {
            "id": 0,
            "map": "bra_dun02",
            "name": "Boitata",
            "respawn": {
                "min": 7200,
                "max": 7800,
            }
        },
        {
            "id": 0,
            "map": "gld_dun04",
            "name": "Dark Lord",
            "respawn": {
                "min": 28800,
                "max": 29400,
            }
        },
        {
            "id": 0,
            "map": "gl_chyard",
            "name": "Dark Lord",
            "respawn": {
                "min": 3600,
                "max": 4200,
            }
        },
        {
            "id": 0,
            "map": "abyss_03",
            "name": "Detale",
            "respawn": {
                "min": 10800,
                "max": 11400,
            }
        },
        {
            "id": 0,
            "map": "pay_fild04",
            "name": "Deviling",
            "respawn": {
                "min": 7200,
                "max": 10800,
            }
        },
        {
            "id": 0,
            "map": "yuno_fild03",
            "name": "Deviling",
            "respawn": {
                "min": 3600,
                "max": 5400,
            }
        },
        {
            "id": 0,
            "map": "gef_dun02",
            "name": "Doppelganger",
            "respawn": {
                "min": 7200,
                "max": 7800,
            }
        },
        {
            "id": 0,
            "map": "gld_dun02",
            "name": "Doppelganger",
            "respawn": {
                "min": 28800,
                "max": 29400,
            }
        },
        {
            "id": 0,
            "map": "gef_dun01",
            "name": "Dracula",
            "respawn": {
                "min": 3600,
                "max": 4200,
            }
        },
        {
            "id": 0,
            "map": "treasure02",
            "name": "Drake",
            "respawn": {
                "min": 7200,
                "max": 7800,
            }
        },
        {
            "id": 0,
            "map": "gld_dun01",
            "name": "Eddga",
            "respawn": {
                "min": 28800,
                "max": 29400,
            }
        },
        {
            "id": 0,
            "map": "pay_fild11",
            "name": "Eddga",
            "respawn": {
                "min": 7200,
                "max": 7800,
            }
        },
        {
            "id": 0,
            "map": "lhz_dun02",
            "name": "Egnigem Cenia",
            "respawn": {
                "min": 7200,
                "max": 7800,
            }
        },
        {
            "id": 0,
            "map": "gon_dun03",
            "name": "Evil Snake Lord",
            "respawn": {
                "min": 5640,
                "max": 6240,
            }
        },
        {
            "id": 0,
            "map": "abbey02",
            "name": "Fallen Bishop Hibram",
            "respawn": {
                "min": 7200,
                "max": 7800,
            }
        },
        {
            "id": 0,
            "map": "xmas_fild01",
            "name": "Garm",
            "respawn": {
                "min": 7200,
                "max": 7800,
            }
        },
        {
            "id": 0,
            "map": "gld_dun04",
            "name": "Ghostring",
            "respawn": {
                "min": 14400,
                "max": 21600,
            }
        },
        {
            "id": 0,
            "map": "pay_fild04",
            "name": "Ghostring",
            "respawn": {
                "min": 3600,
                "max": 5400,
            }
        },
        {
            "id": 0,
            "map": "prt_maze03",
            "name": "Ghostring",
            "respawn": {
                "min": 6780,
                "max": 10200,
            }
        },
        {
            "id": 0,
            "map": "treasure02",
            "name": "Ghostring",
            "respawn": {
                "min": 1980,
                "max": 3180,
            }
        },
        {
            "id": 0,
            "map": "ra_san05",
            "name": "Gloom Under Night",
            "respawn": {
                "min": 18000,
                "max": 18600,
            }
        },
        {
            "id": 0,
            "map": "prt_sewb4",
            "name": "Golden Thief Bug",
            "respawn": {
                "min": 3600,
                "max": 4200,
            }
        },
        {
            "id": 0,
            "map": "mosk_dun03",
            "name": "Gopinich",
            "respawn": {
                "min": 7200,
                "max": 7800,
            }
        },
        {
            "id": 0,
            "map": "man_fild03",
            "name": "Hardrock Mammoth",
            "respawn": {
                "min": 14400,
                "max": 14460,
            }
        },
        {
            "id": 0,
            "map": "thor_v03",
            "name": "Ifrit",
            "respawn": {
                "min": 39600,
                "max": 40200,
            }
        },
        {
            "id": 0,
            "map": "ama_dun03",
            "name": "Incantation Samurai",
            "respawn": {
                "min": 5460,
                "max": 6060,
            }
        },
        {
            "id": 0,
            "map": "kh_dun02",
            "name": "Kiel D-01",
            "respawn": {
                "min": 7200,
                "max": 10800,
            }
        },
        {
            "id": 0,
            "map": "iz_dun05",
            "name": "Kraken",
            "respawn": {
                "min": 7200,
                "max": 7800,
            }
        },
        {
            "id": 0,
            "map": "ice_dun03",
            "name": "Ktullanux",
            "respawn": {
                "min": 7200,
                "max": 7260,
            }
        },
        {
            "id": 0,
            "map": "ayo_dun02",
            "name": "Lady Tanee",
            "respawn": {
                "min": 25200,
                "max": 25800,
            }
        },
        {
            "id": 0,
            "map": "dew_dun01",
            "name": "Leak",
            "respawn": {
                "min": 7200,
                "max": 7800,
            }
        },
        {
            "id": 0,
            "map": "niflheim",
            "name": "Lord of Death",
            "respawn": {
                "min": 7980,
                "max": 8040,
            }
        },
        {
            "id": 0,
            "map": "anthell02",
            "name": "Maya",
            "respawn": {
                "min": 7200,
                "max": 7800,
            }
        },
        {
            "id": 0,
            "map": "gld_dun03",
            "name": "Maya",
            "respawn": {
                "min": 28800,
                "max": 29400,
            }
        },
        {
            "id": 0,
            "map": "anthell01",
            "name": "Maya Purple",
            "respawn": {
                "min": 7200,
                "max": 10800,
            }
        },
        {
            "id": 0,
            "map": "gld_dun03",
            "name": "Maya Purple",
            "respawn": {
                "min": 1200,
                "max": 1800,
            }
        },
        {
            "id": 0,
            "map": "mjolnir_04",
            "name": "Mistress",
            "respawn": {
                "min": 7200,
                "max": 7800,
            }
        },
        {
            "id": 0,
            "map": "pay_dun04",
            "name": "Moonlight Flower",
            "respawn": {
                "min": 3600,
                "max": 4200,
            }
        },
        {
            "id": 0,
            "map": "gef_fild02",
            "name": "Orc Hero",
            "respawn": {
                "min": 86400,
                "max": 87000,
            }
        },
        {
            "id": 0,
            "map": "gef_fild14",
            "name": "Orc Hero",
            "respawn": {
                "min": 3600,
                "max": 4200,
            }
        },
        {
            "id": 0,
            "map": "gef_fild10",
            "name": "Orc Lord",
            "respawn": {
                "min": 7200,
                "max": 7800,
            }
        },
        {
            "id": 0,
            "map": "moc_pryd04",
            "name": "Osiris",
            "respawn": {
                "min": 3600,
                "max": 10800,
            }
        },
        {
            "id": 0,
            "map": "in_sphinx5",
            "name": "Pharaoh",
            "respawn": {
                "min": 3600,
                "max": 4200,
            }
        },
        {
            "id": 0,
            "map": "moc_fild17",
            "name": "Phreeoni",
            "respawn": {
                "min": 7200,
                "max": 7800,
            }
        },
        {
            "id": 0,
            "map": "dic_dun02",
            "name": "Queen Scaraba",
            "respawn": {
                "min": 7200,
                "max": 7260,
            }
        },
        {
            "id": 0,
            "map": "ein_dun02",
            "name": "RSX-0806",
            "respawn": {
                "min": 7500,
                "max": 8100,
            }
        },
        {
            "id": 0,
            "map": "xmas_dun02",
            "name": "Stormy Knight",
            "respawn": {
                "min": 3600,
                "max": 4200,
            }
        },
        {
            "id": 0,
            "map": "beach_dun",
            "name": "Tao Gunka",
            "respawn": {
                "min": 18000,
                "max": 18600,
            }
        },
        {
            "id": 0,
            "map": "beach_dun2",
            "name": "Tao Gunka",
            "respawn": {
                "min": 18000,
                "max": 18600,
            }
        },
        {
            "id": 0,
            "map": "beach_dun3",
            "name": "Tao Gunka",
            "respawn": {
                "min": 18000,
                "max": 18600,
            }
        },
        {
            "id": 0,
            "map": "spl_fild03",
            "name": "Tendrillion",
            "respawn": {
                "min": 3600,
                "max": 3660,
            }
        },
        {
            "id": 0,
            "map": "thana_boss",
            "name": "Thanatos",
            "respawn": {
                "min": 7200,
                "max": 7260,
            }
        },
        {
            "id": 0,
            "map": "tur_dun04",
            "name": "Turtle General",
            "respawn": {
                "min": 3600,
                "max": 4200,
            }
        },
        {
            "id": 0,
            "map": "odin_tem03",
            "name": "Valkyrie Randgris",
            "respawn": {
                "min": 28800,
                "max": 50400,
            }
        },
        {
            "id": 0,
            "map": "jupe_core",
            "name": "Vesper",
            "respawn": {
                "min": 7200,
                "max": 7800,
            }
        },
        {
            "id": 0,
            "map": "moc_fild22",
            "name": "Wounded Morroc",
            "respawn": {
                "min": 43200,
                "max": 54000,
            }
        }];
    };

    return service;
});
