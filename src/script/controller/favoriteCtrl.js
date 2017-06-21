'use strict';
angular.module('app').controller('favoriteCtrl', ['$http', '$scope', function($http, $scope){
    $http.get('data/positionList.json').then(function(resp){
        $scope.list=resp.data;
    })
}]);
