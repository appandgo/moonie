(function() {
    'use strict';

    function appFooterComponent() {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './src/app/components/app-footer/template.html',
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

angular.module('appFooterComponent', [])
    .directive('appFooter', appFooterComponent);

})();