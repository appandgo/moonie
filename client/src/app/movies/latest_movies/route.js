(function(){
    'use strict';

    function config($stateProvider) {
        $stateProvider
        .state('root.movieLatest',{
            url: '/movies/latest',
            views: {
                '@': {
                    template: '',
                }
            }
        });
    }

    angular.module('movie-latest', [])
    .config(config);
})();