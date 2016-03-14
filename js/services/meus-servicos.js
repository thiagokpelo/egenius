angular.module('meusServicos', ['ngResource'])
	.factory('recursoImovel', function($resource) {

		return $resource('http://demo3292918.mockable.io/anuncio/:id',
			{id: '@id'},
			{'query': {method:'GET', isArray:false, cache:false}},
			{'get': {method:'GET', isArray:false, cache:false}},
			{'save': {method:'POST', isArray:false, cache:false}}
		);
	})
	.factory('cadastroDeImovel', function(recursoImovel, $q, $rootScope) {

		var servico = {};
		var evento = 'imovelCadastrado';

		servico.cadastrar = function(imovel) {

			return $q(function(resolve, reject) {

				recursoImovel.save(imovel, function(data) {
					$rootScope.$broadcast(evento);
					console.log(data);
					resolve({
						mensagem: 'Imóvel cadastrado com sucesso',
						inclusao: true
					});
				}, function(erro) {
					console.log(erro);
					reject({
						mensagem: 'Não foi possível incluir o imvóvel.'
					});
				});
			});
		};

		return servico;
	});