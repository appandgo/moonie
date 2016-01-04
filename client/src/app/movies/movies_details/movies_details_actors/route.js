(function(){
    'use strict';

    function config($stateProvider) {
        $stateProvider
        .state('root.movieDetailsCredits',{
            url: '/movie/details/:id/credits',
            views: {
                '@': {
                    template: '<movie-details-credits-directive></movie-details-credits-directive>',
                }
            }
        });
    }

    angular.module('movie-details-credits', ['movieDetailsCreditsDirective'])
    .config(config);
})();