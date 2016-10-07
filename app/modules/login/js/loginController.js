/**
 * Created by Desenvolvimento on 10/09/2016.
 */
app.controller('LoginCtrl', function($scope, $auth) {

        $scope.authenticate = function(provider) {
            $auth.authenticate(provider).then(function(response) {
                console.log(response);
            });
        };

    // Controller
    $scope.link = function(provider) {
        $auth.link(provider)
            .then(function(response) {
                console.log(response);
            })
            .catch(function(response) {
                // Handle errors here.
            });
    };
    $scope.unlink = function(provider) {
        $auth.unlink('facebook')
            .then(function(response) {
                // You have unlinked a GitHub account.
            })
            .catch(function(response) {
                // Handle errors here.
            });
    };
    $scope.teste = function() {
        console.log($auth.isAuthenticated());
    };

    });