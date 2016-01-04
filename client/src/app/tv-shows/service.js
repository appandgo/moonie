(function(){
    'use strict'

    function tvShows($http,$log,API){
        var service = {};
        var BASE_URL = 'http://api.themoviedb.org/3';

        service.getPopularTvShows = function() {
            return $http.get(BASE_URL + '/tv/popular',{
                params:{
                    api_key: API.API_KEY
                }
            })
            .then(function(data){
                return data.data.results;
            })
            .catch(function(e) {
                console.log(e);
            });
        }
       
        return service;
    }

angular.module('services.tvShows', [])
    .factory('tvShowsService', tvShows);
})()

