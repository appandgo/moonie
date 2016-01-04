(function(){
    'use strict';

    function config($stateProvider) {
        $stateProvider
        .state('root.movieDetailsSimilar',{
            url: '/movie/details/:id/similar',
            views: {
                '@': {
                    template: '<movie-details-similar-directive></movie-details-similar-directive>',
                }
            }
        });
    }

    angular.module('movie-details-similar', ['movieDetailsSimilarDirective'])
    .config(config);
})();