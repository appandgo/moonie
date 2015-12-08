(function() {
    'use strict';

    function movieDetails() {
        return {
            restrict: 'EA', 
            replace: true,
            templateUrl: './src/app/movies/movies_details/template.html',
            scope: {},
            controllerAs: 'vm',
            controller: function($log, MovieService, $stateParams) {
                var vm = this;
                MovieService.getOneMovie($stateParams.id)
                    .then(function(movie) {
                        vm.movie = movie;
                    })

            }            
        };
    }

angular.module('movieDetailsDirective', ['services.movie_details'])
    .directive('movieDetailsDirective', movieDetails);

})();