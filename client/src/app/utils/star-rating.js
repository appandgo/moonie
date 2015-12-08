(function() {
    'use strict';

    function starRating() {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: 'src/app/utils/star-rating.html',
            scope: {
                rating: '='
            },
            controllerAs: 'vm',
            bindToController: true,
            /* jshint unused:false*/
            link: function(vm, elem, attr) {
                if (vm.rating > 10) {console.log('<star-rating> only support rating under 10')};
                var rating = Math.ceil(vm.rating) / 2; // 8.6 => 4,3
                var plain_stars = Math.floor(rating); // 4 etoiles plaine
                var stars = [];
                var star_count = 0;
                for(var i = 0; i < plain_stars; i++){
                    stars.push('fa-star');
                    star_count++;
                }
                if(rating - Math.floor(rating) === 0.5){
                    stars.push('fa-star-half-o')
                    star_count++;
                }
                for(var j = star_count; j < 5; j++){
                    stars.push('fa-star-o')
                }
                vm.stars = stars;
            }
        };
    }

angular.module('starRatingDirective', [])
    .directive('starRating', starRating);

})();