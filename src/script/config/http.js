/**
 * Created by bxq on 2017/5/25.
 */
'use strict';
angular.module('app').config(['$provide', function($provide){
    $provide.decorator('$http', ['$delegate', '$q', function($delegate, $q){
        //$delegate指代前面的$http服务
        //$q异步操作
        $delegate.post = function(url, data, config) {
            //创建延迟加载对象
            var def = $q.defer();
            $delegate.get(url).then(function(resp) {
                def.resolve(resp);
            },function(err) {
                def.reject(err);
            })
            return {
                then: function(f1,f2){
                    def.promise.then(f1,f2);
                }
            }
        }
        return $delegate;
    }]);
}]);
