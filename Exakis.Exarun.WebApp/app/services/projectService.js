(function () {
    'use strict';

    var app = angular.module('app');

    app.factory('projectSvc', ['db', function (db) {

        var getAll = function () {
            return db.projects;
        };

        return {
            getAll: getAll
        };

    }]);

})();