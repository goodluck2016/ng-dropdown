/**
 * Example application for ng-dropdown (https://github.com/ianwalter/ng-dropdown)
 *
 * @author Ian Kennington Walter <ianwalter@fastmail.com>
 */
requirejs.config({
  baseUrl: '.',
  paths: {
    'angular': [
      '//ajax.googleapis.com/ajax/libs/angularjs/1.2.4/angular.min',
      'public/lib/angular/angular'
    ],
    'angular-route': [
      '//ajax.googleapis.com/ajax/libs/angularjs/1.2.4/angular-route.min',
      'public/lib/angular-route/angular-route.min'
    ],
    'ng-dropdown': [
      'dist/js/ng-dropdown'
    ]
  },
  shim: {
    'angular' : { exports: 'angular' },
    'angular-route': { deps: ['angular'] },
    'ng-dropdown': { deps: ['angular'] }
  }
});

require(['angular', 'angular-route', 'ng-dropdown'], function(angular) {
  'use strict';

  angular
    .module('ng-dropdown-demo', ['ngRoute', 'ng-dropdown'])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider
        .when(
          '/',
          {
            controller: 'HomeController',
            templateUrl: 'public/template/home.html',
            label: 'Home'
          }
        )
        .otherwise({ redirectTo: '/' });
    }])
    .controller('HomeController', [
      '$scope',
      'DropdownService',
      function($scope, DropdownService) {
        $scope.dropdownService = DropdownService;

        $scope.options = [
          'Option 1',
          'Option 2',
          'This is a really really long option called Option 3'
        ];

        $scope.optionsTwo = [
          'Cat Rider',
          'Klapp Klapp',
          'Pretty Girls',
          'Paris',
          'Only One',
          'Ritual Union',
          'Little Man',
          'Shuffle A Dream',
          'Crystalfilm',
          'Precious',
          'Summertearz',
          'Twice',
          'Recommendation',
          'Forever',
          'After The Rain',
          'Wink'
        ];

        $scope.optionsThree = [
          'Cash',
          'Rules',
          'Everything',
          'Around',
          'Me'
        ];

        $scope.selected = {
          one: $scope.options[0]
        };
      }
    ]);

  angular.bootstrap(document , ['ng-dropdown-demo']);
});
