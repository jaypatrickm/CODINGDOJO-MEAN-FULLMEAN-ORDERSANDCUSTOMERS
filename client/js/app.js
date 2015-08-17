//=======================================================
//APP.JS -- orderscustomersModule stores angular app 'myApp'
//=======================================================
var orderscustomersModule = angular.module('myApp', ['ngRoute']);

orderscustomersModule.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/orders.html'
	})
	.when('/customers', {
		templateUrl: 'partials/customers.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});