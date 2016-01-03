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
            controller: function($log, PopularMovieService) {
                var vm=this;
                PopularMovieService.getMovie()
                    .then(function(movies) {
                        console.log('Movies in directives :',movies.data.results);
                        vm.movies = movies.data.results;

                    }, function(error){
                        $log.error('Error here', error);
                    });
                
            },
            link: function(scope, elm, attrs){
            }
        };
    }

angular.module('popularMoviesDirective', ['services.movie'])
    .directive('popularMoviesDirective', popularMovies);

})();