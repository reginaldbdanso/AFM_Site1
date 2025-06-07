import { Container, Typography, Box, Button, Chip, Paper, List, ListItem, ListItemIcon, ListItemText, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Grid } from '@mui/material';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { jobListings } from '../data/jobListings';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import WorkIcon from '@mui/icons-material/Work';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const JobDetails = () => {
    const [openApply, setOpenApply] = useState(false);
    const [application, setApplication] = useState({
        name: '',
        email: '',
        phone: '',
        coverLetter: ''
    });

    const { slug } = useParams();
    const job = jobListings.find(job => job.slug === slug);

    if (!job) {
        return (
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Typography variant="h4">Job not found</Typography>
            </Container>
        );
    }

    const handleApply = () => {
        setOpenApply(true);
    };

    const handleClose = () => {
        setOpenApply(false);
    };

    const handleSubmit = () => {
        // Here you would typically send the application to your backend
        console.log('Application submitted:', application);
        setOpenApply(false);
        // Reset form
        setApplication({
            name: '',
            email: '',
            phone: '',
            coverLetter: ''
        });
    };

    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <Paper sx={{ p: 4, mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 4 }}>
                    <Box>
                        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
                            {job.title}
                        </Typography>
                        
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <BusinessIcon sx={{ mr: 1, color: 'text.secondary' }} />
                            <Typography variant="h6" color="text.secondary">
                                {job.company}
                            </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', gap: 3, color: 'text.secondary' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <LocationOnIcon sx={{ mr: 1 }} />
                                <Typography>{job.location}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <AttachMoneyIcon sx={{ mr: 1 }} />
                                <Typography>{job.salary}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <WorkIcon sx={{ mr: 1 }} />
                                <Typography>{job.employmentType}</Typography>
                            </Box>
                        </Box>
                    </Box>
                    
                    <Box 
                        component="img"
                        src={job.companyLogo}
                        alt={job.company}
                        sx={{
                            width: 100,
                            height: 100,
                            objectFit: 'cover',
                            borderRadius: 2
                        }}
                    />
                </Box>

                <Button 
                    variant="contained" 
                    size="large"
                    onClick={handleApply}
                    sx={{ 
                        px: 4,
                        py: 1.5,
                        fontSize: '1.1rem',
                        fontWeight: 600
                    }}
                >
                    Apply Now
                </Button>
            </Paper>

            <Grid container spacing={4}>
                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 4, mb: 4 }}>
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                            Job Description
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
                            {job.description}
                        </Typography>

                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                            Requirements
                        </Typography>
                        <List>
                            {job.requirements.map((requirement, index) => (
                                <ListItem key={index} sx={{ px: 0 }}>
                                    <ListItemIcon>
                                        <CheckCircleOutlineIcon color="primary" />
                                    </ListItemIcon>
                                    <ListItemText primary={requirement} />
                                </ListItem>
                            ))}
                        </List>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 4 }}>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                            Job Overview
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <Box>
                                <Typography variant="subtitle2" color="text.secondary">
                                    Posted Date
                                </Typography>
                                <Typography>
                                    {new Date(job.postedDate).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant="subtitle2" color="text.secondary">
                                    Location
                                </Typography>
                                <Typography>{job.location}</Typography>
                            </Box>
                            <Box>
                                <Typography variant="subtitle2" color="text.secondary">
                                    Salary Range
                                </Typography>
                                <Typography>{job.salary}</Typography>
                            </Box>
                            <Box>
                                <Typography variant="subtitle2" color="text.secondary">
                                    Employment Type
                                </Typography>
                                <Typography>{job.employmentType}</Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>

            <Dialog open={openApply} onClose={handleClose} maxWidth="md" fullWidth>
                <DialogTitle sx={{ fontWeight: 600 }}>
                    Apply for {job.title}
                </DialogTitle>
                <DialogContent>
                    <Box sx={{ pt: 2, display: 'flex', flexDirection: 'column', gap: 3 }}>
                        <TextField
                            label="Full Name"
                            fullWidth
                            value={application.name}
                            onChange={(e) => setApplication({ ...application, name: e.target.value })}
                        />
                        <TextField
                            label="Email"
                            type="email"
                            fullWidth
                            value={application.email}
                            onChange={(e) => setApplication({ ...application, email: e.target.value })}
                        />
                        <TextField
                            label="Phone"
                            fullWidth
                            value={application.phone}
                            onChange={(e) => setApplication({ ...application, phone: e.target.value })}
                        />
                        <TextField
                            label="Cover Letter"
                            multiline
                            rows={4}
                            fullWidth
                            value={application.coverLetter}
                            onChange={(e) => setApplication({ ...application, coverLetter: e.target.value })}
                        />
                    </Box>
                </DialogContent>
                <DialogActions sx={{ p: 3 }}>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button 
                        variant="contained"
                        onClick={handleSubmit}
                        sx={{ px: 4 }}
                    >
                        Submit Application
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default JobDetails;