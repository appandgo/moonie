(function() {
    'use strict';

    function movieGenre() {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './src/app/genres/allMoviesByGenre/template.html',
            scope: {},
            controllerAs: 'vm',
            bindToController: true,
            /* jshint unused:false*/
            controller: function($log, movieGenreService, $stateParams) {
                var vm=this;
                vm.nameGenre=$stateParams.nameGenre;
                movieGenreService.getMovies($stateParams.id)
                    .then(function(movies) {

                        console.log('movies in directives :',movies.data);
                        vm.movies = movies.data.results;

                    }, function(error){
                        $log.error('Error here', error);
                    });
                
            },
            link: function(scope, elm, attrs){
            }
        };
    }

angular.module('movieGenreDirective', ['services.genres'])
    .directive('movieGenreDirective', movieGenre);

})();