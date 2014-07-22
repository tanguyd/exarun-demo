(function () {
    'use strict';

    var app = angular.module('app', [
        // Angular built-in module
        'ngRoute'
    ]);

    app.config(function ($routeProvider) {
        // Routes Configuration
        $routeProvider
            .when('/projects', {
                templateUrl: 'app/projects/projects.html'
            })
            .when('/tasks/:projectId', {
                templateUrl: 'app/tasks/tasks.html'
            })
            .otherwise({ redirectTo: '/projects' });
    });

    // Main App Controller
    app.controller('appController', ['$scope', function ($scope) {

        $scope.title = "ExaBoard";

    }]);

})();