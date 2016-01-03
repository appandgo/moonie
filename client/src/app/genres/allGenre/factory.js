(function(){
    'use strict'

    function allGenreService($http,$log){
        var service = {};
        service.movie = [];
        var key = 'd07241f7f943c6861fa0a520b52cc049';
        service.getGenre = function () {
            return $http.get('http://api.themoviedb.org/3/genre/movie/list',{
                params:{
                    api_key: key                }
            })
            .success(function(data) {
                $log.info('Get all the genres mov', data);
                service.movie = data
            })
            .error(function(error) {
                $log.error('Error', error);
            })
        };

        return service;
    }

angular.module('services.genres', [])
    .factory('allGenreService', allGenreService);
})()

