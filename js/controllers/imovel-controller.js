angular.module('egenius').controller('imovelCtrl', function($scope, recursoImovel, $routeParams) {

	$scope.imovel = {};
	$scope.mensagem = '';

	if ($routeParams.id) {
		recursoImovel.get(function(data) {
			$scope.imovel = data.results[$routeParams.id -1];
			console.log(data);
		}, function(erro) {
			console.log('Error: ' + JSON.stringify(erro));
			$scope.mensagem = 'Não foi possível obter a foto';
		});
	};

	console.log($routeParams.id);
});