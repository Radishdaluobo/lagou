/**
 * Created by bxq on 2017/4/23.
 */
'use strict';
angular.module('app').directive('appHeadBar',[function(){
    return {
        restrict:'A',        //值可以取  ‘AEMC’ 属性 元素 样式 注释
        replace:true,        // replace默认为 false，就是将模版的内容追加到元素中，如果设置为 true，那么模版的内容将会替换元素的内容。
        templateUrl: 'view/template/headBar.html',
        scope :{
            text:'@'
        },
        link : function(scope){
            scope.back = function () {
                window.history.back();  // html5新的API
            }
        }
    }
}])
