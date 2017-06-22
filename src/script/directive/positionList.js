/**
 * Created by bxq on 2017/4/26.
 */
'use strict';
angular.module('app').directive('appPositionList', [function() {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'view/template/positionList.html',
        scope: {
            data: '=', //暴露一个data的接口,为了使指令可以重用，降低了指令和控制器之间的耦合度，有利于指令的复用
            filterObj: '=' //注意接口的在js中是驼峰,在html中是用-隔开
        }
    }
}]);