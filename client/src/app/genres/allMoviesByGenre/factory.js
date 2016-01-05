(function(){
    'use strict'

    function movieGenreService($http,$log,API){
        var service = {};
        service.movie = [];
        var key = API.KEY;
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

