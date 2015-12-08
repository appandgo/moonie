(function(){
    'use strict'

    function tvShows($http,$log){
        var service = {};
        var key = 'd07241f7f943c6861fa0a520b52cc049';
        var BASE_URL = 'http://api.themoviedb.org/3';

        service.getPopularTvShows = function() {
            return $http.get(BASE_URL + '/tv/popular',{
                params:{
                    api_key: key
                }
            })
            .then(function(data){
                return data.data.results;
            })
            .catch(function(e) {
                console.log(e);
            });
        }


        service.getTVGenres = function () {
            return $http.get(BASE_URL + '/genre/tv/list', {
                params:{
                    api_key: key
                }
            })
            .then(function(resp){
                return _.indexBy(resp.data.results, 'id');
            })
            .catch(function(e){
                $log.error(e);
            });
        }        
        return service;
    }

angular.module('services.tvShows', [])
    .factory('tvShowsService', tvShows);
})()

