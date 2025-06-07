import { Container, Typography, Grid, Card, CardContent, CardActions, Button, Box, Avatar, Chip } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const Blog = () => {
    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Typography 
                variant="h4" 
                component="h1" 
                gutterBottom 
                sx={{ 
                    fontWeight: 600,
                    mb: 4
                }}
            >
                Career Insights & Tips
            </Typography>
            <Grid container spacing={4}>
                {blogPosts.map((post) => (
                    <Grid item xs={12} md={4} key={post.id}>
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
                                    paddingTop: '56.25%',
                                    position: 'relative',
                                    backgroundImage: `url(${post.featuredImage})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Box sx={{ mb: 2 }}>
                                    {post.tags.map((tag, index) => (
                                        <Chip
                                            key={index}
                                            label={tag}
                                            size="small"
                                            sx={{ 
                                                mr: 1,
                                                mb: 1,
                                                backgroundColor: 'primary.light',
                                                color: 'primary.main'
                                            }}
                                        />
                                    ))}
                                </Box>
                                <Typography 
                                    variant="h6" 
                                    gutterBottom
                                    sx={{ 
                                        fontWeight: 600,
                                        lineHeight: 1.3
                                    }}
                                >
                                    {post.title}
                                </Typography>
                                <Typography 
                                    variant="body2" 
                                    color="text.secondary"
                                    sx={{ mb: 2 }}
                                >
                                    {post.content.substring(0, 150)}...
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Avatar 
                                        src={post.authorImage}
                                        sx={{ 
                                            width: 32,
                                            height: 32,
                                            mr: 1
                                        }}
                                    >
                                        {post.author[0]}
                                    </Avatar>
                                    <Box>
                                        <Typography variant="subtitle2">
                                            {post.author}
                                        </Typography>
                                        <Typography variant="caption" color="text.secondary">
                                            {new Date(post.date).toLocaleDateString()}
                                        </Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                            <CardActions sx={{ p: 2, pt: 0 }}>
                                <Button 
                                    component={RouterLink}
                                    to={`/blog/${post.slug}`}
                                    variant="outlined" 
                                    fullWidth
                                    sx={{ 
                                        textTransform: 'none',
                                        fontWeight: 600
                                    }}
                                >
                                    Read More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Blog;