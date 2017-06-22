/**
 * Created by bxq on 2017/5/3.
 */
'use strict';
angular.module('app').controller('searchCtrl', ['$http', '$scope', 'dict', function($http, $scope, dict) {
    $scope.name = '';
    $scope.search = function() {
        $http.get('data/positionList.json?name=' + $scope.name).then(function(resp) {
            $scope.positionList = resp.data;
        })
        console.log('search');
    }
    $scope.search();
    $scope.enter = function(e) {
        var keyCode = window.event ? e.keyCode : e.which;
        if (keyCode == 13) {
            $scope.search()
        }
    }
    $scope.sheet = {};
    $scope.tabList = [{
            id: 'city',
            name: '城市'
        },
        {
            id: 'salary',
            name: '薪水'
        },
        {
            id: 'scale',
            name: '公司规模'
        }
    ];
    $scope.filterObj = {};
    var tabId = '';
    $scope.tClick = function(id, name) {
        //console.log(id,name);
        tabId = id; //留住当时点击的id
        $scope.sheet.list = dict[id];
        $scope.sheet.visible = true;
        //console.log($scope.sheet);
    }
    $scope.sClick = function(id, name) {
        console.log(id, name);
        if (id) {
            angular.forEach($scope.tabList, function(item) {
                if (item.id === tabId) {
                    item.name = name; //换tab里的内容
                }
            });
            $scope.filterObj[tabId + 'Id'] = id; //这里不懂啊啊啊啊啊啊啊啊啊,,,,,对比属性名和属性值,看接口数据
        } else {
            delete $scope.filterObj[tabId + 'Id']; //注意数据清掉,看自定义filter逻辑就明白了,对比属性名和属性值
            angular.forEach($scope.tabList, function(item) {
                if (item.id === tabId) {
                    switch (item.id) {
                        case 'city':
                            item.name = '城市';
                            break;
                        case 'salary':
                            item.name = '薪水';
                            break;
                        case 'scale':
                            item.name = '公司规模';
                            break;
                        default:
                    }
                }

            })
        }
    }
}]);