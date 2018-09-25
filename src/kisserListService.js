(function(){
function KissersListService() {
    var service = this;
    var currentDps = 0;
    var money = 0;
    var kissers = initialKissers;

    service.updateModel = function (refreshPeriod) {
        money += currentDps * refreshPeriod / 1000;
    }

    service.giveMoney = function (delta) {
        money += delta;
    }

    service.resetMoney = function () {
        money = 0;
    }

    service.buyKisser = function (index) {
        if (money >= kissers[index].cost) {
            money -= kissers[index].cost;
            kissers[index].cuantity += 1;
            kissers[index].totalDps += kissers[index].dps;
            currentDps += kissers[index].dps;
            kissers[index].cost = kissers[index].cost * 1.1;
        }
    }

    service.greatlyIncreaseMoney = function () {
        money = (money + 1) * 20;
    }
    //Getters
    service.getFilteredKissers = function () {
        return kissers.filter(function (item) {
            if (item.alreadyShown == 1 || item.cost < money * 10) {
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

angular.module('MochiClicker').service('KissersListService', KissersListService);
})();