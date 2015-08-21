angular.module('app.routes', ['ngRoute'])

.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when('/', {
		templateUrl : 'app/views/pages/home.html',
		controller : 'homeController',
		controllerAs : 'home'
	})

	.when('/requests', {
		templateUrl : 'app/views/pages/requests.html',
		controller : 'requestController',
		controllerAs : 're'
	})

	.when('/requests/create', {
		templateUrl : 'app/views/pages/request-create.html',
		controller : 'requestController',
		controllerAs : 're'
	})

	$locationProvider.html5Mode(true);
});
