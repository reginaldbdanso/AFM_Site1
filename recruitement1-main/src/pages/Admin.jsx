import { Container, Typography } from '@mui/material';

const Admin = () => {
    return (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Admin Panel
            </Typography>
            <Typography variant="body1" paragraph>
                Welcome to the admin panel. This area is restricted to authorized personnel only.
            </Typography>
        </Container>
    );
};

export default Admin;