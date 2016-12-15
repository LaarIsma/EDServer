'use strict';

angular.module('EdTech')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
