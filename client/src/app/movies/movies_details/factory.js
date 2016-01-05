(function(){
    'use strict'

    function MovieDetailsService($http,$log,API){
        var service = {};
        var key = API.KEY;

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

angular.module('services.movie_details', [])
    .factory('MovieDetailsService', MovieDetailsService);
})();

