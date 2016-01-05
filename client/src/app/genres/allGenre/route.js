(function(){
    'use strict';

    function config($stateProvider) {
        $stateProvider
        .state('root.allGenre',{
            url: '/genres',
            views: {
                '@': {
                    template: '<all-genre-directive></all-genre-directive>',
                }
            }
        });
    }

    angular.module('all-genre', ['allGenreDirective'])
    .config(config);
})();