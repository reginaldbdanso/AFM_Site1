import { Container, Typography, Grid, Card, CardContent, Box, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const teamMembers = [
    {
        name: 'Sarah Johnson',
        role: 'CEO & Founder',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop',
        bio: 'With over 15 years in recruitment, Sarah founded JobSearch with a vision to transform how people find their dream careers.',
        linkedin: '#',
        twitter: '#'
    },
    {
        name: 'Michael Chen',
        role: 'CTO',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop',
        bio: 'A tech veteran with experience at major Silicon Valley companies, Michael leads our technological innovation.',
        linkedin: '#',
        twitter: '#'
    },
    {
        name: 'Emily Rodriguez',
        role: 'Head of Recruitment',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop',
        bio: 'Emily brings 10 years of recruitment expertise, specializing in matching top talent with leading companies.',
        linkedin: '#',
        twitter: '#'
    },
    {
        name: 'David Kim',
        role: 'Marketing Director',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop',
        bio: 'David drives our marketing strategies, ensuring we connect employers with the best candidates.',
        linkedin: '#',
        twitter: '#'
    }
];

const Team = () => {
    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <Typography 
                variant="h3" 
                component="h1" 
                gutterBottom
                sx={{ 
                    fontWeight: 700,
                    mb: 6,
                    textAlign: 'center'
                }}
            >
                Meet Our Team
            </Typography>

            <Grid container spacing={4}>
                {teamMembers.map((member, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
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
                            <Box
                                sx={{
                                    paddingTop: '100%',
                                    position: 'relative',
                                    backgroundImage: `url(${member.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                                    {member.name}
                                </Typography>
                                <Typography 
                                    variant="subtitle1" 
                                    color="primary"
                                    gutterBottom
                                    sx={{ fontWeight: 500 }}
                                >
                                    {member.role}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" paragraph>
                                    {member.bio}
                                </Typography>
                                <Box sx={{ display: 'flex', gap: 1 }}>
                                    <IconButton href={member.linkedin} color="primary" size="small">
                                        <LinkedInIcon />
                                    </IconButton>
                                    <IconButton href={member.twitter} color="primary" size="small">
                                        <TwitterIcon />
                                    </IconButton>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Team;
