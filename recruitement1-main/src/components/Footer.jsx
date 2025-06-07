import { Box, Container, Grid, Typography, Link, IconButton, Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'white',
        py: 6,
        mt: 'auto',
        borderTop: '1px solid',
        borderColor: 'grey.200'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              component={RouterLink}
              to="/"
              sx={{
                color: 'primary.main',
                textDecoration: 'none',
                fontWeight: 700,
                mb: 2,
                display: 'block'
              }}
            >
              JobSearch
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Connecting talented professionals with their dream careers. Find the perfect job opportunity that matches your skills and aspirations.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton color="primary" aria-label="Facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton color="primary" aria-label="Twitter">
                <TwitterIcon />
              </IconButton>
              <IconButton color="primary" aria-label="LinkedIn">
                <LinkedInIcon />
              </IconButton>
              <IconButton color="primary" aria-label="Instagram">
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="subtitle1" color="text.primary" sx={{ fontWeight: 600, mb: 2 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link component={RouterLink} to="/" color="text.secondary" sx={{ textDecoration: 'none' }}>
                Home
              </Link>
              <Link component={RouterLink} to="/jobs" color="text.secondary" sx={{ textDecoration: 'none' }}>
                Find Jobs
              </Link>
              <Link component={RouterLink} to="/blog" color="text.secondary" sx={{ textDecoration: 'none' }}>
                Career Blog
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle1" color="text.primary" sx={{ fontWeight: 600, mb: 2 }}>
              Job Categories
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="#" color="text.secondary" sx={{ textDecoration: 'none' }}>
                Technology
              </Link>
              <Link href="#" color="text.secondary" sx={{ textDecoration: 'none' }}>
                Marketing
              </Link>
              <Link href="#" color="text.secondary" sx={{ textDecoration: 'none' }}>
                Finance
              </Link>
              <Link href="#" color="text.secondary" sx={{ textDecoration: 'none' }}>
                Healthcare
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle1" color="text.primary" sx={{ fontWeight: 600, mb: 2 }}>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography variant="body2" color="text.secondary">
                Email: contact@jobsearch.com
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Phone: +1 (555) 123-4567
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Address: 123 Job Street, Career City, 12345
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} JobSearch. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Link href="#" color="text.secondary" sx={{ textDecoration: 'none', fontSize: '0.875rem' }}>
              Privacy Policy
            </Link>
            <Link href="#" color="text.secondary" sx={{ textDecoration: 'none', fontSize: '0.875rem' }}>
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;