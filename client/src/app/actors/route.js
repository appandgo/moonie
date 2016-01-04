(function(){
    'use strict';

    function config($stateProvider) {
        $stateProvider
        .state('root.actorPopular',{
            url: '/actor',
            views: {
                '@': {
                    template: '<popular-actors-directive></popular-actors-directive>',
                }
            }
        });
    }

    angular.module('actor-popular', ['popularActorsDirective'])
    .config(config);
})();