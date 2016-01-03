(function(){
    'use strict'

    function movieGenreService($http,$log){
        var service = {};
        service.movie = [];
        var key = 'd07241f7f943c6861fa0a520b52cc049';
        service.getMovies= function (id) {
            return $http.get('http://api.themoviedb.org/3/genre/'+id+'/movies',{
                params:{
                    api_key: key                
                }
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

angular.module('services.oneGenre', [])
    .factory('movieGenreService', movieGenreService);
})()

