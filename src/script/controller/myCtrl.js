'use strict';
angular.module('app').controller('myCtrl', ['$http', '$scope', 'cache', function($http, $scope, cache) {
    $scope.name = !!cache.get(name);
}]);