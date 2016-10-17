/**
 * Created by Desenvolvimento on 10/09/2016.
 */
app.controller('abcController',['$scope', '$auth', '$sessionStorage', 'Usuario',
    function($scope, $auth, $sessionStorage, Usuario) {

        $scope.authenticate = function(provider) {
            $auth.authenticate(provider).then(function(response) {
                //Obtem o usuario logado
                Usuario.findOne({ id: $auth.getPayload().sub }).$promise.then(function(user) {
                    $sessionStorage.usuario = user;
                });
            });
        };


    $scope.teste = function() {
        console.log($auth.isAuthenticated());
    };
    $scope.sair1 = function() {
        $auth.logout();
        $sessionStorage.usuario = null;
    };

    }]);