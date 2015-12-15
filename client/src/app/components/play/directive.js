(function() {
    'use strict';

    function playComponent() {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './src/app/components/play/template.html',
            scope: {},
            controllerAs: 'vm',
            bindToController: true,
            /* jshint unused:false*/
            controller: function($log) {
                var vm=this;
            },
            link: function(scope, elm, attrs){

            }
        };
    }

angular.module('playComponent', [])
    .directive('play', playComponent);

})();