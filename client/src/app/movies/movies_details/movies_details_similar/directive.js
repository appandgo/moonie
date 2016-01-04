(function() {
    'use strict';

    function movieDetailsSimilar() {
        return {
            restrict: 'EA', 
            replace: true,
            templateUrl: './src/app/movies/movies_details/movies_details_similar/template.html',
            scope: {},
            controllerAs: 'vm',
            controller: function($log, MovieDetailsSimilarService, $stateParams) {
                var vm = this;

                MovieDetailsSimilarService.getMovie($stateParams.id)
                    .then(function(movies) {
                        console.log('Similar Movies :',movies.data.results);
                        vm.movies = movies.data.results;

                        /* Get a specific movie */
                        (vm.movies).forEach(function showOneMovie(value, index, array){
                            MovieDetailsSimilarService.getOneMovie(value.id)
                            .then(function(oneMovie) {
                                //vm.movies.texte = oneMovie.original_title;
                                
                                vm.oneMovie = oneMovie;
                                vm.oneMovie.texte = oneMovie.original_title;
                                vm.oneMovie.image = oneMovie.poster_path;
                                $log.info('oneMovie', oneMovie);
                            },function(error){
                                $log.error('Error', error);
                            })
                        });


                    })

                MovieDetailsSimilarService.getOneMovie($stateParams.id)
                    .then(function(movie) {
                        console.log('one movie :',movie);
                        vm.movie = movie;
                    }, function(error){
                        $log.error('Error here on one movie ', error);
                    });

            }            
        };
    }

angular.module('movieDetailsSimilarDirective', ['services.movie_details_similar'])
    .directive('movieDetailsSimilarDirective', movieDetailsSimilar);

})();