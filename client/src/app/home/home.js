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
  function HomeCtrl(MovieService) {
    var vm = this;
    MovieService.getOneMovie(102899);
  }

  angular.module('home', ['services.movie'])
    .config(config)
    .controller('HomeCtrl', HomeCtrl);
})();
