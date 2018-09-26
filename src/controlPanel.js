(function(){
ControlPanelController.$inject = ['KissersListService','$interval'];
function ControlPanelController(KissersListService,$interval) {
    var $ctrl = this;
    $ctrl.refreshPeriod = 50;
    $ctrl.getCurrentMoney = function () {
        return KissersListService.getCurrentMoney();
    }
    $ctrl.getCurrentDps = function () {
        return KissersListService.getCurrentDps();
    }
    $ctrl.giveMoney = function (money) {
        KissersListService.giveMoney(money);
    }
    $ctrl.resetMoney = function () {
        KissersListService.resetMoney();
    }

    $ctrl.greatlyIncreaseMoney = function () {
        KissersListService.greatlyIncreaseMoney();
    };
    $ctrl.updateView = function () {
        KissersListService.updateModel($ctrl.refreshPeriod);
    };

    var refreshLoop = $interval($ctrl.updateView, $ctrl.refreshPeriod);
};


angular.module('MochiClicker').component('controlPanel', {
    templateUrl: 'src/templates/control-panel.html',
    controller: ControlPanelController
});
})();