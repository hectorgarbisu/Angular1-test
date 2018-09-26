(function(){
KisserTableController.$inject = ['KissersListService'];
function KisserTableController(KissersListService) {
    $ctrl = this;
    $ctrl.getFilteredKissers = function () {
        return KissersListService.getFilteredKissers();
    }
    $ctrl.buyKisser = function (idx) {
        KissersListService.buyKisser(idx);
    }

};

angular.module('MochiClicker').component('kisserTable', {
    templateUrl: 'src/templates/kisser-table.html',
    controller: KisserTableController
});
})();