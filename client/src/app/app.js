(function() {
  'use strict';

  angular.element(document).ready(function() {
    angular.bootstrap(document, ['app']);
  });

  function config($stateProvider, $urlRouterProvider, $logProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/');
    $logProvider.debugEnabled(true);
    $httpProvider.interceptors.push('httpInterceptor');
    $stateProvider
      .state('root', {
        views: {
          'header': {
            template: '<!--<div>Header</div>-->',
          },
          'footer': {
            template: '<!--<div>Footer</div>-->',
          }
        }
      });
  }

  function MainCtrl($log) {
    $log.debug('MainCtrl laoded!');
  }

  function run($log) {
    $log.debug('App is running!');
  }

  angular.module('app', [
      'ui.router',
      'home',
      'movie',
      'movie-details',
      'movie-latest',
      'top-rated-movie',
      'moviesDirective',
      'topRatedMoviesDirective',
      'popularMoviesDirective',
      'movieDetailsDirective',
      'movie-popular',
      'tvShows',

      'movieGenreDirective',
      'services.oneGenre',
      'movie-genre',

      'all-genre',
      'allGenreDirective',
      'services.genres',

      'appHeaderComponent',
      'appFooterComponent',
      'playComponent',
      'common.filters.uppercase',
      'common.interceptors.http',
      'templates'
    ])
    .config(config)
    .run(run)
    .controller('MainCtrl', MainCtrl)
    .value('version', '1.1.0');
})();
