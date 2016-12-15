'use strict';

angular.module('EdTech')
  .controller('ProjectsCtrl', function ($scope, $http) {

	$scope.newProject = {};
	$scope.projects = {};
    $scope.selected = false;

	// get Projects
	$http.get('/api/projects').success(function(data) {
		$scope.projects = data;
	})
	.error(function(data) {
		console.log('Error: ' + data);
	});


	// Add Project
	$scope.AddProject = function(form) {
		$http.post('/api/projects', $scope.newProject)
		.success(function(data) {
				$scope.newProject = {}; // Delete Form Data
				$scope.projects = data;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};
    
    // Edit Project
	$scope.EditProject = function(newProject) {
		$http.put('/api/projects/' + $scope.newProject._id, $scope.newProject)
		.success(function(data) {
				$scope.newProject = {}; // Delete Form Data
				$scope.projects = data;
				$scope.selected = false;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Delete Project
	$scope.DeleteProject = function(newProject) {
		$http.delete('/api/projects/' + $scope.newProject._id)
		.success(function(data) {
			$scope.newProject = {};
			$scope.projects = data;
			$scope.selected = false;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Select Project
	$scope.SelectProject = function(project) {
		$scope.newProject = project;
		$scope.selected = true;
		//console.log($scope.newProject, $scope.selected);
	};
});