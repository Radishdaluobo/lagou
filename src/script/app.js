/**
 * Created by bxq on 2017/4/23.
 */
'use strict';

angular.module('app',['ui.router','ngCookies','validation']);
// 启动模块的方式有两种，第一种：angular.bootstrap方式可以启动，但不够智能，除非启动之前要进行其他操作
//第二种：通过ng-app指令