/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Pricing = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column-reverse'}>
        <Grid item xs={12} md={6} data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Box marginBottom={4}>
            <Box
              component="img"
              height={1}
              width={1}
              src={'assets/logo.jpeg'}
              alt="..."
              maxWidth={{ xs: 80, sm: 100, md: 120 }}
              marginBottom={2}
              sx={{
                filter:
                  theme.palette.mode === 'dark'
                    ? 'brightness(0) invert(0.7)'
                    : 'none',
              }}
            />
            <Typography
              variant="h6"
              component="p"
              color="Secondary" // Set font color to black
              sx={{
                fontFamily: 'Arial, sans-serif', // Set a common sans-serif font
                fontWeight: '', // Set font weight to bold
                fontSize: '1.2rem', // Adjust font size for readability
                lineHeight: 1.6, // Adjust line height for readability
                textAlign: 'center', // Center-align the text
              }}
            >
              <h1>Premium Website Traffic</h1>
              <h5>Warning: Premium traffic is temporarily unavailable</h5>
              Generate traffic constantly with our Premium Website Traffic
              service. We promise you high-quality paid website traffic from
              real people. We guarantee results in your Google Analytics with
              the possibility of actual leads, sales, and conversions. This is
              100% human-qualified and converting traffic.
            </Typography>

            <Box marginTop={{ xs: 2, sm: 4 }}>
              <Typography variant={'h6'} sx={{ fontWeight: 700 }}>
                Jhon Anderson
              </Typography>
              <Typography color="text.secondary">MUI lover</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
          sx={{
            display: { xs: 'none', md: 'flex' },
          }}
        >
          <Box component={Card} boxShadow={4} height={1} width={1}>
            <Box
              component={CardMedia}
              height={1}
              width={1}
              minHeight={300}
              image="assets/premium.png"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Pricing;
