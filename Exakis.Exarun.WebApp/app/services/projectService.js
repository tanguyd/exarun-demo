(function () {
    'use strict';

    var app = angular.module('app');

    app.factory('projectSvc', ['db', function (db) {

        var getAll = function () {
            return db.projects;
        };

        var getById = function(projectId) {
            return db.projects.find(function(p) {
                return p.id == projectId;
            });
        };

        return {
            getAll: getAll,
            getById: getById
        };

    }]);

})();