import { Container, Typography, Box, Avatar, Chip, Divider } from '@mui/material';
import { useParams } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const BlogDetails = () => {
    const { slug } = useParams();
    const post = blogPosts.find(post => post.slug === slug);

    if (!post) {
        return (
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Typography variant="h4">Blog post not found</Typography>
            </Container>
        );
    }

    return (
        <Container maxWidth="md" sx={{ py: 8 }}>
            <Box sx={{ mb: 6 }}>
                <Typography 
                    variant="h3" 
                    component="h1" 
                    gutterBottom
                    sx={{ 
                        fontWeight: 700,
                        mb: 3
                    }}
                >
                    {post.title}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Avatar 
                        src={post.authorImage}
                        sx={{ width: 48, height: 48, mr: 2 }}
                    >
                        {post.author[0]}
                    </Avatar>
                    <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                            {post.author}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {new Date(post.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{ mb: 4 }}>
                    {post.tags.map((tag, index) => (
                        <Chip
                            key={index}
                            label={tag}
                            sx={{ 
                                mr: 1,
                                mb: 1,
                                backgroundColor: 'primary.light',
                                color: 'primary.main'
                            }}
                        />
                    ))}
                </Box>

                <Box 
                    component="img"
                    src={post.featuredImage}
                    alt={post.title}
                    sx={{
                        width: '100%',
                        height: 400,
                        objectFit: 'cover',
                        borderRadius: 2,
                        mb: 4
                    }}
                />

                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    {post.content}
                </Typography>
            </Box>
        </Container>
    );
};

export default BlogDetails;