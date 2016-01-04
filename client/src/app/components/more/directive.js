(function() {
    'use strict';

    function moreComponent() {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './src/app/components/more/template.html',
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

angular.module('moreComponent', [])
    .directive('more', moreComponent);

})();