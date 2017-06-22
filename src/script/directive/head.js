/**
 * Created by bxq on 2017/4/23.
 */
'use strict';
angular.module('app').directive('appHead', ['cache', function(cache) {
    return {
        restrict: 'A', //值可以取  ‘AEMC’ 属性 元素 样式 注释
        replace: true, // replace默认为 false，就是将模版的内容追加到元素中，如果设置为 true，那么模版的内容将会替换元素的内容。
        templateUrl: 'view/template/head.html',
        link: function($scope) {
            $scope.name = cache.get('name') || ''; //对整个应用来说,cache是全局的,所以直接放在组件的link里,我的理解
        }
    }
}])