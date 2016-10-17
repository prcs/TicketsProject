/**
 * Created by Desenvolvimento on 06/08/2016.
 */
angular.module('Services', []);
var app = angular.module('PetModule', ['Services', 'lbServices', 'ngRoute', 'satellizer', 'ngResource', 'naif.base64'])
    .config(['$routeProvider', '$authProvider', function($routeProvider, $authProvider) {

        $routeProvider.when('/fotos', {
            templateUrl: 'modules/usuario/view/user.html'
        });

        $routeProvider.when('/logado', {
            templateUrl: 'modules/abc/view/logado.html',
            controller: 'abcController'
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
            templateUrl: 'modules/abc/view/login.html',
            controller: 'abcController'
        });

        $routeProvider.when('/adicionarIngresso', {
            templateUrl: 'modules/ingresso/view/adicionarIngresso.html',
            controller: 'IngressoController'
        });

        $routeProvider.when('/procurarIngresso', {
            templateUrl: 'modules/ingresso/view/procurarIngresso.html',
            controller: 'IngressoController',
            buscar: true
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

app.directive('errSrc', function() {
    return {
        link: function(scope, element, attrs) {
            console.log(attrs);
            // element.bind('error', function() {
            //     if (attrs.ngSrc == undefined) {
            //         console.log('ubdefined');
            //         attrs.$set('ngSrc', attrs.errSrc);
            //     }
            // });
            attrs.$set('src', 'https://afterdark.co/assets/images/frontpage/icon_buy_tickets.png');
        }
    }
});