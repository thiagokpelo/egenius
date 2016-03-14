var egenius = angular.module('egenius', ['minhasDiretivas', 'ngRoute', 'meusServicos']);

	egenius.config(['$httpProvider', function($httpProvider) {
		delete $httpProvider.defaults.headers.common['X-Requested-With'];
		$httpProvider.defaults.headers.common['Accept'] = "application/json, text/plain, */*";
		$httpProvider.defaults.headers.post['WWW-Authorization'] = "egeniusfounders2016";
	}]);

	egenius.config(function($routeProvider) {

		$routeProvider.when('/', {
			templateUrl: 'partials/home.html',
			controller: 'egeniusCtrl'
		});

		$routeProvider.when('/imovel/add', {
			templateUrl: 'partials/add.html',
			controller: 'addCtrl'
		});

		$routeProvider.when('/imovel/:id', {
			templateUrl: 'partials/imovel.html',
			controller: 'imovelCtrl'
		});

		$routeProvider.otherwise({ redirectTo: '/'});
		
	});