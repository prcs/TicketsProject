/**
 * Created by Desenvolvimento on 06/08/2016.
 */
app.controller('IngressoController', ['$scope', 'IngressoService', '$http' , 'Ingresso', '$resource', '$auth', 'Usuario',
    '$route',
    function ($scope, IngressoService, $http, Ingresso, $resource, $auth, Usuario, $route) {

        $scope.ingresso = {};
        //Obtem o usuario logado
        Usuario.findOne({ id: $auth.getPayload().sub }).$promise.then(function(user) {
            $scope.ingresso._usuario = {"nome" : user.displayName, "id" : user.id};
            console.log($scope.ingresso);
        });

        //Adiciona o ingresso
        $scope.adicionar = function () {

            $scope.ingresso.dataInclusao = new Date();
            $scope.ingresso.dataIngresso = $scope.dataIngresso;
            //Verifica se os dados do CEP estao preenchidos
            if($scope.endereco == 'undfined' || $scope.endereco == null){
                console.log('erro');
            }else{
                $scope.ingresso._endereco = $scope.endereco;
            }

            if($scope.foto){
                //Insere a foto
                var foto = {};
                foto.bites = $scope.foto.base64;
                foto.nome = $scope.foto.filename;
                $scope.ingresso._foto = foto;
                console.log($scope.ingresso);
            }

            //Insere o ingresso
            Ingresso.create($scope.ingresso).$promise
                .then(function (data) {
                    $scope.sucesso = true;
                }).catch(function (data) {
                console.log(data);
            });
        };

        //Obtem os dados referentes ao CEP
        $scope.buscarCep = function(cep){
            $scope.endereco = IngressoService.obterDadosEndereco(cep);
        };

        if($route.current.$$route.buscar){
            $scope.ingressosResult = Ingresso.find({"filter": {
                "where": {"ativo": true},
                "include": ["foto", "usuario", "endereco"]
            }});
        }

    }]);