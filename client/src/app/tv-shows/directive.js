(function() {
    'use strict';

    function popularTvShows() {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: 'src/app/tv-shows/template.html',
            scope: {},
            controllerAs: 'vm',
            bindToController: true,
            /* jshint unused:false*/
            controller: function($log, tvShowsService) {
                var vm = this;
                vm.filterSelected = '-vote_average';
                tvShowsService.getPopularTvShows()
                    .then(function(popularTvShows) {
                        vm.popularTvShows = popularTvShows;
                    })
                    .catch(function(e){
                        $log.error(e);
                    });
            }
        };
    }

angular.module('popularTvShowsDirective', ['services.tvShows', 'starRatingDirective'])
    .directive('popularTvShowsDirective', popularTvShows);

})();