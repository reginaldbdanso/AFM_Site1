const Blog = require('../models/Blog');
const cloudinary = require('../config/cloudinary');

class BlogService {
    async createBlog(blogData, featuredImage) {
        try {
            let imageUrl = '';
            if (featuredImage) {
                const result = await cloudinary.uploader.upload(featuredImage, {
                    folder: 'blog_images'
                });
                imageUrl = result.secure_url;
            }

            const blog = new Blog({
                ...blogData,
                featuredImage: imageUrl
            });

            await blog.save();
            return blog;
        } catch (error) {
            throw error;
        }
    }

    async updateBlog(id, updateData, featuredImage) {
        try {
            if (featuredImage) {
                const result = await cloudinary.uploader.upload(featuredImage, {
                    folder: 'blog_images'
                });
                updateData.featuredImage = result.secure_url;
            }

            const blog = await Blog.findByIdAndUpdate(id, updateData, { new: true });
            return blog;
        } catch (error) {
            throw error;
        }
    }

    async deleteBlog(id) {
        try {
            await Blog.findByIdAndDelete(id);
            return { message: 'Blog deleted successfully' };
        } catch (error) {
            throw error;
        }
    }

    async getAllBlogs(filters = {}) {
        try {
            return await Blog.find(filters)
                .sort({ createdAt: -1 })
                .populate('author', 'username');
        } catch (error) {
            throw error;
        }
    }

    async getBlogById(id) {
        try {
            return await Blog.findById(id).populate('author', 'username');
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new BlogService();