(function(){
    'use strict'

    function VideoService($http,$log,API){
        var service = {};
        service.video = [];
        service.getVideo = function (idMovie) {
            return $http.get('http://api.themoviedb.org/3/movie/'+idMovie+'/videos',{
                params:{
                    api_key: API.KEY,
                }
            })
            .success(function(data) {
                $log.info('Get video', data);
                service.video = data.results
            })
            .error(function(error) {
                $log.error('Error', error);
            })
        };

        return service;
    }

angular.module('services.video', [])
    .factory('VideoService', VideoService);
})()

