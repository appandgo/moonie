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
      'actor-details',
      'movie-details-genres',
      'movie-details-similar',
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
      'movie-popular',
      'actor-popular',
      'tvShows',

      'movieGenreDirective',
      'services.oneGenre',
      'movie-genre',

      'all-genre',
      'allGenreDirective',
      'services.genres',

      'services.connexion',
      'connexion',
      'connexionDirective',

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
    .constant("API", {
      "URL": "http://jmarket.jardiland.com/api/api.php",
      "API_KEY": "d07241f7f943c6861fa0a520b52cc049",
    })
    .controller('MainCtrl', MainCtrl)
    .value('version', '1.1.0');
})();
