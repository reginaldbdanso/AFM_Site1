import { Container, Typography, Grid, Card, CardContent, CardActions, Button, Box, Chip, TextField, MenuItem, InputAdornment, Paper, FormGroup, FormControlLabel, Checkbox, Slider, Select, Pagination } from '@mui/material';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { jobListings } from '../data/jobListings';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import BusinessIcon from '@mui/icons-material/Business';

const industries = [
    { id: 'tech', label: 'Technology' },
    { id: 'finance', label: 'Finance' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'retail', label: 'Retail' },
    { id: 'manufacturing', label: 'Manufacturing' },
    { id: 'education', label: 'Education' },
    { id: 'consulting', label: 'Consulting' },
    { id: 'media', label: 'Media & Entertainment' }
];

const employmentTypes = [
    { id: 'Full-time', label: 'Full Time' },
    { id: 'Part-time', label: 'Part Time' },
    { id: 'Contract', label: 'Contract' },
    { id: 'Internship', label: 'Internship' }
];

const ITEMS_PER_PAGE = 10;

const Jobs = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedIndustries, setSelectedIndustries] = useState([]);
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [salaryRange, setSalaryRange] = useState([0, 200]);
    const [sortBy, setSortBy] = useState('date');
    const [page, setPage] = useState(1);

    const handleIndustryChange = (industryId) => {
        setSelectedIndustries(prev => {
            if (prev.includes(industryId)) {
                return prev.filter(id => id !== industryId);
            }
            return [...prev, industryId];
        });
    };

    const handleTypeChange = (typeId) => {
        setSelectedTypes(prev => {
            if (prev.includes(typeId)) {
                return prev.filter(id => id !== typeId);
            }
            return [...prev, typeId];
        });
    };

    const handleSalaryChange = (event, newValue) => {
        setSalaryRange(newValue);
    };

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
    };

    const handlePageChange = (event, value) => {
        setPage(value);
        // Scroll to top when page changes
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    let filteredJobs = jobListings.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesType = selectedTypes.length === 0 || selectedTypes.includes(job.employmentType);
        const matchesIndustry = selectedIndustries.length === 0 || selectedIndustries.includes('tech');
        
        const salaryMatch = job.salary.match(/\$(\d+),(\d+)/);
        const jobSalary = salaryMatch ? parseInt(salaryMatch[1] + salaryMatch[2]) : 0;
        const matchesSalary = jobSalary >= salaryRange[0] * 1000 && jobSalary <= salaryRange[1] * 1000;

        return matchesSearch && matchesType && matchesIndustry && matchesSalary;
    });

    // Sort jobs based on selected criteria
    filteredJobs.sort((a, b) => {
        switch (sortBy) {
            case 'title':
                return a.title.localeCompare(b.title);
            case 'titleDesc':
                return b.title.localeCompare(a.title);
            case 'salary':
                const salaryA = parseInt(a.salary.match(/\$(\d+),(\d+)/)[1] + a.salary.match(/\$(\d+),(\d+)/)[2]);
                const salaryB = parseInt(b.salary.match(/\$(\d+),(\d+)/)[1] + b.salary.match(/\$(\d+),(\d+)/)[2]);
                return salaryB - salaryA;
            case 'date':
                return new Date(b.postedDate) - new Date(a.postedDate);
            default:
                return 0;
        }
    });

    // Calculate pagination
    const totalPages = Math.ceil(filteredJobs.length / ITEMS_PER_PAGE);
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const paginatedJobs = filteredJobs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 600 }}>
                Available Jobs
            </Typography>

            {/* Search and Sort Bar */}
            <Box sx={{ mb: 4 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Search jobs..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon color="action" />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Select
                            fullWidth
                            value={sortBy}
                            onChange={handleSortChange}
                        >
                            <MenuItem value="date">Most Recent</MenuItem>
                            <MenuItem value="title">Title (A-Z)</MenuItem>
                            <MenuItem value="titleDesc">Title (Z-A)</MenuItem>
                            <MenuItem value="salary">Highest Salary</MenuItem>
                        </Select>
                    </Grid>
                </Grid>
            </Box>

            <Grid container spacing={3}>
                {/* Filters Sidebar */}
                <Grid item xs={12} md={3}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                            Filters
                        </Typography>
                        
                        <Box sx={{ mb: 4 }}>
                            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                                Job Type
                            </Typography>
                            <FormGroup>
                                {employmentTypes.map((type) => (
                                    <FormControlLabel
                                        key={type.id}
                                        control={
                                            <Checkbox
                                                checked={selectedTypes.includes(type.id)}
                                                onChange={() => handleTypeChange(type.id)}
                                            />
                                        }
                                        label={type.label}
                                    />
                                ))}
                            </FormGroup>
                        </Box>

                        <Box sx={{ mb: 4 }}>
                            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                                Industries
                            </Typography>
                            <FormGroup>
                                {industries.map((industry) => (
                                    <FormControlLabel
                                        key={industry.id}
                                        control={
                                            <Checkbox
                                                checked={selectedIndustries.includes(industry.id)}
                                                onChange={() => handleIndustryChange(industry.id)}
                                            />
                                        }
                                        label={industry.label}
                                    />
                                ))}
                            </FormGroup>
                        </Box>

                        <Box>
                            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                                Salary Range (K)
                            </Typography>
                            <Slider
                                value={salaryRange}
                                onChange={handleSalaryChange}
                                valueLabelDisplay="auto"
                                min={0}
                                max={200}
                                step={10}
                                marks={[
                                    { value: 0, label: '$0K' },
                                    { value: 100, label: '$100K' },
                                    { value: 200, label: '$200K' }
                                ]}
                            />
                        </Box>
                    </Paper>
                </Grid>

                {/* Jobs Grid */}
                <Grid item xs={12} md={9}>
                    <Box sx={{ mb: 3 }}>
                        <Typography color="text.secondary">
                            Showing {Math.min(startIndex + 1, filteredJobs.length)} - {Math.min(startIndex + ITEMS_PER_PAGE, filteredJobs.length)} of {filteredJobs.length} jobs
                        </Typography>
                    </Box>

                    <Grid container spacing={3}>
                        {paginatedJobs.map((job) => (
                            <Grid item xs={12} md={6} key={job.id}>
                                <Card 
                                    sx={{ 
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        '&:hover': {
                                            boxShadow: 6
                                        }
                                    }}
                                >
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                                            <Box sx={{ flex: 1 }}>
                                                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                                                    {job.title}
                                                </Typography>
                                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                                    <BusinessIcon sx={{ fontSize: 20, mr: 1, color: 'text.secondary' }} />
                                                    <Typography variant="subtitle1" color="text.secondary">
                                                        {job.company}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                            <Box 
                                                component="img"
                                                src={job.companyLogo}
                                                alt={job.company}
                                                sx={{
                                                    width: 60,
                                                    height: 60,
                                                    objectFit: 'cover',
                                                    borderRadius: 1,
                                                    ml: 2
                                                }}
                                            />
                                        </Box>
                                        
                                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                            <LocationOnIcon sx={{ fontSize: 20, mr: 1, color: 'text.secondary' }} />
                                            <Typography variant="body2" color="text.secondary">
                                                {job.location}
                                            </Typography>
                                        </Box>
                                        <Chip 
                                            label={job.employmentType}
                                            size="small"
                                            sx={{ 
                                                backgroundColor: 'primary.main',
                                                color: 'white',
                                                fontWeight: 500,
                                                mb: 2
                                            }}
                                        />
                                        <Typography variant="body2" sx={{ color: 'success.main', fontWeight: 500 }}>
                                            {job.salary}
                                        </Typography>
                                    </CardContent>
                                    <CardActions sx={{ p: 2, pt: 0 }}>
                                        <Button 
                                            component={RouterLink}
                                            to={`/jobs/${job.slug}`}
                                            variant="contained" 
                                            size="large"
                                            fullWidth
                                            sx={{ 
                                                textTransform: 'none',
                                                fontWeight: 600
                                            }}
                                        >
                                            View Details
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
                            <Pagination 
                                count={totalPages} 
                                page={page} 
                                onChange={handlePageChange}
                                color="primary"
                                size="large"
                            />
                        </Box>
                    )}
                </Grid>
            </Grid>
        </Container>
    );
};

export default Jobs;