const express = require('express');
const app = express();
const ProjectRoute = express.Router();

// Require Project model in our routes module
let Project = require('../models/Project');

// Defined store route
ProjectRoute.route('/add').post(function (req, res) {
	let project = new Project(req.body);
	project.save()
		.then(project => {
			res.status(200).json(project);
		})
		.catch(err => {
			res.status(400).send("unable to save to database");
		});
});

ProjectRoute.route('/update').post(function (req, res) {
	Project.findByIdAndUpdate(
		{ _id: req.body._id },
		{
			name: req.body.name,
			owner: req.body.owner,
			status: req.body.status,
			description: req.body.description 
		},
		function(err, result) {
			if (err) {
				res.send(err);
			}
			else {
				res.send(result);
			}
		}
	);
});



// Defined get data(index or listing) route
ProjectRoute.route('/').get(function (req, res) {
	Project.find(function (err, projects) {
		if (err) {
			console.log(err);
		}
		else {
			res.json(projects);
		}
	});
});

// Defined get data(index or listing) route to search for a project
ProjectRoute.route('/projects/:name').get(function (req, res, q) {
	Project.search(q, function (err, data) {
		if (err) {
			console.log(err);
		}
		else {
			res.json(projects);
			console.log(data);
		}
	});
});

// Defined delete | remove | destroy route
ProjectRoute.route('/delete/:id').get(function (req, res) {
	Project.findByIdAndRemove({ _id: req.params.id }, function (err, project) {
		if (err) res.json(err);
		else res.json(req.params.id);
	});
});

module.exports = ProjectRoute;
