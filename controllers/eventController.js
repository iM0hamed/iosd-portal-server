import express from 'express';
import Event from './../models/event';

let eventController = {
	index: (req, res) => {
		Event.find().then( data => {
			res.json({
				success: true,
				message: "All events found",
				data: data
			});
		}, (err) => {
			res.status(400).send(err);
		});
	},

	recent: (req, res) => {
        const now = new Date();
        Event.find({start: {$gte: now}}).sort('start').limit(5).then(data => {
            res.json({
                success: true,
                message: "Events found",
                data: data
            });
        }, (err) => {
            res.send("Some error occured");
        });
          
    },

	new: (req, res) => {
	    // expect data in second , convert to date obj
	    req.body.date = new Date(req.body.date * 1000);
		let event = new Event(req.body);
		event.save().then(data => {
            res.json({
                success: true,
                message: "Event Created",
                data: data
            });
		}, (err) => {
			console.err(err);
            res.status(404).json({
                success: false,
                message: "event not Created"
            });
		});
	},

	edit: (req, res) => {
		Event.findOneAndUpdate({
            _id: req.params.id
            }, req.body, {
                new: true
            }
        ).then(data => {
            if(data) {
                res.send({
                    success: true,
                    message: "Event updated",
                    data: data
                });   
            } else {
                return Promise.reject();
            }
        }).catch((err) => {
            res.status(404).send({
                success: false,
                message: "Event not found"
            });
        });
	},

	delete: (req, res) => {
		Event.remove({
            _id: req.params.id
        }).then(data => {
            res.json({
                success: true,
                message: "Event deleted",
                data: data
            });
        }, (err) => {
            res.status(404).json({
                success: false,
                message: "Event not found"
            });
        });
	}
};

export default eventController;