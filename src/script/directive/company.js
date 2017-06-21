/**
 * Created by bxq on 2017/4/26.
 */
'use strict';
angular.module('app').directive('appCompany',[function(){
    return{
        restrict: 'A',
        replace:true,
        templateUrl: 'view/template/company.html',
        scope:{
            com:'='    //暴露一个data的接口,为了使指令可以重用，降低了指令和控制器之间的耦合度，有利于指令的复用
        }
    }
}]);
