(function() {
    'use strict';

    function Movies() {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './src/app/movies/template.html',
            scope: {},
            controllerAs: 'vm',
            bindToController: true,
            /* jshint unused:false*/
            controller: function($log, MovieService) {
                var vm=this;
                MovieService.getMovie()
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

angular.module('moviesDirective', ['services.movie'])
    .directive('moviesDirective', Movies);

})();