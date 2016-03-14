angular.module('egenius').controller('addCtrl', function($scope, recursoImovel, cadastroDeImovel, $location) {

	$scope.imovel = {};
	$scope.mensagem = '';

	$scope.submit = function(){

		if ($scope.formulario.$valid) {

			cadastroDeImovel.cadastrar($scope.imovel)
				.then(function(dados) {
					$scope.mensagem = dados.mensagem;
					if(dados.inclusao) {
						$scope.imovel = {};
						console.log(dados);
					}
				})
				.catch(function(dados) {
					console.log(dados);
					$scope.mensagem = dados.mensagem;
				})

		} else {
			console.log('Invalido');
		};

	};

});