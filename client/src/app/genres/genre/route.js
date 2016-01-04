(function(){
    'use strict';

    function config($stateProvider) {
        $stateProvider
        .state('root.moviePopular',{
            url: '/movies/popular',
            views: {
                '@': {
                    template: '<popular-movies-directive></popular-movies-directive>',
                }
            }
        });
    }

    angular.module('movie-popular', ['popularMoviesDirective'])
    .config(config);
})();