(function () {
    'use strict';

    var app = angular.module('app');

    app.factory('taskSvc', ['db', function (db) {

        var getAll = function () {
            return db.tasks;
        };

        var getByProjectId = function(projectId) {
            return $.grep(db.tasks, function(item) {
                return item.projectId == projectId;
            });
        };

        var getStatuses = function() {
            return db.statuses;
        };

        var insertTaskAfter = function (task, prevTask) {
            db.tasks = db.tasks.remove(function (t) {
                return t['id'] == task.id;
            });

            db.tasks = db.tasks.add(task, db.tasks.findIndex(prevTask) + 1);
        };

        return {
            getAll: getAll,
            getByProjectId: getByProjectId,
            getStatuses: getStatuses,
            insertTaskAfter: insertTaskAfter
        };

    }]);

})();