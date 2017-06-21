'use strict';
angular.module('app').controller('loginCtrl', ['$http', '$scope', 'cache', function($http, $scope, cache) {
    $scope.submit = function() {
        $scope.post('data/login.json', $scope.user).then(function(resp) {
            cache.put('id', resp.id);
            cache.put('name', resp.name);
            cache.put('image', resp.image);
            $state.go('main');
        })
    }
}]);