(function() {
    'use strict';

    function connexionDirective() {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './src/app/connexion/template.html',
            scope: {},
            controllerAs: 'vm',
            bindToController: true,
            /* jshint unused:false*/
            controller: function($log, connexionService) {
                var vm=this;
                /*
                connexionService.getToken()
                    .then(function(token) {
                        console.log('tokennnn :',token.data.request_token);
                        vm.token = token.data.request_token;
                    }, function(error){
                        $log.error('Error token', error);
                    });
                
                connexionService.connexion("f901000ab29a311f071f23b7c96fb3df0a333bd7")
                    .then(function(connexion) {
                        console.log('connexion :',connexion);
                    }, function(error){
                        $log.error('Error connexion', error);
                    });
                

                connexionService.getSession("f901000ab29a311f071f23b7c96fb3df0a333bd7")
                    .then(function(sessionId) {
                            console.log('sessionId :',sessionId);
                            vm.sessionId = sessionId.data;
                        }, function(error){
                            $log.error('Error token', error);
                        });
                */

            },
            link: function(scope, elm, attrs){
            }
        };
    }

angular.module('connexionDirective', ['services.connexion'])
    .directive('connexionDirective', connexionDirective);

})();