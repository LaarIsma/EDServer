'use strict';

angular.module('EdTech')
  .controller('chatCtrl', function ($scope, chatroom) {
    $scope.getMessages = chatroom.getMessages;
    $scope.getVisitors = chatroom.getVisitors;

    $scope.sendMessage = function () {
      if(!$scope.newMessage) {
        return;
      }
      chatroom.sendMessage($scope.newMessage);
      $scope.newMessage = '';
    };
  });