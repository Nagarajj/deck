'use strict';

require('../app');
var angular = require('angular');

angular.module('deckApp')
  .controller('TasksCtrl', function ($scope, tasks, $log) {

    $scope.taskStateFilter = 'All';

    $log.debug('tasks:', tasks);

    //$scope.subscribeTo(tasks.all);

    $scope.subscribed = {
      data: tasks,
    };

  }
);
