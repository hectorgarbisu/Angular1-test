(function(){
ControlPanelController.$inject = ['KissersListService', '$interval', '$element'];
function ControlPanelController(KissersListService, $interval, $element) {
    var $ctrl = this;
    $ctrl.refreshPeriod = 50;
    $ctrl.debug = false

    $ctrl.isScrolled = function () {
        var defaultPositionLowerBound = angular.element($element).prop('offsetTop') + angular.element($element).prop("offsetHeight") 
        return window.scrollY  > defaultPositionLowerBound
    }
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
    }
    $ctrl.updateView = function () {
        KissersListService.updateModel($ctrl.refreshPeriod);
    }
    $ctrl.toggleDebug = function() {
        $ctrl.debug = !$ctrl.debug;
    }

    var refreshLoop = $interval($ctrl.updateView, $ctrl.refreshPeriod);
};


angular.module('MochiClicker').component('controlPanel', {
    templateUrl: 'src/templates/control-panel.html',
    controller: ControlPanelController
});
})();