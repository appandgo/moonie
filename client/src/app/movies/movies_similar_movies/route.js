(function(){
    'use strict';

    function config($stateProvider) {
        $stateProvider
        .state('root.movieDetails',{
            url: '/movie/details/:id',
            views: {
                '@': {
                    template: '<movie-details-directive></movie-details-directive>',
                }
            }
        });
    }

    angular.module('movie-details', ['movieDetailsDirective'])
    .config(config);
})();