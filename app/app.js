/**
 * Created by Desenvolvimento on 06/08/2016.
 */
angular.module('Services', []);
var app = angular.module('PetModule', ['Services', 'lbServices', 'ngRoute'])
    .config(function($routeProvider) {

    $routeProvider.when('/fotos', {
        templateUrl: 'modules/usuario/view/user.html'
    });

    $routeProvider.when('/fotos/new', {
        templateUrl: 'partials/foto.html',
        controller: 'FotoController'
    });

    $routeProvider.when('/fotos/edit/:fotoId', {
        templateUrl: 'partials/foto.html',
        controller: 'FotoController'
    });

    $routeProvider.when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'LoginController'
    });

    $routeProvider.otherwise({redirectTo: '/fotos'});

});