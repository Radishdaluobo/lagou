/**
 * Created by bxq on 2017/4/26.
 */
'use strict';
angular.module('app').directive('appSheet',[function(){
    return{
        restrict: 'A',
        replace:true,
        templateUrl: 'view/template/sheet.html',
        scope:{
            list:'=',
            visible :'=',
            select: '&'
        }
    }
}]);



//注意sheet与mytab两个自定义指令的差别