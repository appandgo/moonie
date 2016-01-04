(function() {
    'use strict';

    function likeComponent() {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './src/app/components/like/template.html',
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

angular.module('likeComponent', [])
    .directive('like', likeComponent);

})();