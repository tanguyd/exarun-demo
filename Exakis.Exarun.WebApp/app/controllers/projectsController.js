(function () {
    'use strict';

    var app = angular.module('app');

    app.controller('projectsController', ['$scope', 'projectSvc', function ($scope, projectSvc) {

        function loadData() {
            $scope.projects = projectSvc.getAll();
        };

        loadData();

    }]);

})();