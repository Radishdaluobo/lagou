'use strict';
angular.module('app').controller('myCtrl', ['$http', '$scope', 'cache', '$state', function($http, $scope, cache, $state) {
    $scope.name = !!cache.get('name');
    if ($scope.name) {
        $scope.userName = cache.get('name');
        $scope.image = cache.get('image');
    }
    $scope.logout = function() {
        cache.remove('id');
        cache.remove('name');
        cache.remove('image');
        $state.go('main');
    }
}]);