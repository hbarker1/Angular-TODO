"use strict";
function TodoController ($scope) {  
    $scope.todos = [
        {
            text:'Walk the Dog',
            completed: true
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
    
 
}
angular
  .module("App")
  .controller("TodoController", TodoController);
  