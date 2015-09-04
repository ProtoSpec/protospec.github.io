'use strict';

// Declare app level module which depends on views, and components
angular.module('personalSite', [
  'ui.router',

  'ngResource'
])

.factory('Portfolio',
  function($resource) {
    return $resource('json/portfolio.json', {}, {
      query: { method:'GET', isArray: true }
    });
  }
)

.controller('SiteWideCtrl',
  function($scope, $window, $location, Portfolio) {
    $scope.$on('$locationChangeStart', function(event) {
      $window.ga('send', 'pageview', { page: $location.url() });
    });
  }
)
.controller('PortfolioListCtrl',
  function($scope, Portfolio) {
    $scope.categories = Portfolio.query();

    $scope.toggle = function(category) {
      category.visible = !category.visible;
    };
  }
)
.controller('PortfolioDetailCtrl',
  function ($scope, $stateParams, Portfolio) {
    $scope.category = $stateParams.category;
    $scope.entryId = $stateParams.entryId;
    $scope.entries = Portfolio.query();
  }
)



.config(function($stateProvider, $urlRouterProvider) {

  // For any unmatched url, redirect to / (a.k.a. home)
  $urlRouterProvider.otherwise('/');

  // Now set up the states
  $stateProvider
    .state('home', {
      url: '',
      templateUrl: 'partials/home.html'
    })


    .state('not-home', {
      url: '',
      templateUrl: 'partials/not-home.html'
    })


    .state('not-home.resume', {
      url: '/resume',
      templateUrl: 'partials/resume.html'
    })


    .state('not-home.portfolio', {
      url: '/portfolio',
      templateUrl: 'partials/portfolio.html',
      controller: 'PortfolioListCtrl'
    })

    .state('not-home.portfolio.detail', {
      url: '/:category/:entryId',
      templateUrl: 'partials/portfolioEntry.html',
      controller: 'PortfolioDetailCtrl'
    });
});