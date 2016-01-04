(function(){
    'use strict'

    function MovieDetailsGenresService($http,$log){
        var service = {};
        var key = 'd07241f7f943c6861fa0a520b52cc049';


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

angular.module('services.movie_details_genres', [])
    .factory('MovieDetailsGenresService', MovieDetailsGenresService);
})();

