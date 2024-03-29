﻿(function () {
    'use strict';

    var app = angular.module('app', [
        // Angular built-in module
        'ngRoute',
        'ngAnimate',

        // Other angular module
        'ui.sortable'
    ]);

    app.config(function ($routeProvider) {
        // Routes Configuration
        $routeProvider
            .when('/projects', {
                templateUrl: 'app/templates/views/projects.html'
            })
            .when('/tasks/:projectId', {
                templateUrl: 'app/templates/views/tasks.html'
            })
            .otherwise({ redirectTo: '/projects' });
    });

    // Main App Controller
    app.controller('appController', ['$scope', function ($scope) {

        $scope.title = "ExaBoard";

    }]);

})();