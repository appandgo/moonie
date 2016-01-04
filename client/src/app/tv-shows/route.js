(function(){
    'use strict';

    function config($stateProvider) {
        $stateProvider
        .state('root.tvShows', {
            url: '/tv-shows',
            views: {
                '@': {
                    template: '<popular-tv-shows-directive></popular-tv-shows-directive>',
    
                }
            },
           
        });
    }

    angular.module('tvShows',['popularTvShowsDirective','services.tvShows'])
    .config(config);
})();