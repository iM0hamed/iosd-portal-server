import express from 'express';
import Progress from './../models/progress';
import Course from './../models/course';

const progressController = {
	
	fetchProgress : (req, res) => {
		Progress.findOne({Course: req.params.id}).then(progress => {
			if(progress) {
				res.json({
					success: true,
					message: "Progress Found",
					progress: progress
				});	
			} else {
				return Promise.reject();
			}
		}).catch(e => {
			res.status(404).json({
				success: false,
				message: "Progress Not Found"
			});
		});
	},

	newProgress: (req, res) => {
		const data = {
			Course: req.body.Course,
			User: req.decoded.id,
			watched: {}	
		}

		const progress = new Progress(data);
		progress.save().then(progress => {
			res.json({
				success: true,
				message: "Progress Created",
				progress: progress
			});
		}).catch(e => {
			res.json({
				success: false,
				message: "Progress Not Created"
			});
		});
	},

	markVideo: (req, res) => {
		Progress.findOne({Course: req.params.id}).then(progress => {
			let watched = {...progress.watched}
			watched[req.params.vid] = true;
			progress.watched = watched
			progress.save().then(updatedProgress => {
				res.json({
					success: true,
					message: "Video marked as watched",
					progress: updatedProgress
				});	
			})
		}).catch(e => {
			res.status(404).json({
				success: false,
				message: "Progress Not Updated"
			});
		});
	}		
};

export default progressController;