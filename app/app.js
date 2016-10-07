/**
 * Created by Desenvolvimento on 06/08/2016.
 */
angular.module('Services', []);
var app = angular.module('PetModule', ['Services', 'lbServices', 'ngRoute', 'satellizer'])
    .config(['$routeProvider', '$authProvider', function($routeProvider, $authProvider) {

    $routeProvider.when('/fotos', {
        templateUrl: 'modules/usuario/view/user.html'
    });

        $routeProvider.when('/logado', {
            templateUrl: 'modules/login/view/logado.html'
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
        templateUrl: 'modules/login/view/login.html'
    });

    $routeProvider.otherwise({redirectTo: '/fotos'});

        $authProvider.loginUrl = 'http://localhost:3000/auth/login';
        $authProvider.signupUrl = 'http://localhost:3000/auth/signup';

        $authProvider.facebook({
            clientId: '969954166446976',
            url: 'http://localhost:3000/auth/facebook',
            redirectUri: 'http://localhost:3000/',
            scope: ['email']
        });

    }]);