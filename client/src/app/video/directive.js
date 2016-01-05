(function() {
    'use strict';

    function Video() {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './src/app/video/template.html',
            scope: {},
            controllerAs: 'vm',
            bindToController: true,
            /* jshint unused:false*/
            controller: function($log, VideoService,$stateParams) {
                var vm=this;
                VideoService.getVideo($stateParams.idMovie)
                    .then(function(video) {
                        console.log('Movies in directives :',video.data.results[0]);
                        vm.video = video.data.results[0];
                        vm.youtubeLink = 'http://www.youtube.com/embed/2HkjrJ6IK5Efs';

                    }, function(error){
                        $log.error('Error here', error);
                    });
                
            },
            link: function(scope, elm, attrs){
            }
        };
    }

angular.module('videoDirective', ['services.video'])
    .directive('videoDirective', Video);

})();