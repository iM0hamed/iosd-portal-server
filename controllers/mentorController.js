import express from 'express';
import Mentor from './../models/mentor';

let mentorController = {
	
    all: (req, res) => {
		Mentor.find().then( data => {
			res.json({
				success: true,
				message: "All mentors found",
				data: data
			});
		}, (err) => {
			res.status(400).send(err);
		});
	},

    show: (req, res) => {
        Mentor.findById(req.params.id).then(data => {
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
                message: "mentor not found"
            });
        });
    },

	new: (req, res) => {
		let mentor = new Mentor(req.body);
		mentor.save().then(data => {
            res.json({
                success: true,
                message: "Mentor Created",
                data: data
            });
		}, (err) => {
			console.err(err);
            res.status(404).json({
                success: false,
                message: "mentor not created"
            });
		});
	},

	edit: (req, res) => {
		Mentor.findOneAndUpdate({
            _id: req.params.id
            }, req.body, {
                new: true
            }
        ).then(data => {
            if(data) {
                res.send({
                    success: true,
                    message: "mentor updated",
                    data: data
                });    
            } else {
                return Promise.reject();   
            }
        }).catch((err) => {
            res.status(404).send({
                success: false,
                message: "mentor not found"
            });
        });
	},

	delete: (req, res) => {
		Mentor.remove({
            _id: req.params.id
        }).then(data => {
            res.json({
                success: true,
                message: "Mentor deleted",
                data: data
            });
        }, (err) => {
            res.status(404).json({
                success: false,
                message: "Mentor not found"
            });
        });
	}
};

export default mentorController;