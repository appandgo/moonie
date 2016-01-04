(function(){
    'use strict'

    function ConnexionService($http,$log,API){
        var service = {};
        service.connexion = [];
        var token;
        var sessionId;

        service.getToken = function () {
            return $http.get('http://api.themoviedb.org/3/authentication/token/new',{
                params:{
                    api_key: API.API_KEY,
                }
            })
            .success(function(data) {
                $log.info('get token success', data.results);
                service.connexion = data
            })
            .error(function(error) {
                $log.error('Error token', error);
            })
        };

        service.connexion = function (token) {

            return $http.get('http://api.themoviedb.org/3/authentication/token/validate_with_login',{
                params:{
                    api_key: API.API_KEY,
                    username:'mopiou',
                    password:'Mopiou190257',
                    request_token:token
                }
            })
            .success(function(data) {
                $log.info('connexion success', data);
                service.connexion = data
            })
            .error(function(error) {
                $log.error('Error connexiooon', error);
            })
        };

        service.getSession = function (token) {
            return $http.get('http://api.themoviedb.org/3/authentication/session/new',{
                params:{
                    api_key: API.API_KEY,
                    request_token:token
                }
            })
            .success(function(data) {
                $log.info('connexion success', data);
                service.connexion = data
            })
            .error(function(error) {
                $log.error('Error connexion', error);
            })
        };

        return service;
    }

angular.module('services.connexion', [])
    .factory('connexionService', ConnexionService);
})()

