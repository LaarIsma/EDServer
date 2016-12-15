'use strict';

angular.module('EdTech')
  .directive('historyBack', function () {
    return {
      restrict: 'EA',
      link: function(scope, element, attrs) {
        element.on('click', function() {
          history.back();
        });
      }
    };
  });
