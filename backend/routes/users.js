const express = require('express');
const User = require('../models/User');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

router.post('/bookmark', authMiddleware, async (req, res) => {
    const user = await User.findById(req.userId);
    if (!user.bookmarks.includes(req.body.jobId)) {
        user.bookmarks.push(req.body.jobId);
    }
    await user.save();
    res.sendStatus(200);
});

module.exports = router;
