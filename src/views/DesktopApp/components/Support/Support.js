/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';

const mock = [
  {
    image: 'assets/picture3.png',
    description:
      'Auto traffic bot or human traffic bot is an automated traffic generating software designed to deliver natural-looking, high-quality website traffic.Our software provides all of the tools to tailor the traffic to your needs.Choose your preferred Traffic Speed, Bounce and Return rates, URLs, time zones, and much more.',
    title: 'What Is Automated Traffic Bot?',
    tags: [],
    // 'UX', 'Design', 'Themes', 'Photography'
    author: {
      name: 'Clara Bertoletti',
      avatar: 'https://assets.maccarianagency.com/avatars/img3.jpg',
    },
    date: '04 Aug',
  },
  {
    image: 'assets/picture2.png',
    description:
      'Unique website visits or individual visits to a website from a single user over a given period is one of the most critical metrics of website traffic. SparkTraffic is an automated tool that will increase visits to your website in any volume you need.',
    title: 'Generate Website Visits',
    tags: [],
    // 'UX', 'Design', 'Themes', 'Photography'
    author: {
      name: 'Jhon Anderson',
      avatar: 'https://assets.maccarianagency.com/avatars/img5.jpg',
    },
    date: '12 Sep',
  },
  {
    image: 'assets/picture1.png',
    description:
      'The traffic from high-quality traffic bots should look like authentic website traffic, have real human behaviour, and look natural in the traffic reports.That is what makes SparkTraffics high-quality traffic-bot stand out from the competition. We generate traffic that looks like natural organic traffic on your website.',
    title: 'Good Website Traffic',
    tags: [],
    // 'UX', 'Design', 'Themes', 'Photography'
    author: {
      name: 'Clara Bertoletti',
      avatar: 'https://assets.maccarianagency.com/avatars/img3.jpg',
    },
    date: '04 Aug',
  },
];

const Support = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h3"
          data-aos={'fade-up'}
          align={'center'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          #1 Traffic Bot
          <br />
          Website Traffic Generator
        </Typography>
        <Typography
          variant="h6"
          component="p"
          color="text.secondary"
          style={{
            color: '',
            fontFamily: 'Arial, sans-serif',
            //  fontWeight: 'bold',
            lineHeight: '1.5',
            textAlign: 'center',
            fontStyle: 'italic',
          }}
        >
          "Boost Your Presence, Amplify Your Reach –
          <br />
          #1 Traffic Bot, Your Ultimate Website Traffic Generator!"
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid key={i} item xs={12}>
            <Box
              component={Card}
              width={1}
              height={1}
              borderRadius={0}
              boxShadow={0}
              display={'flex'}
              flexDirection={{
                xs: 'column',
                md: i % 2 === 0 ? 'row-reverse' : 'row',
              }}
              sx={{ backgroundImage: 'none', bgcolor: 'transparent' }}
            >
              <Box
                sx={{
                  width: { xs: 1, md: '50%' },
                }}
              >
                <Box
                  component={'img'}
                  loading="lazy"
                  height={1}
                  width={1}
                  src={item.image}
                  alt="..."
                  sx={{
                    objectFit: 'cover',
                    maxHeight: 360,
                    borderRadius: 2,
                    filter:
                      theme.palette.mode === 'dark'
                        ? 'brightness(0.7)'
                        : 'none',
                  }}
                />
              </Box>
              <CardContent
                sx={{
                  paddingX: { xs: 1, sm: 2, md: 4 },
                  paddingY: { xs: 2, sm: 4 },
                  width: { xs: 1, md: '50%' },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Box>
                  {item.tags.map((item) => (
                    <Chip
                      key={item}
                      label={item}
                      component="a"
                      href=""
                      clickable
                      size={'small'}
                      color={'primary'}
                      sx={{ marginBottom: 1, marginRight: 1 }}
                    />
                  ))}
                </Box>
                <Typography
                  variant={'h6'}
                  fontWeight={700}
                  sx={{ textTransform: 'uppercase' }}
                >
                  {item.title}
                </Typography>
                <Box marginY={1}>
                  <Typography
                    variant={'caption'}
                    color={'text.black'}
                    component={'i'}
                  >
                    {item.author.name} - {item.date}
                  </Typography>
                </Box>
                <Typography
                  // color=""black
                  sx={{
                    fontFamily: 'Roboto, Arial, sans-serif', // Set a sans-serif font
                    // fontWeight: 'bold', // Set font weight to bold
                    fontSize: '1.2rem', // Adjust font size for readability
                    lineHeight: 1.6, // Adjust line height for readability
                  }}
                >
                  {item.description}
                </Typography>

                <Box marginTop={2} display={'flex'} justifyContent={'flex-end'}>
                  <Button
                    endIcon={
                      <Box
                        component={'svg'}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width={24}
                        height={24}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </Box>
                    }
                  >
                    Read More
                  </Button>
                </Box>
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Support;
