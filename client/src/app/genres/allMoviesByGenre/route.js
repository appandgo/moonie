(function(){
    'use strict';

    function config($stateProvider) {
        $stateProvider
        .state('root.movieGenre',{
            url: '/movies/genre/:id/:nameGenre',
            views: {
                '@': {
                    template: '<movie-genre-directive></popular-movies-directive>',
                }
            }
        });
    }

    angular.module('movie-genre', ['movieGenreDirective'])
    .config(config);
})();