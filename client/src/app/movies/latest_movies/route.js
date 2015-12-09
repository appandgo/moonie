(function(){
    'use strict';

    function config($stateProvider) {
        $stateProvider
        .state('root.movieLatest',{
            url: '/movies/latest',
            views: {
                '@': {
                    template: '<latest-movies></latest-movies>',
                }
            }
        });
    }

    angular.module('movie-latest', ['latestMovies'/*, 'movie-latest'*/])
    .config(config);
})();

