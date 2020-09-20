const bcrypt = require('bcrypt');
const express = require('express');
const {check,validationResult} = require("express-validator");
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require('../models/Users');

router.get('/users', async (req, res) => {
    try{
        const users = await User.find();
        res.json(users);
    }catch(err){
        res.json({message: err})
    }
});

router.post('/users/register', async (req,res) => {
    const user = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
    });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    try{
        const savedUser = await user.save();
        // res.json(savedUser);
        return res.status(200).json({
            message: "User Registered Successfully"
        });

    }catch(err){
        return res.status(400).json({
            message: "User Registration Failed"
        });
    }
});

router.post("/users/login",
    [
        check("email", "Please enter a valid email").isEmail(),
        check("password", "Please enter a valid password").isLength({min: 6})
    ],
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const {email,password} = req.body;
        try {
            let user = await User.findOne({email});
            if (!user)
                return res.status(400).json({
                    message: "User Not Exist"
                });

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch)
                return res.status(400).json({
                    message: "Incorrect Password !"
                });

            const payload = {
                user: {
                    id: user.id
                }
            };

            jwt.sign(
                payload,
                "secret", {
                    expiresIn: 3600
                },
                (err, token) => {
                    if (err) throw err;
                    res.status(200).json({
                        token,
                        user_id: user._id,
                        user_name: user.first_name + ' ' + user.last_name,
                        user_email: user.email,
                        user_phone: user.phone,
                        login: true
                    });
                }
            );
        } catch (e) {
            console.error(e);
            res.status(500).json({
                message: "Server Error"
            });
        }
    },
    
);
router.post("/users/check_email",
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }
        const {email} = req.body;
        try {
            let user = await User.findOne({email});
            if (user){
                return res.status(400).json({
                    message: "Email Address Already Exists"
                });
            }
            else{
                return res.status(200).json({
                    message: "New Email Address"
                });
            }
        } catch (e) {
            console.error(e);
            res.status(500).json({
                message: "Server Error"
            });
        }
    },

);
module.exports = router;