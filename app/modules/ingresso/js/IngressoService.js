/**
 * Created by Desenvolvimento on 08/10/2016.
 */
app.service('IngressoService', function ($resource) {

    this.obterDadosEndereco = function (cep) {

        var endereco = {};
        var result = $resource('https://viacep.com.br/ws/'+cep+'/json/?callback=JSON_CALLBACK', { format: 'json', jsoncallback: 'JSON_CALLBACK' }, { 'load': { 'method': 'JSONP' } });
        result.load()
            .$promise.then(function(endereco_) {

            endereco.bairro = endereco_.bairro;
            endereco.complemento = endereco_.complemento;
            endereco.uf = endereco_.uf;
            endereco.cep = endereco_.cep;
            endereco.localidade = endereco_.localidade;
            endereco.logradouro = endereco_.logradouro;
           
        });
        return endereco;
    }
});