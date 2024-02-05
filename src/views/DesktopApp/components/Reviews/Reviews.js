import React from 'react';
import Slider from 'react-slick';
import { Paper, Typography, Button, Container, Grid } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  text-align: center;
  font-family: '"Bebas Neue"', 'Roboto', '"Helvetica Neue"', 'Arial',
    'sans-serif';
  color: secondary; /* Set a light color for night mode */
  font-size: 2.5em; /* Adjust the font size as needed */
`;

const features = [
  {
    title: 'Marketing ',
    description: 'Boost sales with our versatile sales platform.',
    topFeatures: [
      'Multichannel campaigns',
      'Marketing automation',
      '24/7 customer support',
    ],
  },
  {
    title: 'Sales Platform',
    description: 'Boost sales with our versatile sales platform.',
    topFeatures: [
      'Versatile sales tools',
      'Real-time analytics',
      '24/7 customer support',
    ],
  },
  {
    title: 'Conversations ',
    description: 'Boost sales with our versatile sales platform.',
    topFeatures: [
      'Real-time conversations',
      'Customer engagement',
      '24/7 customer support',
    ],
  },
  {
    title: 'Messaging API',
    description: 'Boost sales with our versatile sales platform.',
    topFeatures: [
      'Powerful messaging API',
      'Customization options',
      '24/7 customer support',
    ],
  },
  {
    title: 'New Feature',
    description: 'Boost sales with our versatile sales platform.',
    topFeatures: [
      'Cutting-edge technology',
      'In-depth customization',
      '24/7 customer support',
    ],
  },
];

const Reviews = () => {
  const cardStyles = [
    { backgroundColor: 'pink', buttonColor: 'pink' },
    { backgroundColor: 'lightblue', buttonColor: 'lightblue' },
    { backgroundColor: 'lightgreen', buttonColor: 'green' },
    { backgroundColor: 'lightcoral', buttonColor: 'coral' },
    { backgroundColor: 'lightgray', buttonColor: 'gray' }, // Added a new card style
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Display four cards in one row
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
          breakpoint: 600, // screens with a width less than or equal to 600 pixels
          settings: {
            slidesToShow: 1,
          },
        },
      ]
  };

  return (
    <Container>
      <StyledH1>
        "TrafficLoad: Drive Success with Targeted Traffic Solutions."
      </StyledH1>
      <Slider {...settings} >
        {features.map((feature, index) => (
          <Grid container key={index}>
            <Grid item xs={12} md={8} lg={3} >
              <Paper
                elevation={3}
                style={{
                  ...cardStyles[index],
                  padding: '20px',
                  textAlign: 'center',
                  width: '350%',
                  height: '400px',
                  borderRadius: '30px 0 0 30px',
                  border: '2px solid black',
                }}
              >
                <Typography
                  variant="h5"
                  gutterBottom
                  style={{
                    color: 'black',
                    fontWeight: 'bold',
                    marginBottom: '15px',
                  }}
                >
                  {feature.title}
                </Typography>
                <div style={{ padding: '10px' }}>
                  <Typography
                    variant="body1"
                    color="black"
                    paragraph
                    style={{ fontSize: '16px', lineHeight: '1.6' }}
                  >
                    {feature.description}
                  </Typography>
                </div>
                <div style={{ marginTop: '20px' }}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    style={{
                      color: 'black',
                      fontWeight: 'bold',
                      marginBottom: '10px',
                    }}
                  >
                    Top Features
                  </Typography>
                  <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {feature.topFeatures.map((feature, index) => (
                      <li
                        key={index}
                        style={{
                          marginBottom: '8px',
                          fontSize: '14px',
                          color: 'black',
                        }}
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
  variant="contained"
  style={{
    backgroundColor: cardStyles[index].buttonColor,
    color: 'black',
    borderRadius: '20px',
    border: '2px solid black', // Add border style
    width: '80%', // Set width as a percentage for responsiveness
    maxWidth: '200px', // Set a maximum width if needed
  }}
>
  Learn More
</Button>
              </Paper>
            </Grid>
          </Grid>
        ))}
      </Slider>
    </Container>
  );
};

export default Reviews;
