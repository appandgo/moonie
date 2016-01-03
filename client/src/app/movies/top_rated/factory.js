(function(){
    'use strict'

    function TopRatedMovieService($http,$log){
        console.log('factory top rated movies ');
        var service = {};
        service.movie = [];
        var key = 'd07241f7f943c6861fa0a520b52cc049';
        service.getMovie = function () {
            return $http.get('https://api.themoviedb.org/3/movie/top_rated',{
                params:{
                    api_key: key
                }
            })
            .success(function(data) {
                $log.info('Get all the top ratedmovies', data);
                service.movie = data
            })
            .error(function(error) {
                $log.error('Error', error);
            })
        };
        service.getMovieReviews = function() {
            // console.log('firing', key);
            return $http.get('https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc', {
                params:{
                    api_key: key
                }                
            })
            .then(function(movieData) {
                $log.info('Movie Reviews', movieData.data);
                return movieData.data;
            })
            .catch(function(e){
                console.log(e);
            });
            
        }
        return service;
    }

angular.module('services.top-rated-movie', [])
    .factory('TopRatedMovieService', TopRatedMovieService);
})()

