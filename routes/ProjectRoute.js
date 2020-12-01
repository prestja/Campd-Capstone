const express = require('express');
const app = express();
const ProjectRoute = express.Router();
const fs = require('fs');
const multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + '/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname )
  }
})
var upload = multer({ storage: storage })

var ImageStorage = multer.diskStorage({
	destination: function (req, file, cb) {
	  cb(null, __dirname + '/images')
	},
	filename: function (req, file, cb) {
	  cb(null, file.originalname )
	}
  })

var ImageUpload = multer({storage: ImageStorage})
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
	console.log("CALLED");
	Project.findByIdAndUpdate(
		{ _id: req.body._id },
		{
			name: req.body.name,
			owner: req.body.owner,
			status: req.body.status,
			description: req.body.description,
      tags: req.body.tags
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

ProjectRoute.route('/:id').get(function (req, res) {
	Project.findById({ _id: req.params.id }, function (err, project) {
		if (err) res.json(err);
		else res.json(project);
	});
});

// todo: fold this into / function
/*
ProjectRoute.route('/:owner').get(function(req, res, q){
	Project.findById({owner: req.params.owner}, function(err, data){
		if(err){
			console.log(err);
		}
		else{
			res.json(project);
			console.log(data);
		}
	});
});
*/

// Defined delete | remove | destroy route
ProjectRoute.route('/delete/:id').get(function (req, res) {
	Project.findByIdAndRemove({ _id: req.params.id }, function (err, project) {
		if (err) res.json(err);
		else res.json(req.params.id);
	});
});

ProjectRoute.post('/image', ImageUpload.any(), function(req, res){
	//console.log(req.body);
	console.log("In uploadImage");
	console.log("Inside the projects" , req.files);
	if(!req.files[0]){
		return res.send({message: "No File to Upload"})
	}

})
ProjectRoute.post('/uploadJson' , upload.any() ,function (req, res){
	console.log("In uploadJson");
	console.log("Inside the projects" , req.files);
	if(!req.files[0]){
		return res.send({message: "No File to Upload"})
	}
	let jsonData = [];

	if(fileType == "csv"){
		// here we need ot
		let lines = data.split("\n");

		lines.forEach(line => {
			let props = line.split(",");
			console.log("line" , line)
				jsonData.push({
					name: props[1],
					owner: props[2],
					status: props[3],
					description: props[4],
					link: props[5],
				})
		})

	}else {
		try {
			jsonData = JSON.parse(data);
		}catch(err){
			return res.send({message: "There is an error in the content format"})
		}
	}


	if(jsonData){
		// now need to push to the server

		for(let i = 0; i < jsonData.length; i++){
			delete jsonData[i]["_id"];
		}


	Project.insertMany(jsonData).then(function(data){
			return res.send({message: "success", data})
	}).catch(function(err){
			return res.send({message: "data saved to the database", data});
	})
	}else {
		return res.send({message: "problem in json data"});
	}

})

module.exports = ProjectRoute;
