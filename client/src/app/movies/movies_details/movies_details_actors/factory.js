(function(){
    'use strict'

    function MovieDetailsCreditsService($http,$log){
        var service = {};
        service.actor = [];
        var key = 'd07241f7f943c6861fa0a520b52cc049';


        service.getActor = function (actorID) {
            return $http.get('http://api.themoviedb.org/3/movie/' + actorID + '/credits',{
                params:{
                    api_key: key
                }
            })
            .success(function(data) {
                $log.info('Get all the Credits', data);
                service.actor = data
            })
            .error(function(error) {
                $log.error('Error', error);
            })
        };


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


        service.getOneMovie = function(movieID){
            return $http.get('http://api.themoviedb.org/3/movie/' + movieID,{
                params: {
                    api_key: key
                }
            })
            .then(function(movieData) {
                return movieData.data;
            })
            .catch(function(e){
                console.log(e);
            });
        };

        return service;
    }

angular.module('services.movie_details_credits', [])
    .factory('MovieDetailsCreditsService', MovieDetailsCreditsService);
})();

