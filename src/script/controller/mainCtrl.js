/**
 * Created by bxq on 2017/4/23.
 */

'use strict';
angular.module('app').controller('mainCtrl', ['$http', '$scope', 'cache', function($http, $scope, cache) {
    $http.get('data/positionList.json').then(function(resp) {
        $scope.list = resp.data;
    }).catch(function() {})
}]);