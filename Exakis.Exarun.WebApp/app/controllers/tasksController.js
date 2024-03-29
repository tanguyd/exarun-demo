﻿(function () {
    'use strict';

    var app = angular.module('app');

    app.controller('tasksController', ['$scope', '$routeParams', 'taskSvc', 'projectSvc', function ($scope, $routeParams, taskSvc, projectSvc) {

        function loadData() {
            $scope.statuses = taskSvc.getStatuses();
            $scope.tasks = taskSvc.getByProjectId($routeParams.projectId);

            $scope.statuses.each(function(status) {
                var tasksInStatus = $scope.tasks.filter(function(task) {
                    return task.status === status.name;
                });
                status.tasks = tasksInStatus;
            });

        };

        $scope.sortableOptions = {
            placeholder: "app",
            connectWith: ".apps-container",
            update: function (e, ui) {
                $scope.$apply(function() {
                    var currentScope = ui.item.scope();
                    var targetScope = ui.item.sortable.droptarget.scope();
                    if (currentScope && targetScope) {
                        currentScope.task.status = targetScope.status.name;
                    }
                });
            }
        };

        $scope.setCurrentTask = function(taskId) {
            $scope.selectedTask = $scope.tasks.find(function(item) {
                return item.id === taskId;
            });
        };

        $scope.project = projectSvc.getById($routeParams.projectId);

        loadData();

    }]);

})();