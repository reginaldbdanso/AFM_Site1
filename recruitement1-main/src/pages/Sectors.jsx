import { Container, Typography, Grid, Card, CardContent, Box } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import BusinessIcon from '@mui/icons-material/Business';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import EngineeringIcon from '@mui/icons-material/Engineering';

const sectors = [
    {
        title: 'Technology',
        icon: CodeIcon,
        description: 'From startups to tech giants, find roles in software development, cybersecurity, and IT infrastructure.',
        color: '#2196f3'
    },
    {
        title: 'Finance',
        icon: AccountBalanceIcon,
        description: 'Opportunities in banking, investment management, fintech, and insurance sectors.',
        color: '#4caf50'
    },
    {
        title: 'Healthcare',
        icon: LocalHospitalIcon,
        description: 'Careers in hospitals, pharmaceutical companies, biotech, and healthcare technology.',
        color: '#f44336'
    },
    {
        title: 'Business Services',
        icon: BusinessIcon,
        description: 'Roles in consulting, professional services, and business operations.',
        color: '#ff9800'
    },
    {
        title: 'Retail & E-commerce',
        icon: ShoppingBasketIcon,
        description: 'Positions in digital retail, merchandising, and supply chain management.',
        color: '#9c27b0'
    },
    {
        title: 'Manufacturing',
        icon: EngineeringIcon,
        description: 'Opportunities in production, quality control, and industrial engineering.',
        color: '#795548'
    }
];

const Sectors = () => {
    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <Typography 
                variant="h3" 
                component="h1" 
                gutterBottom
                sx={{ 
                    fontWeight: 700,
                    mb: 2,
                    textAlign: 'center'
                }}
            >
                Our Sectors
            </Typography>
            <Typography 
                variant="h6" 
                color="text.secondary"
                sx={{ 
                    mb: 6,
                    textAlign: 'center',
                    maxWidth: 800,
                    mx: 'auto'
                }}
            >
                We specialize in connecting talented professionals with opportunities across diverse industries
            </Typography>

            <Grid container spacing={4}>
                {sectors.map((sector, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
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
                                <Box 
                                    sx={{ 
                                        display: 'flex',
                                        alignItems: 'center',
                                        mb: 2
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 60,
                                            height: 60,
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundColor: `${sector.color}15`,
                                            mb: 2
                                        }}
                                    >
                                        <sector.icon sx={{ fontSize: 30, color: sector.color }} />
                                    </Box>
                                </Box>
                                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                                    {sector.title}
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    {sector.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Sectors;