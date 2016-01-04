(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.home', {
        url: '/',
        views: {
          '@': {
            templateUrl: 'src/app/home/home.tpl.html',
            controller: 'HomeCtrl as home',
          }
        }
      });

  }

  /**
   * @name  HomeCtrl
   * @description Controller
   */
  function HomeCtrl(LatestMoviesService) {
    var vm = this;
   LatestMoviesService.getMovie()
    .then(function(movie) {
        console.log('latest Movies in directives :',movie.data);
        vm.movies = movie.data;
    },function(error){
        $log.error('Error', error);
    })
  }

  angular.module('home', ['services.latest_movies'])
    .config(config)
    .controller('HomeCtrl', HomeCtrl);
})();
