(function(){
    'use strict'

    function PopularActorService($http,$log,API){
        var service = {};
        service.actor = [];
        var key = API.KEY;
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

