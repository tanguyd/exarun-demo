(function () {
    'use strict';

    var app = angular.module('app');

    //app.filter('statusFilter', function () {
    //    return function (input, status) {
    //        var filtered = [];
    //        angular.forEach(input, function (item) {
    //            if (!item.status) {
    //                console.log(item);
    //            }
    //            if (item.status === status.name) {
    //                filtered.push(item);
    //            }
    //        });
    //        return filtered;
    //    };
    //});

    app.controller('tasksController', ['$scope', '$routeParams', 'taskSvc', function($scope, $routeParams, taskSvc) {

            function loadData() {
                $scope.statuses = taskSvc.getStatuses();
                $scope.tasks = taskSvc.getByProjectId($routeParams.projectId);
            };

            loadData();
        }
    ]);


})();