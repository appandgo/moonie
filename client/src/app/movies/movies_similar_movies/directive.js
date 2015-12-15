(function() {
    'use strict';

    function movieSimilar() {
        return {
            restrict: 'EA', 
            replace: true,
            templateUrl: './src/app/movies/movies_details/template.html',
            scope: {},
            controllerAs: 'vm',
            bindToController: true,
            controller: function($log, MovieService, $stateParams) {
                var vm = this;
                MovieService.getOneMovie($stateParams.id)
                    .then(function(movie) {
                        vm.movie = movie;
                    })

            }            
        };
    }

angular.module('movieSimilarDirective', ['services.movie_similar'])
    .directive('movieSimilarDirective', movieSimilar);

})();