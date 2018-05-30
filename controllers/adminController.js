import express from 'express';
import Book from './../models/book';
import constants from '../constants/constants';

let adminController = {
	bookEdit: (req, res) => {
		Book.update({
			_id: req.params.id
		}, req.body).then(data => {
			res.send({
				success: true,
				message: "Book updated",
				data: data
			});
		}, (err) => {
			res.status(404).send({
				success: false,
				message: "Book not found"
			});
		})
	}, 

	bookDelete: (req, res) => {
		Book.remove({
			_id: req.params.id
		}).then(data => {
			res.json({
				success: true,
				message: "Book deleted",
				data: data
			});
		}, (err) => {
			res.status(404).json({
				success: false,
				message: "Book not found"
			});
		});
	}
};

export default adminController;