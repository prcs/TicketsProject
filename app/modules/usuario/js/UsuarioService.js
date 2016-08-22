/**
 * Created by Desenvolvimento on 07/08/2016.
 */
app.service('Srv', function () {


        this.listaUsuarios = function () {
            return [
                {
                    "id": 1,
                    "first_name": "Diane",
                    "last_name": "Henry",
                    "email": "dhenry0@cbslocal.com",
                    "gender": "Female",
                    "ip_address": "224.159.132.164",
                    "active" : 1
                }, {
                "id": 2,
                "first_name": "Katherine",
                "last_name": "Romero",
                "email": "kromero1@bigcartel.com",
                "gender": "Female",
                "ip_address": "84.0.157.172"
            }, {
                "id": 3,
                "first_name": "Patricia",
                "last_name": "Coleman",
                "email": "pcoleman2@apple.com",
                "gender": "Female",
                "ip_address": "156.99.155.25"
            }, {
                "id": 4,
                "first_name": "Nicholas",
                "last_name": "Berry",
                "email": "nberry3@mayoclinic.com",
                "gender": "Male",
                "ip_address": "127.237.68.167",
                "active" : 1
            }, {
                "id": 5,
                "first_name": "Linda",
                "last_name": "Berry",
                "email": "lberry4@freewebs.com",
                "gender": "Female",
                "ip_address": "212.226.205.21"
            }, {
                "id": 6,
                "first_name": "Marie",
                "last_name": "Patterson",
                "email": "mpatterson5@hostgator.com",
                "gender": "Female",
                "ip_address": "209.30.156.23"
            }, {
                "id": 7,
                "first_name": "Terry",
                "last_name": "Warren",
                "email": "twarren6@e-recht24.de",
                "gender": "Male",
                "ip_address": "142.18.204.198"
            }, {
                "id": 8,
                "first_name": "Carolyn",
                "last_name": "Harris",
                "email": "charris7@microsoft.com",
                "gender": "Female",
                "ip_address": "117.15.81.26"
            }, {
                "id": 9,
                "first_name": "Clarence",
                "last_name": "Burke",
                "email": "cburke8@usnews.com",
                "gender": "Male",
                "ip_address": "130.185.154.253"
            }, {
                "id": 10,
                "first_name": "Marilyn",
                "last_name": "Bryant",
                "email": "mbryant9@usda.gov",
                "gender": "Female",
                "ip_address": "65.193.117.89"
            }, {
                "id": 11,
                "first_name": "Edward",
                "last_name": "Stanley",
                "email": "estanleya@bloglovin.com",
                "gender": "Male",
                "ip_address": "69.171.153.36"
            }, {
                "id": 12,
                "first_name": "Jerry",
                "last_name": "Ellis",
                "email": "jellisb@fotki.com",
                "gender": "Male",
                "ip_address": "168.215.192.230"
            }, {
                "id": 13,
                "first_name": "Wayne",
                "last_name": "Dixon",
                "email": "wdixonc@nsw.gov.au",
                "gender": "Male",
                "ip_address": "46.54.200.253"
            }, {
                "id": 14,
                "first_name": "John",
                "last_name": "Castillo",
                "email": "jcastillod@rambler.ru",
                "gender": "Male",
                "ip_address": "139.52.173.17",
                "active" : 1
            }, {
                "id": 15,
                "first_name": "Bobby",
                "last_name": "Medina",
                "email": "bmedinae@about.me",
                "gender": "Male",
                "ip_address": "48.114.164.17"
            }, {
                "id": 16,
                "first_name": "Martin",
                "last_name": "Taylor",
                "email": "mtaylorf@usa.gov",
                "gender": "Male",
                "ip_address": "209.135.77.28"
            }, {
                "id": 17,
                "first_name": "Willie",
                "last_name": "Elliott",
                "email": "welliottg@people.com.cn",
                "gender": "Male",
                "ip_address": "203.217.236.165"
            }, {
                "id": 18,
                "first_name": "Wayne",
                "last_name": "Oliver",
                "email": "woliverh@ifeng.com",
                "gender": "Male",
                "ip_address": "254.157.194.111"
            }, {
                "id": 19,
                "first_name": "Robert",
                "last_name": "Green",
                "email": "rgreeni@discovery.com",
                "gender": "Male",
                "ip_address": "150.118.157.179"
            }, {
                "id": 20,
                "first_name": "Ernest",
                "last_name": "Hawkins",
                "email": "ehawkinsj@ucla.edu",
                "gender": "Male",
                "ip_address": "240.228.135.33",
                "active" : 1
            }, {
                "id": 21,
                "first_name": "Adam",
                "last_name": "Roberts",
                "email": "arobertsk@spiegel.de",
                "gender": "Male",
                "ip_address": "25.81.194.189"
            }, {
                "id": 22,
                "first_name": "Lori",
                "last_name": "Smith",
                "email": "lsmithl@slashdot.org",
                "gender": "Female",
                "ip_address": "67.131.137.52"
            }, {
                "id": 23,
                "first_name": "Henry",
                "last_name": "Perry",
                "email": "hperrym@state.tx.us",
                "gender": "Male",
                "ip_address": "12.126.117.120"
            }, {
                "id": 24,
                "first_name": "Kathleen",
                "last_name": "Morris",
                "email": "kmorrisn@list-manage.com",
                "gender": "Female",
                "ip_address": "157.200.17.216"
            }, {
                "id": 25,
                "first_name": "Maria",
                "last_name": "Gardner",
                "email": "mgardnero@cnn.com",
                "gender": "Female",
                "ip_address": "238.225.17.170"
            }, {
                "id": 26,
                "first_name": "Marilyn",
                "last_name": "Ross",
                "email": "mrossp@princeton.edu",
                "gender": "Female",
                "ip_address": "159.133.231.19"
            }, {
                "id": 27,
                "first_name": "Judith",
                "last_name": "Sullivan",
                "email": "jsullivanq@sphinn.com",
                "gender": "Female",
                "ip_address": "154.141.105.3"
            }, {
                "id": 28,
                "first_name": "Tina",
                "last_name": "Burton",
                "email": "tburtonr@noaa.gov",
                "gender": "Female",
                "ip_address": "176.156.26.122"
            }, {
                "id": 29,
                "first_name": "Robert",
                "last_name": "Bowman",
                "email": "rbowmans@cnn.com",
                "gender": "Male",
                "ip_address": "190.88.143.221"
            }, {
                "id": 30,
                "first_name": "William",
                "last_name": "Lee",
                "email": "wleet@list-manage.com",
                "gender": "Male",
                "ip_address": "209.136.18.233"
            }, {
                "id": 31,
                "first_name": "Kathy",
                "last_name": "Edwards",
                "email": "kedwardsu@pcworld.com",
                "gender": "Female",
                "ip_address": "13.78.239.8"
            }, {
                "id": 32,
                "first_name": "Rachel",
                "last_name": "Robinson",
                "email": "rrobinsonv@buzzfeed.com",
                "gender": "Female",
                "ip_address": "46.206.215.27",
                "active" : 1
            }, {
                "id": 33,
                "first_name": "Teresa",
                "last_name": "King",
                "email": "tkingw@abc.net.au",
                "gender": "Female",
                "ip_address": "128.207.102.106"
            }
            ];
        };

        this.listaPaises = function () {
            return [{id:1, nome:'Brasil'},
                {id:2, nome:'Alemanha' }];
        }
});