import express from 'express';
import Book from './../models/book';

let libraryController = {
    index: (req, res) => {
        console.log("Showing all books");
        Book.find({}).then(data => {
            let category = [];
            data.forEach((book) => {
                if (category.indexOf(book.category) === -1) {
                    category.push(book.category);
                }
            });
            res.send({
                success: true,
                category,
                books : data
            });
        }, (err) => {
            console.log("Some error occured");
            res.send(err)
        })
    },

    show: (req, res) => {
        Book.findById(req.params.id).then(book => {
            if(book) {
                res.send({
                    success: true,
                    book: book
                });   
            } else {
                return Promise.reject();
            }
        }).catch((err) => {
            res.status(404).json({
                success: false,
                message: "book not found"
            });
        });
    },

    bookNew: (req, res) => {

        let book = new Book(req.body);
        book.save().then(data => {
            res.json({
                success: true,
                message: "Book Created",
                data: data
            });
        }, (err) => {
            console.err(err);
            res.status(404).json({
                success: false,
                message: "Book not Created"
            });
        });

    },

    bookEdit: (req, res) => {
        Book.findOneAndUpdate({
                _id: req.params.id
            }, req.body, {
                new: true
            }
        ).then(data => {
            if (data) {
                res.send({
                    success: true,
                    message: "Book updated",
                    data: data
                });    
            } else {
                return Promise.reject();   
            }
        }).catch(e => {
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

export default libraryController;