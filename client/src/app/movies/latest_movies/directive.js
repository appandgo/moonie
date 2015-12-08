(function() {
    'use strict';

    function latestMovies() {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './src/app/movies/latest_movies/template.html',
            scope: {},
            controllerAs: 'vm',
            bindToController: true,
            /* jshint unused:false*/
            controller: function($log, MovieService, $stateParams) {
                var vm = this;
                MovieService.getOneMovie($stateParams.id)
                    .then(function(movie) {
                        vm.movie = movie;
                    })

            }            ,
            link: function(scope, elm, attrs){
            }
        };
    }

angular.module('movieLatest', ['services.latest_movies'])
    .directive('latestMoviesDirective', latestMovies);

})();