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
            controller: function($log, LatestMoviesService) {
                console.log('latest Movies in directives :');
                var vm=this;
                LatestMoviesService.getMovie()
                    .then(function(movies) {
                        console.log('latest Movies in directives :',movies.data);
                        vm.movies = movies.data;
                    },function(error){
                        $log.error('Error', error);
                    })

            }            ,
            link: function(scope, elm, attrs){
            }
        };
    }

angular.module('latestMovies', ['services.latest_movies'])
    .directive('latestMovies', latestMovies);

})();