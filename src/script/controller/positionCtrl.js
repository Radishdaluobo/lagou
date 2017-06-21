/**
 * Created by bxq on 2017/4/30.
 */
'use strict';

angular.module('app').controller('positionCtrl',['$scope','$http','$state','$q','cache',function($scope,$http,$state,$q,cache){
    $scope.isLogin=false;
    cache.remove('to');
    function getPosition() {
        var def = $q.defer();
        $http.get('data/position.json', {
            //get请求的另外一种写法
            params: {
                id: $state.params.id
            }
        }).then(function(resp) {
            $scope.position = resp.data;
            def.resolve(resp);
        });
        return def.promise;
    }
    function getCompany(id) {
        $http.get('data/company.json?id='+id).then(function(resp){
            $scope.company = resp.data;
        })
    }
    getPosition().then(function(obj){
        getCompany(obj.data.companyId);
    });
}])

