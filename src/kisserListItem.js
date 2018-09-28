(function () {

KisserListItemController.$inject = ['KissersListService'];
function KisserListItemController(KissersListService) {
    var $ctrl = this;
    $ctrl.buyKisser = function (idx){
        KissersListService.buyKisser(idx);
    }
    $ctrl.canBuy = function(){
        return $ctrl.item.cost > KissersListService.getCurrentMoney();
    }
};


angular.module('MochiClicker').component('kisserListItem', {
    templateUrl: 'src/templates/kisser-list-item.html',
    controller: KisserListItemController,
    bindings: {
        item: '<',
        idx: '<'
    }
});

})();