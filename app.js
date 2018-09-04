(function () {
  'use strict';
  angular.module('MochiClicker', [])
    .controller('MochiController', function ($scope) {
      $scope.refreshPeriod = 20;
      $scope.currentDps = 0;
      $scope.money = 0;
      $scope.mochis = mochis;
      $scope.getOneMoney = function () {
        $scope.money = $scope.money + 1;
      };
    });

})();