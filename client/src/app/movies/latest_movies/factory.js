(function(){
    'use strict'

    function LatestMoviesService($http,$log){
        console.log('factory');

        var service = {};
        service.movie = [];
        var key = 'd07241f7f943c6861fa0a520b52cc049';
        service.getMovie = function () {
            return $http.get('https://api.themoviedb.org/3/movie/latest',{
                params:{
                    api_key: key
                }
            })
            .success(function(data) {
                $log.info('Get all the latest_movies', data);
                service.movie = data ;
            })
            .error(function(error) {
                $log.error('Error', error);
            })
        };
        return service;

    }

angular.module('services.latest_movies', [])
    .factory('LatestMoviesService', LatestMoviesService);
})();
