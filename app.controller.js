"use strict";
function TodoController ($scope) {
  // object of starting tasks  
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
          //adding tasks / filtering  
                if (!listItem == '' && !addTask == '') {
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
    }); 

  //complete button to strikethrough list item
      $scope.clear = (() => {
        let todos = $scope.todos;
        $scope.todos = [];
        angular.forEach(todos, function(task) {
          if (!task.completed) $scope.todos.push(task);
        });
      });

    // x button to remove list item
      $scope.removeTask = (() => {
        let lastTask = $scope.todos;
        $scope.todos = [];
        angular.forEach(lastTask, function(x) {
            if (!x.completed) $scope.todos.push(x);
        });
      });
    }
    

angular
  .module("todoApp")
  .controller("TodoController", TodoController);
  