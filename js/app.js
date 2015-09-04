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
    $scope.categories = Portfolio.query();
    $scope.toggle = function(category) {
      category.visible = !category.visible;
      console.log(category.visible);
    };
  }]
)
.controller('PortfolioDetailCtrl', ['$scope', '$stateParams', 'Portfolio',
  function ($scope, $stateParams, Portfolio) {
    $scope.category = $stateParams.category;
    $scope.entryId = $stateParams.entryId;
    $scope.entries = Portfolio.query();
  }]
)



.config(function($stateProvider, $urlRouterProvider) {

  // For any unmatched url, redirect to / (a.k.a. home)
  // $urlRouterProvider.otherwise("/");

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
      url: "/:category/:entryId",
      templateUrl: "partials/portfolioEntry.html",
      controller: 'PortfolioDetailCtrl'
    });
});