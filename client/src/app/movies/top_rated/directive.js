(function() {
    'use strict';

    function topRatedMoviesDirective() {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './src/app/movies/top_rated/template.html',
            scope: {},
            controllerAs: 'vm',
            bindToController: true,
            /* jshint unused:false*/
            controller: function($log, TopRatedMovieService) {
                var vm=this;
                TopRatedMovieService.getMovie()
                    .then(function(movies) {
                        console.log('Movies in toprated movie directives :',movies.data.results);
                        vm.movies = movies.data.results;

                    }, function(error){
                        $log.error('Error here', error);
                    });
                
            },
            link: function(scope, elm, attrs){
            }
        };
    }

angular.module('topRatedMoviesDirective', ['services.top-rated-movie'])
    .directive('topRatedMoviesDirective', topRatedMoviesDirective);

})();