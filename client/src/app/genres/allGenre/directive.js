(function() {
    'use strict';

    function allGenre() {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './src/app/genres/allGenre/template.html',
            scope: {},
            controllerAs: 'vm',
            bindToController: true,
            /* jshint unused:false*/
            controller: function($log, allGenreService) {
                var vm=this;
                allGenreService.getGenre()
                    .then(function(genres) {
                        console.log('genres in directives :',genres.data);
                        vm.genres = genres.data.genres;

                    }, function(error){
                        $log.error('Error here', error);
                    });
                
            },
            link: function(scope, elm, attrs){
            }
        };
    }

angular.module('allGenreDirective', ['services.genres'])
    .directive('allGenreDirective', allGenre);

})();