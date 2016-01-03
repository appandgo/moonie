(function(){
    'use strict';

    function config($stateProvider) {
        $stateProvider
        .state('root.topRatedMovies',{
            url: '/movies/TopRated',
            views: {
                '@': {
                    template: '<top-rated-movies-directive></top-rated-movies-directive>',
                }
            }
        });
    }

    angular.module('top-rated-movie', ['topRatedMoviesDirective'])
    .config(config);
})();