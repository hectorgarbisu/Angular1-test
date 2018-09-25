(function(){
function MochiPanelController() {
    var $ctrl = this;
  }
  
  angular.module('MochiClicker').component('mochiPanel', {
    templateUrl: 'src/mochi-panel.html',
    controller: MochiPanelController
  });
})();