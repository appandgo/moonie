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
            controller: function(,$scope,$log, connexionService) {
                var vm=this;
               
                connexionService.getToken()
                    .then(function(token) {
                        console.log('tokennnn :',token.data.request_token);
                        vm.token = token.data.request_token;
                        $scope.token=vm.token;
                    }, function(error){
                        $log.error('Error token', error);
                    });

                connexionService.connexion($scope.token)
                    .then(function(connexion) {
                        console.log('connexion :',connexion);
                    }, function(error){
                        $log.error('Error connexion', error);
                    });
                
                connexionService.getSession($scope.token)
                    .then(function(sessionId) {
                            console.log('sessionId :',sessionId);
                            vm.sessionId = sessionId.data;
                        }, function(error){
                            $log.error('Error token', error);
                        });

                /*
                    7dddd6bf2eb3fcecaac231792478b431e7d8b447
                */

            },
            link: function(scope, elm, attrs){
            }
        };
    }

angular.module('connexionDirective', ['services.connexion'])
    .directive('connexionDirective', connexionDirective);

})();