(function(){
    'use strict';

    function config($stateProvider) {
        $stateProvider
        .state('root.video',{
            url: '/video/:idMovie',
            views: {
                '@': {
                    template: '<video-directive></video-directive>',
                }
            }
        });
    }

    angular.module('video-route', ['videoDirective'])
    .config(config);
})();