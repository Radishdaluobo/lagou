/**
 * Created by bxq on 2017/4/26.
 */
'use strict';
angular.module('app').directive('appPositionClass',[function(){
    return{
        restrict: 'A',
        replace:true,
        templateUrl: 'view/template/positionClass.html',
        scope:{
            com:'='
        },
        link:function($scope){
            $scope.showPositionList=function(i){
                $scope.positionList=$scope.com.positionClass[i].positionList;
                $scope.isActive=i;
            }
            $scope.$watch('com', function(newVal){//监听com属性
                if(newVal){
                    $scope.showPositionList(0);
                }
            });
           // $scope.showPositionList(0);//要放在上一条的后面,因为要等职位列表加载完

        }
    }
}]);
