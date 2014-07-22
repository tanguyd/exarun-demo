(function () {

    var app = angular.module('app');

    app.directive('sortable', function (taskSvc) {
        var linker = function (scope, element, attrs) {
            var status = scope.status.name;

            element.sortable({
                items: 'li',
                connectWith: ".list",
                receive: function (event, ui) {
                    //var prevScope = angular.element(ui.item.prev()).scope();
                    var curScope = angular.element(ui.item).scope();

                    scope.$apply(function () {
                        //taskSvc.insertTaskAfter(curScope.task, prevScope.task);
                        curScope.task.status = status; // Update the status
                    });

                }
            });
        };

        return {
            restrict: 'A',
            link: linker,
        };
    });

})();

