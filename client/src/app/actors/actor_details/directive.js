(function() {
    'use strict';

    function actorDetails() {
        return {
            restrict: 'EA', 
            replace: true,
            templateUrl: './src/app/actors/actor_details/template.html',
            scope: {},
            controllerAs: 'vm',
            controller: function($log, ActorDetailsService, $stateParams) {
                var vm = this;
                ActorDetailsService.getOneActor($stateParams.id)
                    .then(function(actor) {
                        vm.actor = actor;
                    })

            }            
        };
    }

angular.module('actorDetailsDirective', ['services.actor_details'])
    .directive('actorDetailsDirective', actorDetails);

})();