(function(){
    'use strict';

    function config($stateProvider) {
        $stateProvider
        .state('root.movieDetails',{
            url: '/movie/details/:id',
            views: {
                '@': {
                    template: '<h1>Details</h1><movie-details-directive></movie-details-directive>',
                }
            }
        });
    }

    angular.module('movie-details', ['movieDetailsDirective'])
    .config(config);
})();