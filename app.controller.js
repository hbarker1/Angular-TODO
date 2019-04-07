"use strict";
function TodoController ($scope) {  
    $scope.todos = [
        {
            text:'Walk the Dog',
            completed: false
          },
          {
            text:'Go to the store',
            completed: false
          },
          {
            text:'Get gas',
            completed: false
          },
          {
            text:'Wash the car',
            completed: false
          }
        ];
    
        $scope.save (() => {
            $scope.products = ["Milk", "Bread", "Cheese"];
            $scope.addItem = function () {
                $scope.errortext = "";
                if (!$scope.addMe) {return;}
                if ($scope.products.indexOf($scope.addMe) == -1) {
                    $scope.products.push($scope.addMe);
                } else {
                    $scope.errortext = "The item is already in your shopping list.";
                }
            }
            $scope.removeItem = function (x) {
                $scope.errortext = "";    
                $scope.products.splice(x, 1);
            }
        });
}
angular
  .module("todoApp")
  .controller("TodoController", TodoController);
  