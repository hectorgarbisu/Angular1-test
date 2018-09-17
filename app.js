(function () {
  'use strict';

  angular.module('MochiClicker', [])
    .controller('MochiController', MochiController)
    .service('KissersListService', KissersListService);

  MochiController.$inject = ['$scope', '$interval', 'KissersListService'];
  function MochiController($scope, $interval, KissersListService) {
    var mc = this;
    mc.refreshPeriod = 20; //miliseconds
    //Service functions are asigned to controller functions
    //Controller is now thin but almost meaningless

    //TODO: add some type of intermediate data (like a text input to buy X kissers)
    //so that the ViewModel has something to feel responsible for :sad_face:
    mc.getCurrentDps = KissersListService.getCurrentDps;
    mc.getCurrentMoney = KissersListService.getCurrentMoney;
    mc.giveOneMoney = KissersListService.giveOneMoney;
    mc.getFilteredKissers = KissersListService.getFilteredKissers;
    mc.resetMoney = KissersListService.resetMoney;
    mc.greatlyIncreaseMoney = KissersListService.greatlyIncreaseMoney;
    mc.buyKisser = KissersListService.buyKisser;

    mc.updateView = function () {
      KissersListService.updateModel(mc.refreshPeriod);
    };

    var refreshLoop = $interval(mc.updateView, mc.refreshPeriod);
  };

  //All logic that reads or modifies the inner model is under a service
  //Only one service for now
  function KissersListService() {
    var service = this;
    var currentDps = 0;
    var money = 0;
    var kissers = initialKissers;
    service.updateModel = function (refreshPeriod) {
      money += currentDps * refreshPeriod / 1000;
    };
    service.giveOneMoney = function () {
      money += 1;
    };

    service.resetMoney = function () {
      money = 0;
    };

    service.buyKisser = function (index) {
      if (money >= kissers[index].cost) {
        money -= kissers[index].cost;
        kissers[index].cuantity += 1;
        kissers[index].totalDps += kissers[index].dps;
        currentDps += kissers[index].dps;
      }
    };
    service.greatlyIncreaseMoney = function () {
      money = (money + 1) * 20;
    };
    //Getters
    service.getFilteredKissers = function () {
      return kissers.filter(function (item) {
        if (item.alreadyShown == 1 || item.cost < money) {
          item.alreadyShown = 1;
          return true;
        } else {
          return false;
        }
      });
    };
    service.getCurrentMoney = function () {
      return money;
    };
    service.getCurrentDps = function () {
      return currentDps;
    };
  }; //KissersListService

})();