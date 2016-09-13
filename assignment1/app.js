(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', function ($scope) {
  $scope.lunchMenuItems = "";
  $scope.displyMessage = "";
  $scope.messageTypeError = false;
  $scope.messageTypeSuccess = false


  $scope.checkIfTooMuch = function () {
    var items = $scope.lunchMenuItems;
    calculatItemLength(items);
  };

  $scope.checkIfTooMuchOnChange = function () {
    var items = $scope.lunchMenuItems;
    calculatItemLength(items);
    $scope.displyMessage = "";
  };

  function calculatItemLength(string) {
  var totalNameValue = 0;
  var elements = (string !== undefined? string.split(',') : "");
  for(var i = 0; i < elements.length; i++)
  {
     if(elements[i].trim().length > 0){
       totalNameValue++;
     }
  }
  if(totalNameValue  === 0){
    $scope.displyMessage = "Please enter data first";
    $scope.messageTypeError = true;
    $scope.messageTypeSuccess = false;
    $scope.border_color = "border-color"
  }else if(totalNameValue > 3){
    $scope.displyMessage = "Too much!";
    $scope.messageTypeError = false;
    $scope.messageTypeSuccess = true;
    $scope.border_color ="";
  }else{
    $scope.displyMessage = "Enjoy!";
    $scope.messageTypeError = false;
    $scope.messageTypeSuccess = true;
    $scope.border_color ="";
  }
  }

});


})();
