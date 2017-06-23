/**
 * Created by bxq on 2017/4/30.
 */
'use strict';
angular.module('app').directive('appPositionInfo', [function() {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'view/template/positionInfo.html',
        scope: {
            isLogin: '=',
            pos: '=',
            star: '&'
        },
        link: function($scope) {
            $scope.star = function() {
                $scope.isStar = !$scope.isStar;
            }
        }
    }
}]);