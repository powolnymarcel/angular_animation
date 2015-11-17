// app.js
// Crée l'app angular et injecte ngAnimate et ui-router
// =============================================================================
var app = angular.module('animateApp', ['ngAnimate', 'ui.router']);

// app.js

// define our application and pull in ngRoute and ngAnimate
//var animateApp = angular.module('animateApp', ['ngRoute', 'ngAnimate']);

// ROUTING ===============================================
// set our routing for this application
// each route will pull in a different controller
app.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider

	// Route pour montrer le formulaire (/form)
		.state('accueil', {
			url: '/accueil',
			templateUrl: 'page-accueil.html',
			controller: 'accueilController'
		})

				.state('apropos', {
					url: '/apropos',
					templateUrl: 'page-a-propos.html',
					controller: 'aproposController'
				})
						.state('contact', {
							url: '/contact',
							templateUrl: 'page-contact.html',
							controller: 'contactController'
						})
							// Si aucunes routes ne correspond
							// envoie l'user au formulaire
							$urlRouterProvider.otherwise('/accueil');



});


// CONTROLLERS ============================================
// home page controller
app.controller('accueilController', function($scope) {
	$scope.pageClass = 'page-accueil';
});

// about page controller
app.controller('aproposController', function($scope) {
	$scope.pageClass = 'page-a-propos';
});

// contact page controller
app.controller('contactController', function($scope) {
	$scope.pageClass = 'page-contact';
});
