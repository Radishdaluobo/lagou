'use strict';
angular.module('app').controller('registerCtrl', ['$http', '$scope','$interval','$state', function($http, $scope,$interval,$state){
    $scope.submit = function(){
        $http.post('data/regist.json',$scope.user).then(function(resp){
            $state.go('login');
        })
    }
    $scope.send = function(){
        $http.get('data/code.json').then(function(resp){
          if(resp.data.state===1){
              $scope.time = '60s';
              var n = 60;
              var interval = $interval(function(){
                  if(n>0){
                      n--;
                      $scope.time=n+'s'
                  }else{
                      $interval.cancel(interval);
                      $scope.time = '';
                  }
              },1000)
          }
        })
    }
}]);
