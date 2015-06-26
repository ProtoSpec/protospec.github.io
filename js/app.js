'use strict';

// Declare app level module which depends on views, and components
angular.module('personalSite', [
  'ui.router',

  'ngResource'
])

.factory('Portfolio', ['$resource',
  function($resource) {
    return $resource('json/portfolio.json', { cache: true }, {
      query: { method:'GET', isArray: true }
    });
  }]
)

.controller('PortfolioListCtrl', ['$scope', 'Portfolio',
  function($scope, Portfolio) {
    $scope.entries = Portfolio.query();
  }]
)
.controller('PortfolioDetailCtrl', ['$scope', '$stateParams', 'Portfolio',
  function ($scope, $stateParams, Portfolio) {
    $scope.entryId = $stateParams.entryId;
    $scope.entries = Portfolio.query();
  }]
)



.config(function($stateProvider, $urlRouterProvider) {

  // For any unmatched url, redirect to / (a.k.a. home)
  $urlRouterProvider.otherwise("/");

  // Now set up the states
  $stateProvider
    .state('home', {
      url: "",
      templateUrl: "partials/home.html"
    })


    .state('not-home', {
      url: "",
      templateUrl: "partials/not-home.html"
    })


    .state('not-home.resume', {
      url: "/resume",
      templateUrl: "partials/resume.html"
    })


    .state('not-home.portfolio', {
      url: "/portfolio",
      templateUrl: "partials/portfolio.html",
      controller: 'PortfolioListCtrl'
    })

    .state('not-home.portfolio.detail', {
      url: "/:entryId",
      templateUrl: "partials/portfolioEntry.html",
      controller: 'PortfolioDetailCtrl'
    });
});