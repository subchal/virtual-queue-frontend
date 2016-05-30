'use strict';

/**
 * @ngdoc overview
 * @name virtualQueueFrontendApp
 * @description
 * # virtualQueueFrontendApp
 *
 * Main module of the application.
 */
angular
  .module('virtualQueueFrontendApp', [
    'ngResource',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('specialties', {
		url: '/',
		views: {
			'header': { templateUrl: 'views/header.html' },
			'content': { templateUrl: 'views/main.html', controller: 'MainCtrl' },
			'footer': { templateUrl: 'views/footer.html' }
		}
      })
	  .state('specialties.doctors', {
		url: 'specialties/:id/doctors',
		views: {
			'header': { templateUrl: 'views/header.html' },
			'content@': { templateUrl: 'views/doctors.html', controller: 'SpecialtyCtrl' },
			'footer': { templateUrl: 'views/footer.html' }
		}
      })
	  .state('specialties.doctors.patients', {
		url: '/:drid',
		views: {
			'header': { templateUrl: 'views/header.html' },
			'content@': { templateUrl: 'views/patients.html', controller: 'DoctorCtrl' },
			'footer': { templateUrl: 'views/footer.html' }
		}
      })
	  .state('about', {
		url: '/about',
		views: {
			'header': { templateUrl: 'views/header.html' },
			'content': { templateUrl: 'views/about.html', controller: 'AboutCtrl' },
			'footer': { templateUrl: 'views/footer.html' }
		}
      });
	  $urlRouterProvider.otherwise('/');
  });
