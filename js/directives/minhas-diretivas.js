angular.module('minhasDiretivas', [])
	.directive('formContato', function() {
		var ddo = {};
		ddo.restrict = "E";
		ddo.transclude = true;
		ddo.templateUrl = "js/directives/form-contato.html";
		return ddo;
	})