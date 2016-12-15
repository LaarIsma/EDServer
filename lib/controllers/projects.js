'use strict';

var mongoose = require('mongoose'),
    Project = mongoose.model('Project'),
    passport = require('passport');

// Get Projects 
exports.getProject = function (req, res){
	Project.find(
		function(err, project) {
			if (err)
				res.send(err)
					res.json(project); // devuelve 		
				}
			);
}

// Save  Project
exports.setProject = function(req, res) {

		// Create 
		Project.create(
			{name : req.body.name,	users_id: req.body.users_id, company_id : req.body.company_id}, 
			function(err, project) {
				if (err)
					res.send(err);

				// get Projects
				Project.find(function(err, project) {
				 	if (err)
				 		res.send(err)
				 	res.json(project);
				});
			});

	}

// Update Project
exports.updateProject = function(req, res){
	Project.update( {_id : req.params.project_id},
					{$set:{name : req.body.name,	users_id: req.body.users_id, company_id : req.body.company_id}}, 
					function(err, project) {
						if (err)
							res.send(err);

				// get Projects
				Project.find(function(err, project) {
				 	if (err)
				 		res.send(err)
				 	res.json(project);
				});
			});
	}

// Delete Project
exports.removeProject = function(req, res) {
	Project.remove({_id : req.params.project_id}, function(err, project) {
		if (err)
			res.send(err);

			// get Projects
			Project.find(function(err, project) {
				if (err)
					res.send(err)
				res.json(project);
			});
		});
}