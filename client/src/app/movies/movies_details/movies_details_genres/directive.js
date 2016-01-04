(function() {
    'use strict';

    function movieDetailsGenres() {
        return {
            restrict: 'EA', 
            replace: true,
            templateUrl: './src/app/movies/movies_details/movies_details_genres/template.html',
            scope: {},
            controllerAs: 'vm',
            controller: function($log, MovieDetailsGenresService, $stateParams) {
                var vm = this;
                MovieDetailsGenresService.getOneMovie($stateParams.id)
                    .then(function(movie) {
                        vm.movie = movie;
                    })

            }            
        };
    }

angular.module('movieDetailsGenresDirective', ['services.movie_details_genres'])
    .directive('movieDetailsGenresDirective', movieDetailsGenres);

})();