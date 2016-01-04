(function() {
    'use strict';

    function popularActors() {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './src/app/actors/template.html',
            scope: {},
            controllerAs: 'vm',
            bindToController: true,
            /* jshint unused:false*/
            controller: function($log, PopularActorService) {
                var vm=this;
                PopularActorService.getActor()
                    .then(function(actors) {
                        console.log('Actors in directives :',actors.data.results);
                        vm.actors = actors.data.results;

                    }, function(error){
                        $log.error('Error actors', error);
                    });
                
            },
            link: function(scope, elm, attrs){
            }
        };
    }

angular.module('popularActorsDirective', ['services.actor'])
    .directive('popularActorsDirective', popularActors);

})();