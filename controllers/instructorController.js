import Instructor from './../models/instructor';

const instructorController = {

	fetchInstructor: (req, res) => {
		Instructor.findById(req.params.id).then(instructor => {
			if(instructor) {
				res.json({
					success: true,
					message: "Instructor Found",
					instructor: instructor
				});	
			} else {
				return Promise.reject();
			}
		}).catch(e => {
			res.status(404).json({
				success: false,
				message: "Instructor Not Found"
			});
		});
	},

	updateInstructor: (req, res) => {
		Instructor.findOneAndUpdate({_id: req.params.id},
			req.body, {new: true}).then(instructor => {
				if(instructor) {
					res.json({
						success: true,
						message: "Instructor Updated",
						instructor: instructor
					});
				} else {
					return Promise.reject();
				}
			}).catch(e => {
				res.status(404).json({
					successs: false,
					message: "Instructor Not Found"
				});
			});
	},

	newInstructor: (req, res) => {
		let instructor = new Instructor(req.body) 
		instructor.save().then(instructor => {
			res.json({
				success: true,
				message: "Instructor Created",
				instructor: instructor
			});
		}).catch(e => {
			res.json({
				success: false,
				message: "Instructor Not Created"
			});
		});
	}
};

export default instructorController;