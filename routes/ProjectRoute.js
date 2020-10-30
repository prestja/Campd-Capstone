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

var ImageUpload = multer({ImageStorage})
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
/*ProjectRoute.route('/projects/:owner').get(function(req, res, q){
	Project.search(q, function(err, data){
		if(err){
			console.log(err);
		}
		else{
			res.json(projects);
			console.log(data);
		}
	});
});*/
ProjectRoute.route('/projects/:owner').get(function(req, res, q){
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
// Defined delete | remove | destroy route
ProjectRoute.route('/delete/:id').get(function (req, res) {
	Project.findByIdAndRemove({ _id: req.params.id }, function (err, project) {
		if (err) res.json(err);
		else res.json(req.params.id);
	});
});
/*
ProjectRoute.route('/Image').post(upload.single('data'), (req, res, next)=>{
	console.log(req.body);
	const newImage = new Image({
		data: req.file.path
	});

	newImage.save().then((result)=>{
		console.log(result);
		res.status(200).json({
			success: true,
			document: result
		});
	}).catch((err)=> next(err));
});
ProjectRoute.route(/Image).get(function  {
	
})
*/
	ProjectRoute.post('/uploadJson' , upload.any() ,function (req, res){
			console.log("In uploadJson");
			console.log("Inside the projects" , req.files);
			if(!req.files[0]){
				return res.send({message: "No File to Upload"})
			}

			// if the filetype is csv, parse it to json first
			let file = req.files[0];
			let fileType = file.originalname.split(".")[file.originalname.split(".").length - 1];
			if(fileType == "csv"){
				console.log("file type is csv");
			}


			fs.readFile(req.files[0].path , 'utf8' ,function(err, data){
				if(err){
					return res.send({message: "there is an error reading the file uploaded"});
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

	})

module.exports = ProjectRoute;
