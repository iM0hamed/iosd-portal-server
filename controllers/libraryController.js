import express from 'express';
import Book from './../models/book';

let libraryController = {
	index: (req, res) => {
		console.log("Showing all books");
		Book.find({}).then(data => {
			let category = [];
			data.forEach((book) => {
				if(category.indexOf(book.category) === -1) {
					category.push(book.category);
				}
			});
			res.send({ category, data});
		}, (err) => {
			console.log("Some error occured");
			res.send(err)
		})
	}, 

	show: (req, res) => {
		Book.findById(req.params.id).then(book => {
			res.send(book);
		}, (err) => {
			res.status(404).json({success: false, message: "book not found"});
		});
	}
};

export default libraryController;