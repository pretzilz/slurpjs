(function(angular) {
    var ngSlurp = angular.module('ngSlurp', [])
    .directive('ngSlurp', [function() {
        return {
            restrict: 'A',
            scope: {
                settings: '='
            },
            link: function ($scope, element, attrs) {
                $(element).slurp($scope.settings);
            }
        }
    }])
    .directive('slurp', [function() {
        return {
            restrict: 'E',
            scope: {
                settings: '='
            },
            link: function ($scope, element, attrs) {
                $.slurp($scope.settings);
            }
        }
    }]);    
})(angular);