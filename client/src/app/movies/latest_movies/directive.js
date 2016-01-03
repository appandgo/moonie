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
<<<<<<< HEAD
            /* jshint unused:false*/
            controller: function($log, LatestMoviesService) {
                console.log('latest Movies in directives :');
                var vm=this;
                LatestMoviesService.getMovie()
||||||| merged common ancestors
            /* jshint unused:false*/
            controller: function($log, MovieService, $stateParams) {
                var vm = this;
                MovieService.getOneMovie($stateParams.id)
=======
            controller: function($log, MovieService, $stateParams) {
                var vm = this;
                MovieService.getOneMovie($stateParams.id)
>>>>>>> dev_lea
                    .then(function(movie) {
                        console.log('latest Movies in directives :',movie.data);
                        vm.movies = movie.data;
                    },function(error){
                        $log.error('Error', error);
                    })
            },
            link: function(scope, elm, attrs){
            }
        };
    }

angular.module('latestMovies', ['services.latest_movies'])
    .directive('latestMovies', latestMovies);

})();