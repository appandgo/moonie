(function(){
    'use strict'

    function ActorDetailsService($http,$log,API){
        var service = {};
        var key = API.KEY;


        service.getOneActor = function(actorID){
            return $http.get('http://api.themoviedb.org/3/person/' + actorID,{
                params: {
                    api_key: key
                }
            })
            .then(function(actorData) {
                return actorData.data;
            })
            .catch(function(e){
                console.log(e);
            });
        };
        return service;
    }

angular.module('services.actor_details', [])
    .factory('ActorDetailsService', ActorDetailsService);
})();

