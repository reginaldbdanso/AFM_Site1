const User = require('../models/User');
const Job = require('../models/Job');
const Blog = require('../models/Blog');

const seedData = async () => {
  try {
    // Check if data already exists
    const userCount = await User.countDocuments();
    const jobCount = await Job.countDocuments();
    const blogpostCount = await Blog.countDocuments();

    if (userCount > 0 || jobCount > 0 || blogpostCount > 0) {
      console.log('Database already seeded. Skipping seed operation.');
      return;
    }

    // Create test user
    const user = await User.create({
      username: 'Test User',
      email: 'test@example.com',
      password: 'Password@123',
      role: 'admin'
    });

    // Create sample jobs
    await Job.create([
      {
          id: 1,
          title: "Senior Full Stack Developer",
          slug: "senior-full-stack-developer",
          company: "TechCorp Solutions",
          location: "San Francisco, CA",
          salary: "$130,000 - $160,000",
          employmentType: "Full-time",
          description: "We're seeking an experienced Full Stack Developer to join our growing team. The ideal candidate will have strong experience with React, Node.js, and cloud technologies.",
          requirements: [
              "7+ years of software development experience",
              "Strong proficiency in React, Node.js, and TypeScript",
              "Experience with cloud platforms (AWS/Azure/GCP)",
              "Knowledge of microservices architecture",
              "Excellent problem-solving skills"
          ],
          companyLogo: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=400&auto=format&fit=crop",
          postedDate: "2024-03-01",
          postedBy: user._id
      },
      {
          id: 2,
          title: "Product Marketing Manager",
          slug: "product-marketing-manager",
          company: "InnovateMark",
          location: "New York, NY",
          salary: "$90,000 - $120,000",
          employmentType: "Internship",
          description: "Join our marketing team to develop and execute product marketing strategies. You'll work closely with product and sales teams to drive growth.",
          requirements: [
              "5+ years of product marketing experience",
              "Proven track record of successful product launches",
              "Strong analytical and communication skills",
              "Experience with market research and analysis",
              "MBA preferred"
          ],
          companyLogo: "https://images.unsplash.com/photo-1571844307880-751c6d86f3f3?w=400&auto=format&fit=crop",
          postedDate: "2024-02-28",
          postedBy: user._id
      },
      {
          id: 3,
          title: "UX/UI Designer",
          slug: "ux-ui-designer",
          company: "DesignFlow",
          location: "Remote",
          salary: "$85,000 - $110,000",
          employmentType: "Contract",
          description: "We're looking for a talented UX/UI Designer to create beautiful, functional interfaces for our products. You'll work with our product team to deliver exceptional user experiences.",
          requirements: [
              "4+ years of UX/UI design experience",
              "Strong portfolio demonstrating user-centered design",
              "Proficiency in Figma and design tools",
              "Experience with user research and testing",
              "Knowledge of design systems"
          ],
          companyLogo: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400&auto=format&fit=crop",
          postedDate: "2024-02-27",
          postedBy: user._id
      },
      {
          id: 4,
          title: "Data Scientist",
          slug: "data-scientist",
          company: "DataMetrics Inc",
          location: "Boston, MA",
          salary: "$115,000 - $145,000",
          employmentType: "Part-time",
          description: "Join our data science team to develop and implement machine learning models. You'll work on challenging problems and help drive data-driven decisions.",
          requirements: [
              "MS/PhD in Computer Science, Statistics, or related field",
              "Strong programming skills in Python",
              "Experience with ML frameworks (TensorFlow, PyTorch)",
              "Knowledge of statistical analysis",
              "Strong communication skills"
          ],
          companyLogo: "https://images.unsplash.com/photo-1489389944381-3471b5b30f04?w=400&auto=format&fit=crop",
          postedDate: "2024-02-26",
          postedBy: user._id
      },
      {
          id: 5,
          title: "DevOps Engineer",
          slug: "devops-engineer",
          company: "CloudTech Solutions",
          location: "Seattle, WA",
          salary: "$125,000 - $155,000",
          employmentType: "Part-time",
          description: "We're seeking a DevOps Engineer to help build and maintain our cloud infrastructure. You'll work with our engineering team to improve deployment processes and system reliability.",
          requirements: [
              "5+ years of DevOps experience",
              "Strong knowledge of AWS services",
              "Experience with containerization and Kubernetes",
              "Proficiency in Infrastructure as Code",
              "Strong scripting skills"
          ],
          companyLogo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&auto=format&fit=crop",
          postedDate: "2024-02-25",
          postedBy: user._id
      },
      {
          id: 6,
          title: "Sales Development Representative",
          slug: "sales-development-representative",
          company: "GrowthForce",
          location: "Chicago, IL",
          salary: "$50,000 - $70,000 + Commission",
          employmentType: "Full-time",
          description: "Join our sales team to develop new business opportunities. You'll work closely with account executives to drive company growth.",
          requirements: [
              "2+ years of sales experience",
              "Strong communication and negotiation skills",
              "Experience with CRM systems",
              "Goal-oriented mindset",
              "Bachelor's degree preferred"
          ],
          companyLogo: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&auto=format&fit=crop",
          postedDate: "2024-02-24",
          postedBy: user._id
      },
      {
          id: 7,
          title: "Mobile App Developer",
          slug: "mobile-app-developer",
          company: "AppWorks Mobile",
          location: "Austin, TX",
          salary: "$95,000 - $125,000",
          employmentType: "Full-time",
          description: "We're looking for a Mobile App Developer to join our team. You'll work on cutting-edge mobile applications for iOS and Android platforms.",
          requirements: [
              "4+ years of mobile development experience",
              "Proficiency in Swift and Kotlin",
              "Experience with React Native",
              "Understanding of mobile UI/UX principles",
              "Knowledge of app store deployment processes"
          ],
          companyLogo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&auto=format&fit=crop",
          postedDate: "2024-02-23",
          postedBy: user._id
      },
      {
          id: 8,
          title: "Content Marketing Specialist",
          slug: "content-marketing-specialist",
          company: "ContentPro",
          location: "Remote",
          salary: "$60,000 - $80,000",
          employmentType: "Full-time",
          description: "Join our content team to create engaging content across various platforms. You'll work on blog posts, social media, and email campaigns.",
          requirements: [
              "3+ years of content marketing experience",
              "Excellent writing and editing skills",
              "SEO knowledge",
              "Experience with content management systems",
              "Social media expertise"
          ],
          companyLogo: "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=400&auto=format&fit=crop",
          postedDate: "2024-02-22",
          postedBy: user._id
      },
      {
          id: 9,
          title: "HR Business Partner",
          slug: "hr-business-partner",
          company: "PeopleFirst Corp",
          location: "Denver, CO",
          salary: "$85,000 - $105,000",
          employmentType: "Full-time",
          description: "We're seeking an HR Business Partner to support our growing organization. You'll work closely with department leaders to develop and implement HR strategies.",
          requirements: [
              "5+ years of HR experience",
              "PHR/SPHR certification preferred",
              "Strong knowledge of employment laws",
              "Experience with HRIS systems",
              "Excellent interpersonal skills"
          ],
          companyLogo: "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=400&auto=format&fit=crop",
          postedDate: "2024-02-21",
          postedBy: user._id
      },
      {
          id: 10,
          title: "Financial Analyst",
          slug: "financial-analyst",
          company: "FinanceWise Solutions",
          location: "Miami, FL",
          salary: "$75,000 - $95,000",
          employmentType: "Full-time",
          description: "Join our finance team to analyze financial data and provide insights for business decisions. You'll work on financial modeling and reporting.",
          requirements: [
              "3+ years of financial analysis experience",
              "Strong Excel and financial modeling skills",
              "Bachelor's degree in Finance or related field",
              "Experience with financial software",
              "CFA certification preferred"
          ],
          companyLogo: "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=400&auto=format&fit=crop",
          postedDate: "2024-02-20",
          postedBy: user._id
      }
  ]);

    // Create sample blog posts
    await Blog.create([
      {
          id: 1,
          title: "10 Essential Skills Every Software Developer Needs in 2024",
          slug: "essential-software-developer-skills-2024",
          content: "In today's rapidly evolving tech landscape, software developers need to stay ahead of the curve. This comprehensive guide explores the most crucial skills that every developer should master, from cloud computing and AI integration to soft skills that make you stand out in the workplace. We'll dive deep into each skill, providing practical tips and resources for improvement.",
          author: user._id,
          authorImage: "https://randomuser.me/api/portraits/women/1.jpg",
          date: "2024-03-01",
          tags: ["Technology", "Career Development", "Programming"],
          featuredImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop"
      },
      {
          id: 2,
          title: "The Future of Remote Work: Trends and Predictions",
          slug: "future-of-remote-work-trends",
          content: "Remote work has transformed the way we think about employment. This article examines emerging trends in remote work, from hybrid models to digital nomad visas. Learn how companies are adapting their policies and what skills you need to thrive in a remote-first world.",
          author: user._id,
          authorImage: "https://randomuser.me/api/portraits/men/2.jpg",
          date: "2024-02-28",
          tags: ["Remote Work", "Future of Work", "Career Tips"],
          featuredImage: "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?w=800&auto=format&fit=crop"
      },
      {
          id: 3,
          title: "Mastering the Art of Salary Negotiation",
          slug: "mastering-salary-negotiation",
          content: "Negotiating your salary can be intimidating, but it's a crucial skill for career growth. This guide provides step-by-step strategies for successful salary negotiations, including research methods, timing, and effective communication techniques.",
          author: user._id,
          authorImage: "https://randomuser.me/api/portraits/women/3.jpg",
          date: "2024-02-25",
          tags: ["Career Growth", "Negotiation", "Professional Development"],
          featuredImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop"
      },
      {
          id: 4,
          title: "Building a Personal Brand in the Digital Age",
          slug: "personal-brand-digital-age",
          content: "Your personal brand can make or break your career opportunities. Discover how to build and maintain a strong personal brand through social media, networking, and content creation. Learn from real-world examples and implement practical strategies.",
          author: user._id,
          authorImage: "https://randomuser.me/api/portraits/men/4.jpg",
          date: "2024-02-22",
          tags: ["Personal Branding", "Social Media", "Career Strategy"],
          featuredImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop"
      },
      {
          id: 5,
          title: "The Rise of AI in Recruitment: What Job Seekers Need to Know",
          slug: "ai-in-recruitment",
          content: "Artificial Intelligence is revolutionizing the recruitment process. Learn how AI tools are being used in hiring, what this means for job seekers, and how to optimize your application materials for AI screening systems.",
          author: user._id,
          authorImage: "https://randomuser.me/api/portraits/women/5.jpg",
          date: "2024-02-20",
          tags: ["AI", "Recruitment", "Job Search"],
          featuredImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop"
      },
      {
          id: 6,
          title: "Navigating Career Changes: A Complete Guide",
          slug: "navigating-career-changes",
          content: "Thinking about switching careers? This comprehensive guide walks you through the process of career transition, from self-assessment to skill development and networking strategies.",
          author: user._id,
          authorImage: "https://randomuser.me/api/portraits/men/6.jpg",
          date: "2024-02-18",
          tags: ["Career Change", "Professional Growth", "Skills Development"],
          featuredImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop"
      },
      {
          id: 7,
          title: "Workplace Wellness: Maintaining Work-Life Balance",
          slug: "workplace-wellness-balance",
          content: "Maintaining work-life balance is crucial for long-term career success. Explore practical strategies for managing stress, setting boundaries, and prioritizing mental health in the workplace.",
          author: user._id,
          authorImage: "https://randomuser.me/api/portraits/women/7.jpg",
          date: "2024-02-15",
          tags: ["Wellness", "Work-Life Balance", "Mental Health"],
          featuredImage: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&auto=format&fit=crop"
      },
      {
          id: 8,
          title: "Emerging Industries: Where the Jobs Are in 2024",
          slug: "emerging-industries-2024",
          content: "Stay ahead of the curve by learning about the fastest-growing industries and job sectors. This analysis covers emerging fields, required skills, and how to position yourself for opportunities in these areas.",
          author: user._id,
          authorImage: "https://randomuser.me/api/portraits/men/8.jpg",
          date: "2024-02-12",
          tags: ["Industry Trends", "Job Market", "Career Opportunities"],
          featuredImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop"
      },
      {
          id: 9,
          title: "The Power of Networking in the Digital Era",
          slug: "networking-digital-era",
          content: "Digital networking has become more important than ever. Learn effective strategies for building and maintaining professional relationships online, utilizing LinkedIn, and participating in virtual networking events.",
          author: user._id,
          authorImage: "https://randomuser.me/api/portraits/women/9.jpg",
          date: "2024-02-10",
          tags: ["Networking", "Professional Development", "Social Media"],
          featuredImage: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&auto=format&fit=crop"
      },
      {
          id: 10,
          title: "Interview Success: Advanced Techniques and Tips",
          slug: "interview-success-techniques",
          content: "Master the art of interviewing with advanced techniques and strategies. From behavioral questions to technical assessments, learn how to prepare and present yourself effectively in any interview situation.",
          author: user._id,
          authorImage: "https://randomuser.me/api/portraits/men/10.jpg",
          date: "2024-02-08",
          tags: ["Interviews", "Job Search", "Career Tips"],
          featuredImage: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=800&auto=format&fit=crop"
      }
  ]);

  
    console.log('Sample data seeded successfully');
    console.log('Test user credentials:');
    console.log('Email: test@example.com');
    console.log('Password: Password@123');
  } catch (error) {
    console.error('Error seeding data:', error);
    throw error;
  }
};

module.exports = seedData;