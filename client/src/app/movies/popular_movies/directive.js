(function() {
    'use strict';

    function popularMovies() {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './src/app/movies/popular_movies/template.html',
            scope: {},
            controllerAs: 'vm',
            bindToController: true,
            /* jshint unused:false*/
            controller: function($log, MovieService) {
                var vm=this;
                MovieService.getMovie()
                    .then(function(movies) {
                        console.log('Popular Movies :',movies.data.results);
                        vm.movies = movies.data.results;
                    }
                    );
                MovieService.getOneMovie()
                    .then(function(movie) {
                        vm.myMovie = movie;
                    })
            },
            link: function(scope, elm, attrs){
            }
        };
    }

angular.module('popularMoviesDirective', ['services.movie'])
    .directive('popularMoviesDirective', popularMovies);

})();