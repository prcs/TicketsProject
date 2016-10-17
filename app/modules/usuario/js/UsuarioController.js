/**
 * Created by Desenvolvimento on 06/08/2016.
 */
app.controller('UsuarioController', ['$scope', 'Srv', '$http' , 'Usuario', '$sessionStorage',
    function ($scope, Srv, $http, Usuario, $sessionStorage) {

        // var $scope = this;
        $scope.usuarios = Srv.listaUsuarios();

        $scope.paises = Srv.listaPaises();

        $scope.verificaClasseCss = function (status) {
            return status == 'Female' ? 'one' : 'two';
        };

        $scope.propertyName = 'first_name';
        $scope.reverse = false;

        $scope.sortBy = function(propertyName) {
            $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
            $scope.propertyName = propertyName;
        };

        $scope.submit = function () {
            Usuario.create({nome: $scope.user.nome}).$promise
                .then(function(todo) {
                    console.log('ok');
                });
        };

        $scope.usuario = $sessionStorage.usuario;
    }]);