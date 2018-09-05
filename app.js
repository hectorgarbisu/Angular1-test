(function () {
  'use strict';
  angular.module('MochiClicker', [])
    .controller('MochiController', function ($scope, $interval) {
      $scope.refreshPeriod = 20; //miliseconds
      $scope.currentDps = 0;
      $scope.money = 0;
      $scope.kissers = kissers;
      $scope.getOneMoney = function () {
        $scope.money = $scope.money + 1;
      };

      $scope.filteredKissers = function(){
          return $scope.kissers.filter(function (item){
            if(item.alreadyShown==1 || item.cost < $scope.money){   
              item.alreadyShown = 1;           
              return true; 
            }else{
              return false;
            }
        });
      };

      $scope.resetMoney = function(){
        $scope.money = 0;
      };

      $scope.greatlyIncreaseMoney = function(){
        $scope.money = ($scope.money+1)*20;
      };
      $scope.buyKisser = function (index){
        if ($scope.money>$scope.kissers[index].cost){
          $scope.money -= $scope.kissers[index].cost;
          $scope.kissers[index].cuantity += 1;
          $scope.kissers[index].totalDps += $scope.kissers[index].dps;
          $scope.currentDps += $scope.kissers[index].dps;
        }
      };
      function updateGame(){
        $scope.money += $scope.currentDps*$scope.refreshPeriod/1000;
      };

      var refreshLoop = $interval(updateGame, $scope.refreshPeriod);
    });

})();