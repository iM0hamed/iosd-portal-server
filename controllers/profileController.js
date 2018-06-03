import express from 'express';
import User from './../models/user';

let profileController = {
	
    show: (req, res) => {

        User.findById(req.params.id).then(data => {
            console.log(data);
            if(data) {
                let profile = {
                    email: data.email,
                    name: data.name,
                    image: data.image,
                    skills: data.skills,
                    socials: data.socials,
                    college: data.college
                }
                res.send({
                    success: true,
                    user: profile
                });    
            } else {
                return Promise.reject();
            }
        }).catch((err) => {
            res.status(404).json({
                success: false,
                message: "user not found"
            });
        });
    },

    index: (req, res) => {

        User.findById(req.decoded.id).then(data => {
            console.log(data);
            if(data) {
                data = data.toJSON();
                delete data.password ;
                delete data.isAdmin ;
                res.send({
                    success: true,
                    user: data
                });
            } else {
                return Promise.reject();
            }
        }).catch((err) => {
            res.status(404).json({
                success: false,
                message: "user not found"
            });
        });
    },

	edit: (req, res) => {
        let updatedUser = req.body;
        for (var x in updatedUser) {
            if ( ['email', 'username', 'password', 'isAdmin'].indexOf(x) > -1) {
                delete updatedUser[x];
            }
        };
        User.findOneAndUpdate({
            _id: req.decoded.id
            }, updatedUser, {
                new: true
            }
        ).then(data => {
            if(data) {
                res.send({
                    success: true,
                    message: "User updated",
                    data: data
                });    
            } else {
                return Promise.reject();   
            }
        }).catch((err) => {
            res.status(404).send({
                success: false,
                message: "User not found"
            });
        });
	}
};

export default profileController;