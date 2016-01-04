(function() {
    'use strict';

    function movieDetailsCredits() {
        return {
            restrict: 'EA', 
            replace: true,
            templateUrl: './src/app/movies/movies_details/movies_details_actors/template.html',
            scope: {},
            controllerAs: 'vm',
            controller: function($log, MovieDetailsCreditsService, $stateParams) {
                var vm = this;

                MovieDetailsCreditsService.getActor($stateParams.id)
                    .then(function(actors) {
                        console.log('actors :',actors.data.cast);
                        vm.actors = actors.data.cast;

                        /* Get a specific movie */
                        (vm.actors).forEach(function showOneActor(value, index, array){
                            MovieDetailsCreditsService.getOneActor(value.id)
                            .then(function(oneActor) {
                                //vm.movies.texte = oneMovie.original_title;
                                
                                vm.oneActor = oneActor;
                                vm.oneActor.texte = oneActor.original_title;
                                vm.oneActor.image = oneActor.poster_path;
                                $log.info('oneActor', oneActor);
                            },function(error){
                                $log.error('Error', error);
                            })
                        });


                    })

                MovieDetailsCreditsService.getOneMovie($stateParams.id)
                    .then(function(movie) {
                        vm.movie = movie;
                    })

                MovieDetailsCreditsService.getOneActor($stateParams.id)
                    .then(function(actor) {
                        console.log('one actor :',actor);
                        vm.actor = actor;
                    }, function(error){
                        $log.error('Error here on one actor ', error);
                    });

            }            
        };
    }

angular.module('movieDetailsCreditsDirective', ['services.movie_details_credits'])
    .directive('movieDetailsCreditsDirective', movieDetailsCredits);

})();