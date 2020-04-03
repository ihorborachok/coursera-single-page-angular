(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope) {
  $scope.lunch_menu = '';
  $scope.message = '';

  $scope.onCheck = function () {
    if(!$scope.lunch_menu)
      $scope.message = 'Please enter data first';
    else if($scope.lunch_menu.split(',').length > 3)
      $scope.message = 'Too much!';
    else
      $scope.message = 'Enjoy!';
  }
}

})();
