import { Container, Typography, Box, Button, Grid, Paper } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupIcon from '@mui/icons-material/Group';
import { Link } from 'react-router-dom';

// Company logos for the Trusted By section
const trustedCompanies = [
    {
        name: 'Microsoft',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg'
    },
    {
        name: 'Google',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg'
    },
    {
        name: 'Amazon',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
    },
    {
        name: 'Meta',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg'
    },
    {
        name: 'Apple',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg'
    },
    {
        name: 'IBM',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg'
    }
];

const Home = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            {/* Hero Section - Increased height by 30% */}
            <Box
                sx={{
                    position: 'relative',
                    color: 'white',
                    py: { xs: 15, md: 20 }, // Increased from py: { xs: 10, md: 12 }
                    mb: 8, // Increased from mb: 6
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: 'url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&auto=format&fit=crop)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'brightness(0.4)',
                        zIndex: -1
                    }
                }}
            >
                <Container maxWidth="lg">
                    <Grid container spacing={6} alignItems="center"> {/* Increased spacing from 4 */}
                        <Grid item xs={12} md={6}>
                            <Typography 
                                variant="h2" 
                                component="h1" 
                                sx={{ 
                                    fontWeight: 700,
                                    mb: 3, // Increased from mb: 2
                                    fontSize: { xs: '3rem', md: '4rem' }, // Increased from '2.5rem' and '3.5rem'
                                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                                }}
                            >
                                Find Your Dream Job Today
                            </Typography>
                            <Typography 
                                variant="h5" // Changed from h6 for larger text
                                sx={{ 
                                    mb: 6, // Increased from mb: 4
                                    opacity: 0.9,
                                    fontWeight: 400,
                                    textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                                    lineHeight: 1.6 // Added line height for better readability
                                }}
                            >
                                Connect with top employers and discover opportunities that match your skills and aspirations.
                            </Typography>
                            <Button 
                                component={Link}
                                to="/jobs"
                                variant="contained" 
                                size="large"
                                sx={{ 
                                    bgcolor: 'white',
                                    color: 'primary.main',
                                    py: 2, // Increased padding
                                    px: 6, // Increased padding
                                    fontSize: '1.2rem', // Increased font size
                                    '&:hover': {
                                        bgcolor: 'grey.100'
                                    }
                                }}
                            >
                                Browse Jobs
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Career Fair Section - Increased height by 30% */}
            <Container maxWidth="lg" sx={{ mb: 12 }}> {/* Increased from mb: 8 */}
                <Paper 
                    sx={{ 
                        borderRadius: 2,
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' }
                    }}
                >
                    <Box
                        sx={{
                            width: { xs: '100%', md: '50%' },
                            height: { xs: '400px', md: '520px' }, // Increased from '300px' and '400px'
                            backgroundImage: 'url(https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    />
                    <Box 
                        sx={{ 
                            p: 6, // Increased from p: 4
                            width: { xs: '100%', md: '50%' },
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}
                    >
                        <Typography 
                            variant="overline" 
                            sx={{ 
                                color: 'primary.main',
                                fontWeight: 600,
                                letterSpacing: 1.5, // Increased from 1
                                fontSize: '1rem' // Increased font size
                            }}
                        >
                            Upcoming Event
                        </Typography>
                        <Typography 
                            variant="h3" // Changed from h4 for larger text
                            component="h2" 
                            sx={{ 
                                fontWeight: 700,
                                mb: 3 // Increased from mb: 2
                            }}
                        >
                            Spring Tech Career Fair 2024
                        </Typography>
                        <Typography 
                            variant="h6" // Changed from body1 for larger text
                            sx={{ 
                                color: 'text.secondary',
                                mb: 4, // Increased from mb: 3
                                lineHeight: 1.8 // Added line height for better readability
                            }}
                        >
                            Join us for our annual career fair featuring top tech companies from Silicon Valley. Network with industry leaders, attend workshops, and find your next career opportunity.
                        </Typography>
                        <Box sx={{ mb: 4 }}> {/* Increased from mb: 3 */}
                            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                                📅 March 15, 2024
                            </Typography>
                            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                                📍 Tech Convention Center
                            </Typography>
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                🕒 9:00 AM - 5:00 PM
                            </Typography>
                        </Box>
                        <Button 
                            variant="contained" 
                            size="large"
                            sx={{ 
                                width: 'fit-content',
                                px: 6, // Increased from px: 4
                                py: 2, // Increased from py: 1.5
                                fontSize: '1.2rem', // Increased from '1.1rem'
                                fontWeight: 600
                            }}
                        >
                            Register Now
                        </Button>
                    </Box>
                </Paper>
            </Container>

            {/* Features Section - Increased height by 30% */}
            <Container maxWidth="lg" sx={{ mb: 12 }}> {/* Increased from mb: 8 */}
                <Grid container spacing={6}> {/* Increased from spacing: 4 */}
                    <Grid item xs={12} md={4}>
                        <Paper 
                            elevation={0}
                            sx={{ 
                                p: 6, // Increased from p: 4
                                height: '100%',
                                backgroundColor: 'grey.50',
                                borderRadius: 2
                            }}
                        >
                            <WorkIcon color="primary" sx={{ fontSize: 52, mb: 3 }} /> {/* Increased from fontSize: 40, mb: 2 */}
                            <Typography variant="h4" component="h2" gutterBottom> {/* Changed from h5 */}
                                Latest Jobs
                            </Typography>
                            <Typography variant="h6" color="text.secondary"> {/* Changed from body text */}
                                Access thousands of job listings from top companies across various industries.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper 
                            elevation={0}
                            sx={{ 
                                p: 6, // Increased from p: 4
                                height: '100%',
                                backgroundColor: 'grey.50',
                                borderRadius: 2
                            }}
                        >
                            <TrendingUpIcon color="primary" sx={{ fontSize: 52, mb: 3 }} /> {/* Increased from fontSize: 40, mb: 2 */}
                            <Typography variant="h4" component="h2" gutterBottom> {/* Changed from h5 */}
                                Career Growth
                            </Typography>
                            <Typography variant="h6" color="text.secondary"> {/* Changed from body text */}
                                Get insights and advice from industry experts through our career blog.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper 
                            elevation={0}
                            sx={{ 
                                p: 6, // Increased from p: 4
                                height: '100%',
                                backgroundColor: 'grey.50',
                                borderRadius: 2
                            }}
                        >
                            <GroupIcon color="primary" sx={{ fontSize: 52, mb: 3 }} /> {/* Increased from fontSize: 40, mb: 2 */}
                            <Typography variant="h4" component="h2" gutterBottom> {/* Changed from h5 */}
                                Network
                            </Typography>
                            <Typography variant="h6" color="text.secondary"> {/* Changed from body text */}
                                Connect with professionals and expand your professional network.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>

            {/* Trusted By Section - Increased height by 30% */}
            <Box sx={{ bgcolor: 'grey.50', py: 12, mb: -6 }}> {/* Increased from py: 10 */}
                <Container maxWidth="lg">
                    <Typography 
                        variant="h3" // Changed from h4 for larger text
                        component="h2" 
                        align="center" 
                        gutterBottom
                        sx={{ 
                            fontWeight: 700,
                            mb: 8 // Increased from mb: 6
                        }}
                    >
                        Trusted By Leading Companies
                    </Typography>
                    <Grid 
                        container 
                        spacing={8} // Increased from spacing: 6
                        justifyContent="center" 
                        alignItems="center"
                        sx={{ mb: 8 }} // Increased from mb: 6
                    >
                        {trustedCompanies.map((company, index) => (
                            <Grid 
                                item 
                                xs={6} 
                                sm={4} 
                                md={2} 
                                key={index}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    py: 3 // Increased from py: 2
                                }}
                            >
                                <Box
                                    component="img"
                                    src={company.logo}
                                    alt={company.name}
                                    sx={{
                                        height: 68, // Increased from 52
                                        maxWidth: '100%',
                                        filter: 'grayscale(100%)',
                                        opacity: 0.7,
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            filter: 'grayscale(0%)',
                                            opacity: 1
                                        }
                                    }}
                                />
                            </Grid>
                        ))}
                    </Grid>
                    <Typography 
                        variant="h6" // Changed from body1 for larger text
                        align="center" 
                        color="text.secondary"
                        sx={{ maxWidth: 800, mx: 'auto', mb: 6 }} // Increased width and margin
                    >
                        We work with industry leaders to connect talented professionals with exceptional opportunities.
                    </Typography>
                </Container>
            </Box>
        </Box>
    );
};

export default Home;