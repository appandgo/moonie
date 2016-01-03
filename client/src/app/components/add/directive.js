(function() {
    'use strict';

    function addComponent() {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './src/app/components/add/template.html',
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

angular.module('addComponent', [])
    .directive('add', addComponent);

})();