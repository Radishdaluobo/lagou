/**
 * Created by bxq on 2017/5/7.
 */
angular.module('app').directive('appMytab', [function() {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'view/template/mytab.html',
        scope: {
            list: '=',
            tabClick: '&'
        },
        link: function($scope) {
            $scope.click = function(tab) {
                $scope.selectId = tab.id; //传过来的tab,用tab的id等于select的id
                $scope.tabClick(tab); //通知父控制器,该元素被点击
            }
        }

    };
}]);