import express from 'express';
import Course from './../models/course';

const courseController = {

	fetchAll: (req, res) => {
		Course.find().then(courses => {
			res.json({
				success: true,
				message: "All Courses Found",
				courses: courses
			});
		}).catch(e => {
			res.status(404).json({
				success: false,
				message: "Courses Not Found"
			});
		})
	},

	fetchCourse: (req, res) => {
		Course.findById(req.params.id).then(course => {
			if(course) {
				res.json({
					success: true,
					message: "Course Found",
					course: course
				});	
			} else {
				return Promise.reject();
			}
		}).catch(e => {
			res.status(404).json({
				success: false,
				message: "Course Not Found"
			});
		});
	},

	updateCourse: (req, res) => {
		delete req.body["videos"];
		Course.findOneAndUpdate({_id: req.params.id},
			req.body, {new: true})
			.then(course => {
				if(course) {
					res.json({
						success: true,
						message: "Course Updated",
						course: course
					});	
				} else {
					return Promise.reject();
				}
			}).catch(e => {
				res.status(404).json({
					success: false,
					message: "Course Not Found"
				})
			});
	},

	newCourse: (req, res) => {
		let course = new Course({
			...req.body,
			videos: []
		});
		console.log(course);
		course.save().then(course => {
			res.json({
				success: true,
				message: "New Course Created",
				course: course
			});
		}).catch(e => {
			console.log(e);
			res.status(404).json({
				success: false,
				message: "Course Not Created"
			});
		});
	},

	updateVideo: (req, res) => {
		//Validation
		Course.findOneAndUpdate({_id: req.params.id},
			req.body, {new: true})
			.then(course => {
				if(course) {
					res.json({
						success: true,
						message: "Videos Updated",
						course: course
					});
				} else {
					return Promise.reject();
				}
			}).catch(e => {
				res.status(404).json({
					success: false,
					message: "Videos Not Updated"
				});
			});
	}
}

export default courseController;