(function(){
    'use strict';

    function config($stateProvider) {
        $stateProvider
        .state('root.tvShows', {
            url: '/tv-shows',
            views: {
                '@': {
                    template: '<popular-tv-shows-directive></popular-tv-shows-directive>',
                    controller: function(TVgenres){
                        console.log(TVgenres);
                    }
                }
            },
            resolve:{
                TVgenres : function(tvShowsService) {
                    tvShowsService.getTVGenres()
                    .then(function(result) {
                        return result;
                    })
                }
            },            
        });
    }

    angular.module('tvShows',['popularTvShowsDirective','services.tvShows'])
    .config(config);
})();