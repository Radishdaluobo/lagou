'use strict';
angular.module('app').controller('postCtrl', ['$http', '$scope', function($http, $scope) {
    $scope.tabList = [{
        id: 'all',
        name: '全部'
    }, {
        id: 'pass',
        name: '面试邀请'
    }, {
        id: 'fail',
        name: '不合适'
    }]
    $http.get('data/myPost.json').then(function(resp) {
        $scope.positionList = resp.data;
        console.log($scope.positionList);
    })
    $scope.filterObj = {};
    $scope.filterObj = [];
    $scope.tclick = function(id, name) {
        switch (id) {
            case 'all':
                delete $scope.filterObj['state'];
                break;
            case 'pass':
                $scope.filterObj['state'] = '1'; //神坑,这里的1和-1是字符串格式的
                console.log($scope.filterObj);
                break;
            case 'fail':
                $scope.filterObj['state'] = '-1';
                console.log($scope.filterObj);
                break;
            default:
        }
    }

}]);