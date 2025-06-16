const express = require('express');
const JobPost = require('../models/JobPost');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

router.get('/', async (req, res) => {
    const jobs = await JobPost.find();
    res.json(jobs);
});

router.post('/', authMiddleware, async (req, res) => {
    const job = new JobPost({ ...req.body, postedBy: req.userId });
    await job.save();
    res.status(201).json(job);
});

module.exports = router;
