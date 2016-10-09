/**
 * Created by Desenvolvimento on 06/08/2016.
 */
app.controller('IngressoController', ['$scope', 'IngressoService', '$http' , 'Ingresso', '$resource', '$auth', 'Usuario',
    function ($scope, IngressoService, $http, Ingresso, $resource, $auth, Usuario) {

        $scope.ingresso = {};

        Usuario.findOne({ id: $auth.getPayload().sub }).$promise.then(function(user) {
            $scope.ingresso._usuario = {"nome" : user.displayName, "id" : user.id};
            console.log($scope.ingresso);
        });
        $scope.adicionar = function () {

            if($scope.endereco == 'undfined' || $scope.endereco == null){
                console.log('erro');
            }else{
                $scope.ingresso._endereco = $scope.endereco;
            }

            Ingresso.create($scope.ingresso).$promise.catch(function (data) {
                console.log(data);
            });
        };

        $scope.buscarCep = function (cep) {

            console.log($auth.getPayload());
            $scope.endereco = {};
           var result = $resource('https://viacep.com.br/ws/'+cep+'/json/?callback=JSON_CALLBACK', { format: 'json', jsoncallback: 'JSON_CALLBACK' }, { 'load': { 'method': 'JSONP' } });
            result.load()
                .$promise.then(function(endereco_) {

                    $scope.endereco.bairro = endereco_.bairro;
                    $scope.endereco.complemento = endereco_.complemento;
                    $scope.endereco.uf = endereco_.uf;
                    $scope.endereco.cep = endereco_.cep;
                    $scope.endereco.localidade = endereco_.localidade;
                    $scope.endereco.logradouro = endereco_.logradouro;
                    console.log(endereco_);
                });

        }


}]);