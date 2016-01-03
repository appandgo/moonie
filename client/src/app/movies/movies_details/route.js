(function(){
    'use strict';

    function config($stateProvider) {
        $stateProvider
        .state('root.movieDetails',{
            url: '/movie/details/:id',
            views: {
                '@': {
<<<<<<< HEAD
                    template: '<h1>Details</h1><movie-details-directive></movie-details-directive>',
||||||| merged common ancestors
                    template: '<h1>details</h1><movie-details-directive></movie-details-directive>',
=======
                    template: '<movie-details-directive></movie-details-directive>',
>>>>>>> dev_lea
                }
            }
        });
    }

    angular.module('movie-details', ['movieDetailsDirective'])
    .config(config);
})();