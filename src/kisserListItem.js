(function () {

KisserListItemController.$inject = ['KissersListService'];
function KisserListItemController(KissersListService) {
    var $ctrl = this;
    $ctrl.buyKisser = function (idx){
        KissersListService.buyKisser(idx);
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