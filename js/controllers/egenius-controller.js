angular.module('egenius').controller('egeniusCtrl', function($scope, recursoImovel) {

	$scope.imoveis = [];
	$scope.filtro = '';

	recursoImovel.query(function(data) {
		$scope.imoveis = data.results;
	}, function(erro) {
		console.log('Error: ' + JSON.stringify(erro));
	});
});