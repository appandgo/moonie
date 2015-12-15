(function(){
    'use strict';

    function config($stateProvider) {
    	$stateProvider.state('root.movies', {
            url: '/movies',
            views: {
                '@': {
                    template: '<movies-directive></movies-directive>',
                }
            }
        });
    }

    angular.module('movie', ['popularMoviesDirective'])
    .config(config);
})();