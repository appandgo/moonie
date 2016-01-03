(function(){
    'use strict';

    function config($stateProvider) {
        $stateProvider
        .state('root.actorDetails',{
            url: '/actor/:id',
            views: {
                '@': {
                    template: '<actor-details-directive></actor-details-directive>',
                }
            }
        });
    }

    angular.module('actor-details', ['actorDetailsDirective'])
    .config(config);
})();