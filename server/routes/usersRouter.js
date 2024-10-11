const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const { userModel } = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SALT_ROUNDS = 14;

// Middleware
const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(403).json({ success: false, message: 'No token provided' });
    }

    jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ success: false, message: 'Failed to authenticate token' });
        }
        
        req.userId = decoded.id;
        next();
    });
};

router.post("/createUser", [
    body('email').isEmail(),
    body('username').isLength({ min: 5 }),
    body('password').isLength({ min: 5 }),
    body('fullname').notEmpty(),
    body('contact').notEmpty(),
    body('age').isNumeric()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { username, fullname, email, contact, password, age } = req.body;
    try {
        const salt = await bcrypt.genSalt(SALT_ROUNDS);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        const newUser = await userModel.create({
            username,
            fullname,
            age,
            email,
            password: hashedPassword,
            contact
        });

        const token = jwt.sign({ email: email, id: newUser._id }, process.env.JWT_KEY);
        res.status(201).json({ success: true, message: "User registered", token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Error registering user" });
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
                
                res.status(200).json({ success: true, message: "User logged in successfully!", token });
            } else {
                res.status(401).json({ success: false, message: "Invalid credentials" });
            }
        } else {
            res.status(404).json({ success: false, message: 'User not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Error logging in" });
    }
});

router.get("/welcome", verifyToken, async (req, res) => {
    try {
        const user = await userModel.findById(req.userId);

        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        const { password, ...userWithoutPassword } = user.toObject();
        
        res.status(200).json({ success: true, user: userWithoutPassword });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Error fetching user data" });
    }
});

module.exports = router;
