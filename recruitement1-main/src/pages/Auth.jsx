import { useState } from 'react';
import { Container, Paper, Tabs, Tab, Box, Typography, TextField, Button, Divider, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WorkIcon from '@mui/icons-material/Work';
import PersonIcon from '@mui/icons-material/Person';

const Auth = () => {
    const [tab, setTab] = useState(0);
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        companyName: ''
    });

    const handleTabChange = (event, newValue) => {
        setTab(newValue);
        setIsLogin(true);
        setFormData({
            email: '',
            password: '',
            confirmPassword: '',
            companyName: ''
        });
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle authentication logic here
        console.log('Form submitted:', formData);
    };

    return (
        <Container maxWidth="sm" sx={{ py: 8 }}>
            <Paper sx={{ p: 4, borderRadius: 2 }}>
                <Tabs
                    value={tab}
                    onChange={handleTabChange}
                    variant="fullWidth"
                    sx={{ mb: 4 }}
                >
                    <Tab 
                        icon={<PersonIcon />} 
                        label="Jobseeker" 
                        iconPosition="start"
                    />
                    <Tab 
                        icon={<WorkIcon />} 
                        label="Employer" 
                        iconPosition="start"
                    />
                </Tabs>

                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, textAlign: 'center' }}>
                    {isLogin ? 'Welcome Back!' : 'Create an Account'}
                </Typography>
                <Typography color="text.secondary" sx={{ mb: 4, textAlign: 'center' }}>
                    {isLogin 
                        ? 'Sign in to access your account' 
                        : `Register as a ${tab === 0 ? 'jobseeker' : 'employer'}`
                    }
                </Typography>

                <form onSubmit={handleSubmit}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        {!isLogin && tab === 1 && (
                            <TextField
                                label="Company Name"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleInputChange}
                                fullWidth
                                required
                            />
                        )}
                        <TextField
                            label="Email Address"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            fullWidth
                            required
                        />
                        <TextField
                            label="Password"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            fullWidth
                            required
                        />
                        {!isLogin && (
                            <TextField
                                label="Confirm Password"
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                fullWidth
                                required
                            />
                        )}
                        <Button 
                            type="submit"
                            variant="contained"
                            size="large"
                            fullWidth
                            sx={{ 
                                py: 1.5,
                                fontSize: '1.1rem',
                                fontWeight: 600
                            }}
                        >
                            {isLogin ? 'Sign In' : 'Create Account'}
                        </Button>
                    </Box>
                </form>

                <Divider sx={{ my: 3 }}>or continue with</Divider>

                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button
                        variant="outlined"
                        fullWidth
                        startIcon={<GoogleIcon />}
                        sx={{ py: 1.5 }}
                    >
                        Google
                    </Button>
                    <Button
                        variant="outlined"
                        fullWidth
                        startIcon={<LinkedInIcon />}
                        sx={{ py: 1.5 }}
                    >
                        LinkedIn
                    </Button>
                </Box>

                <Box sx={{ mt: 3, textAlign: 'center' }}>
                    <Typography variant="body2" color="text.secondary">
                        {isLogin ? "Don't have an account? " : "Already have an account? "}
                        <Link
                            component="button"
                            variant="body2"
                            onClick={() => setIsLogin(!isLogin)}
                            sx={{ fontWeight: 600 }}
                        >
                            {isLogin ? 'Sign Up' : 'Sign In'}
                        </Link>
                    </Typography>
                </Box>
            </Paper>
        </Container>
    );
};

export default Auth;