import express from 'express';
import Project from './../models/project';

let projectController = {
	
    all: (req, res) => {
		Project.find().then( data => {
			res.json({
				success: true,
				message: "All projects found",
				data: data
			});
		}, (err) => {
			res.status(400).send(err);
		});
	},

    show: (req, res) => {
        Project.findById(req.params.id).then(data => {
            if(data) {
                res.send({
                    success: true,
                    data: data
                });    
            } else {
                return Promise.reject();
            }
        }).catch((err) => {
            res.status(404).json({
                success: false,
                message: "project not found"
            });
        });
    },

	new: (req, res) => {
		let project = new Project(req.body);
		project.save().then(data => {
            res.json({
                success: true,
                message: "Project Created",
                data: data
            });
		}, (err) => {
			console.err(err);
            res.status(404).json({
                success: false,
                message: "project not created"
            });
		});
	},

	edit: (req, res) => {
		Project.findOneAndUpdate({
            _id: req.params.id
            }, req.body, {
                new: true
            }
        ).then(data => {
            if(data) {
                res.send({
                    success: true,
                    message: "project updated",
                    data: data
                });    
            } else {
                return Promise.reject();   
            }
        }).catch((err) => {
            res.status(404).send({
                success: false,
                message: "project not found"
            });
        });
	},

	delete: (req, res) => {
		Project.remove({
            _id: req.params.id
        }).then(data => {
            res.json({
                success: true,
                message: "project deleted",
                data: data
            });
        }, (err) => {
            res.status(404).json({
                success: false,
                message: "project not found"
            });
        });
	}
};

export default projectController;