(function(){
KisserListController.$inject = ['KissersListService'];
function KisserListController(KissersListService) {
    $ctrl = this;
    $ctrl.getFilteredKissers = function () {
        return KissersListService.getFilteredKissers();
    }
    $ctrl.buyKisser = function (idx) {
        KissersListService.buyKisser(idx);
    }

};

angular.module('MochiClicker').component('kisserList', {
    templateUrl: 'src/templates/kisser-list.html',
    controller: KisserListController
});
})();