const express = require('express');
const router = express.Router();
const { adminAuth } = require('../middleware/auth');
const jobService = require('../services/jobService');
const blogService = require('../services/blogService');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

// Jobs Management
router.post('/jobs', adminAuth, upload.single('companyLogo'), async (req, res) => {
    try {
        const job = await jobService.createJob(req.body, req.file?.path);
        res.status(201).json(job);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.patch('/jobs/:id', adminAuth, upload.single('companyLogo'), async (req, res) => {
    try {
        const job = await jobService.updateJob(req.params.id, req.body, req.file?.path);
        res.json(job);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/jobs/:id', adminAuth, async (req, res) => {
    try {
        await jobService.deleteJob(req.params.id);
        res.json({ message: 'Job deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Blog Management
router.post('/blogs', adminAuth, upload.single('featuredImage'), async (req, res) => {
    try {
        const blog = await blogService.createBlog(
            { ...req.body, author: req.user._id },
            req.file?.path
        );
        res.status(201).json(blog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.patch('/blogs/:id', adminAuth, upload.single('featuredImage'), async (req, res) => {
    try {
        const blog = await blogService.updateBlog(req.params.id, req.body, req.file?.path);
        res.json(blog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/blogs/:id', adminAuth, async (req, res) => {
    try {
        await blogService.deleteBlog(req.params.id);
        res.json({ message: 'Blog deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Dashboard Statistics
router.get('/stats', adminAuth, async (req, res) => {
    try {
        const [jobCount, blogCount] = await Promise.all([
            Job.countDocuments(),
            Blog.countDocuments()
        ]);

        res.json({
            totalJobs: jobCount,
            totalBlogs: blogCount
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;