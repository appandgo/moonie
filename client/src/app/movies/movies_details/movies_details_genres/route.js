(function(){
    'use strict';

    function config($stateProvider) {
        $stateProvider
        .state('root.movieDetailsGenres',{
            url: '/movie/details/:id/genres',
            views: {
                '@': {
                    template: '<movie-details-genres-directive></movie-details-genres-directive>',
                }
            }
        });
    }

    angular.module('movie-details-genres', ['movieDetailsGenresDirective'])
    .config(config);
})();