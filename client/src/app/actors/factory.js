(function(){
    'use strict'

    function PopularActorService($http,$log){
        var service = {};
        service.actor = [];
        var key = 'd07241f7f943c6861fa0a520b52cc049';
        service.getActor = function () {
            return $http.get('http://api.themoviedb.org/3/person/popular',{
                params:{
                    api_key: key
                }
            })
            .success(function(data) {
                $log.info('Get all the actors', data);
                service.actor = data
            })
            .error(function(error) {
                $log.error('Error', error);
            })
        };
        return service;
    }

angular.module('services.actor', [])
    .factory('PopularActorService', PopularActorService);
})()

