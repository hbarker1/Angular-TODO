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
    
        $scope.enter = (() => {
            let addTask = $scope.addTask;
            let completed = $scope.completed;
            let listItem = $scope.listItem;
            let removeItem = $scope.removeItem;
            
                if (!addTask === undefined || !addTask == '') {
                if (!listItem == '') {
                    $scope.todos.splice(listItem, 1, {
                        text: addTask,
                        completed: completed
                    });
                }else {
                    $scope.todos.push({
                        text: addTask,
                        complete: false
                    });
                };
                           
                $scope.addTask = $scope.completed = $scope.listItem = '';  
        };
    }); 
    
    $scope.remaining = function() {
        let count = 0;
        angular.forEach($scope.todos, function(task) {
          count += task.completed ? 0 : 1;
        });
        return count;
      };

      $scope.clear = (() => {
        let todos = $scope.todos;
        
        $scope.todos = [];
        
        angular.forEach(todos, function(task) {
          if (!task.completed) $scope.todos.push(task);
        });
      });
    
      $scope.removeTask = (() => {
        var oldList = $scope.todos;
        $scope.todos = [];
        angular.forEach(oldList, function(x) {
            if (!x.completed) $scope.todos.push(x);
        });
      });
    }
    

angular
  .module("todoApp")
  .controller("TodoController", TodoController);
  