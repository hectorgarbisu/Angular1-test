(function () {
  'use strict';
  angular.module('MochiClicker', [])
    .controller('MochiController',MochiController);

    MochiController.$inject = ['$scope','$interval'];
    function MochiController ($scope, $interval) {
      var mc = this;
      mc.refreshPeriod = 20; //miliseconds
      mc.currentDps = 0;
      mc.money = 0;
      mc.kissers = kissers;
      mc.getOneMoney = function () {
        mc.money = mc.money + 1;
      };

      mc.filteredKissers = function(){
          return mc.kissers.filter(function (item){
            if(item.alreadyShown==1 || item.cost < mc.money){   
              item.alreadyShown = 1;           
              return true; 
            }else{
              return false;
            }
        });
      };

      mc.resetMoney = function(){
        mc.money = 0;
      };

      mc.greatlyIncreaseMoney = function(){
        mc.money = (mc.money+1)*20;
      };
      mc.buyKisser = function (index){
        if (mc.money>mc.kissers[index].cost){
          mc.money -= mc.kissers[index].cost;
          mc.kissers[index].cuantity += 1;
          mc.kissers[index].totalDps += mc.kissers[index].dps;
          mc.currentDps += mc.kissers[index].dps;
        }
      };
      function updateGame(){
        mc.money += mc.currentDps*mc.refreshPeriod/1000;
      };

      var refreshLoop = $interval(updateGame, mc.refreshPeriod);
    };

})();