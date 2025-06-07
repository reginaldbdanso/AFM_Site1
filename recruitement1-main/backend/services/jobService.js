const Job = require('../models/Job');
const cloudinary = require('../config/cloudinary');

class JobService {
    async createJob(jobData, companyLogo) {
        try {
            let logoUrl = '';
            if (companyLogo) {
                const result = await cloudinary.uploader.upload(companyLogo, {
                    folder: 'company_logos'
                });
                logoUrl = result.secure_url;
            }

            const job = new Job({
                ...jobData,
                companyLogo: logoUrl
            });

            await job.save();
            return job;
        } catch (error) {
            throw error;
        }
    }

    async updateJob(id, updateData, companyLogo) {
        try {
            if (companyLogo) {
                const result = await cloudinary.uploader.upload(companyLogo, {
                    folder: 'company_logos'
                });
                updateData.companyLogo = result.secure_url;
            }

            const job = await Job.findByIdAndUpdate(id, updateData, { new: true });
            return job;
        } catch (error) {
            throw error;
        }
    }

    async deleteJob(id) {
        try {
            await Job.findByIdAndDelete(id);
            return { message: 'Job deleted successfully' };
        } catch (error) {
            throw error;
        }
    }

    async getAllJobs(filters = {}) {
        try {
            return await Job.find(filters).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    }

    async getJobById(id) {
        try {
            return await Job.findById(id);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new JobService();