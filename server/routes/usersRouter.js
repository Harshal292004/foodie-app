const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const { userModel } = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SALT_ROUNDS = 14;


//middle ware
const verifyToken = (req, res, next) => {
    const token = req.cookies['userToken'];

    if (!token) {
        return res.status(403).json({ success: false, message: 'No token provided' });
    }

    jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
        
        if (err) {
            return res.status(401).json({ success: false, message: 'Failed to authenticate token' });
        }

        req.userId = decoded.id;  // Attach the user ID to the request
        next();
    })
}




router.post("/createUser", [
    body('email').isEmail(),
    body('username').isLength({ min: 5 }),  // Changed from userName to username
    body('password').isLength({ min: 5 }),
    body('fullname').notEmpty(),
    body('contact').notEmpty(),
    body('age').isNumeric()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { username, fullname, email, contact, password, age } = req.body;  // Changed from userName to username
    try {
        const salt = await bcrypt.genSalt(SALT_ROUNDS);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        const newUser = await userModel.create({
            username,  // Changed from userName to username
            fullname,
            age,
            email,
            password: hashedPassword,
            contact
        });

        const token = jwt.sign({ email: email, id: newUser._id }, process.env.JWT_KEY);
        res.cookie('userToken', token);
        res.status(201).json({ success: true, userToken: token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: err.message });
    }
});

router.post("/loginUser", [
    body('email').isEmail(),
    body('password').isLength({ min: 5 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });
        if (user) {
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (isPasswordValid) {
                const token = jwt.sign({ email: email, id: user._id }, process.env.JWT_KEY);
                res.cookie('userToken', token);
                res.status(200).json({ success: true, user: user });
            } else {
                res.status(401).json({ success: false, error: "Invalid credentials" });
            }
        } else {
            res.status(404).json({ success: false, error: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ success: false, error: err.message ,stack:err.stack});
    }
});



router.get("/welcome", verifyToken, async (req, res) => {
    try {
        const user = await userModel.findById(req.userId);

        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        // Send customized data based on the user
        res.status(200).json({ success: true, user: { fullname: user.fullname, email: user.email } });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});


module.exports = router;