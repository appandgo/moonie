(function(){
    'use strict';

    function config($stateProvider) {
        $stateProvider
        .state('root.connexion',{
            url: '/connexion',
            views: {
                '@': {
                    template: '<connexion-directive></connexion-directive>',
                }
            }
        });
    }

    angular.module('connexion', ['connexionDirective'])
    .config(config);
})();