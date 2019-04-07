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
            let addTask = $scope.addTask;
            let completed = $scope.completed;
            let listItem = $scope.listItem;
            let removeItem = $scope.removeItem;
            
                if (!$scope.addMe) {return;}
                if ($scope.products.indexOf($scope.addMe) == -1) {
                    $scope.products.push($scope.addMe);
                } else {
                    $scope.errortext = "The item is already in your shopping list.";
                }
           
                $scope.errortext = "";    
                $scope.todos.splice(listItem, 1, {
                    text: addTask,
                    completed: completed
                });
            
        });
    }    

angular
  .module("todoApp")
  .controller("TodoController", TodoController);
  