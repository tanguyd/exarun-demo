(function () {

    var app = angular.module('app');

    app.factory('db', function () {

        var statuses = [
            { name: 'To Do' },
            { name: 'In Progress' },
            { name: 'Code Review' },
            { name: 'QA Review' },
            { name: 'Verified' }
        ];

        var projects = [
            { id: 1, name: 'Migration Management Tool' },
            { id: 2, name: 'Exocet', },
            { id: 3, name: 'Score', },
            { id: 4, name: 'Laser', }
        ];

        var tasks = [
            { id: 1, projectId: 1, status: 'To Do', name: 'Task 1_1' },
            { id: 2, projectId: 1, status: 'To Do', name: 'Task 1_2' },
            { id: 3, projectId: 1, status: 'In Progress', name: 'Task 1_3' },
            //{ id: 40, projectId: 1, status: 'To Do', name: 'Task 1_3' },
            //{ id: 50, projectId: 1, status: 'To Do', name: 'Task 1_3' },
            //{ id: 30, projectId: 1, status: 'To Do', name: 'Task 1_3' },
            //{ id: 35, projectId: 1, status: 'To Do', name: 'Task 1_3' },
            //{ id: 36, projectId: 1, status: 'To Do', name: 'Task 1_3' },

            { id: 4, projectId: 2, status: 'To Do', name: 'Task 2_1' },
            { id: 5, projectId: 2, status: 'To Do', name: 'Task 2_2' },
            { id: 6, projectId: 2, status: 'In Progress', name: 'Task 2_3' },

            { id: 7, projectId: 3, status: 'To Do', name: 'Task 3_1' },
            { id: 8, projectId: 3, status: 'To Do', name: 'Task 3_2' },
            { id: 9, projectId: 3, status: 'In Progress', name: 'Task 3_3' },

            { id: 10, projectId: 4, status: 'To Do', name: 'Task 4_1' },
            { id: 11, projectId: 4, status: 'To Do', name: 'Task 4_2' },
            { id: 12, projectId: 4, status: 'In Progress', name: 'Task 4_3' }
        ];

        return {
            statuses: statuses,
            projects: projects,
            tasks: tasks
        };

    });



})();