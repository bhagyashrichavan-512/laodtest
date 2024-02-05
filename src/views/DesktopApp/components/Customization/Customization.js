import React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

const mock = [
  {
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    name: 'Clara Bertoletti',
    title: 'MUI lover',
    avatar: 'https://assets.maccarianagency.com/avatars/img1.jpg',
    rating: 5,
  },
  // ... (other data entries)
  {
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    name: 'Clara Bertoletti',
    title: 'MUI lover',
    avatar: 'https://assets.maccarianagency.com/avatars/img2.jpg',
    rating: 5,
  },
  {
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    name: 'Clara Bertoletti',
    title: 'MUI lover',
    avatar: 'https://assets.maccarianagency.com/avatars/img3.jpg',
    rating: 5,
  },
  {
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    name: 'Clara Bertoletti',
    title: 'MUI lover',
    avatar: 'https://assets.maccarianagency.com/avatars/img4.jpg',
    rating: 5,
  },
  {
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    name: 'Clara Bertoletti',
    title: 'MUI lover',
    avatar: 'https://assets.maccarianagency.com/avatars/img6.jpg',
    rating: 5,
  },
  {
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    name: 'Clara Bertoletti',
    title: 'MUI lover',
    avatar: 'https://assets.maccarianagency.com/avatars/img5.jpg',
    rating: 5,
  },
  {
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    name: 'Clara Bertoletti',
    title: 'MUI lover',
    avatar: 'https://assets.maccarianagency.com/avatars/img4.jpg',
    rating: 5,
  },
  {
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    name: 'Clara Bertoletti',
    title: 'MUI lover',
    avatar: 'https://assets.maccarianagency.com/avatars/img3.jpg',
    rating: 5,
  },
  {
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    name: 'Clara Bertoletti',
    title: 'MUI lover',
    avatar: 'https://assets.maccarianagency.com/avatars/img2.jpg',
    rating: 5,
  },
];

const Customization = () => {
  const theme = useTheme();

  // Calculate average rating
  const averageRating =
    mock.reduce((total, item) => total + item.rating, 0) / mock.length;

  return (
    <Box padding={4}>
      <Box marginBottom={4} textAlign="center">
        <Typography variant="h4" gutterBottom fontWeight={700}>
          What our clients say about Buying Website Traffic at SparkTraffic:
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Discover the experiences of our clients who have chosen SparkTraffic
          for their website traffic needs.
          <br />
          Read what they have to say about their journey.
          <br />
          the impact of our services on their online presence.
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box
              width={1}
              height={1}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              data-aos-offset={100}
              data-aos-duration={600}
              component={Card}
              display="flex"
              flexDirection="column"
              boxShadow={i === 1 ? 4 : 0}
              bgcolor={i === 1 ? theme.palette.primary.main : 'white'}
              borderRadius={8}
            >
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                }}
              >
                <Box marginBottom={1}>
                  <Box display="flex" justifyContent="flex-start">
                    {[1, 2, 3, 4, 5].map((index) => (
                      <Box key={index} color={theme.palette.secondary.main}>
                        <svg
                          width={18}
                          height={18}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          {/* Use your existing SVG path */}
                          <path d="M9.049 2.927c.3-..."></path>
                        </svg>
                      </Box>
                    ))}
                  </Box>
                </Box>
                <Typography color={i === 1 ? 'common.white' : 'text.secondary'}>
                  {item.feedback}
                </Typography>
              </CardContent>
              <CardActions sx={{ paddingBottom: 2 }}>
                <ListItem component="div" disableGutters sx={{ padding: 0 }}>
                  <ListItemAvatar>
                    <Avatar src={item.avatar} />
                  </ListItemAvatar>
                  <ListItemText
                    sx={{ margin: 0 }}
                    primary={item.name}
                    secondary={item.title}
                    primaryTypographyProps={{
                      color: i === 1 ? 'common.white' : 'text.primary',
                    }}
                    secondaryTypographyProps={{
                      color: i === 1 ? 'common.white' : 'text.secondary',
                    }}
                  />
                </ListItem>
              </CardActions>
            </Box>
          </Grid>
        ))}
      </Grid>
      {/* <Box marginTop={4} textAlign="center">
        <Typography variant="h5" color="text.secondary">
          Average Rating: {averageRating.toFixed(2)}
        </Typography>
      </Box> */}
    </Box>
  );
};

export default Customization;
