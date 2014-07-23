(function() {
    'use strict';

    var app = angular.module('app');

    app.directive('postIt', function () {
        var linker = function(scope, element, attrs) {
        };

        return {
            restrict: 'E',
            link: linker,
            scope: {
              task: '='  
            },
            templateUrl: '/app/templates/partials/postIt.html'
        };
    });

})();