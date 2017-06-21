/**
 * Created by bxq on 2017/5/6.
 */
'use strict';
//维度数据事先缓存起来,定义一个全局变量
angular.module('app').value('dict',{}).run(['dict','$http', function (dict,$http) {
    $http.get('data/city.json').then(function(resp){
        dict.city = resp.data;
    })
    $http.get('data/salary.json').then(function(resp){
        dict.salary = resp.data;
    })
    $http.get('data/scale.json').then(function(resp){
        dict.scale = resp.data;
    })
}])