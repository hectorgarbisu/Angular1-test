(function(){
function MochiPanelController() {
    var $ctrl = this;
  }
  
  angular.module('MochiClicker').component('mochiPanel', {
    templateUrl: 'src/templates/mochi-panel.html',
    controller: MochiPanelController
  });
})();