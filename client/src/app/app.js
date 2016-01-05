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
    $log.debug('MainCtrl loaded!');
  }

  function run($log) {
    $log.debug('App is running!');
  }

  angular.module('app', [
      'ui.router',
      'home',
      'movie',
      'movie-details',
      'actor-details',
      'movie-details-genres',
      'movie-details-similar',
      'movie-details-credits',
      'movie-latest',
      'top-rated-movie',
      'moviesDirective',
      'topRatedMoviesDirective',
      'popularMoviesDirective',
      'popularActorsDirective',
      'movieDetailsDirective',
      'actorDetailsDirective',
      'movieDetailsGenresDirective',
      'movieDetailsSimilarDirective',
      'movieDetailsCreditsDirective',
      'movie-popular',
      'actor-popular',
      'tvShows',
      'appHeaderComponent',
      'appFooterComponent',
      'playComponent',
      'likeComponent',
      'addComponent',
      'moreComponent',
      'common.filters.uppercase',
      'common.interceptors.http',
      'templates'
    ])
    .config(config)
    .run(run)
    .controller('MainCtrl', MainCtrl)
    .value('version', '1.1.0');
})();
