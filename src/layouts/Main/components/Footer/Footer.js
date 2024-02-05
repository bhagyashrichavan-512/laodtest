import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
// import { useTheme } from '@mui/material/styles';

const Footer = () => {
  // const theme = useTheme();
  // const { mode } = theme.palette;

  return (
    <Grid container spacing={2} style={{ backgroundColor: '#f3f4f6' }}>
      {/* First Column (Logo) */}
      <Grid item xs={12} sm={4}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={1}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          {/* <h1>TrafficLoad</h1> */}
          <img
            src="https://en.wikialpha.org/mediawiki/images/1/11/SparkTraffic_%28Logo%29.png"
            alt="TrafficLoad Logo"
            width="200"
            height="100"
          />
          {/* Add logo image here if needed */}
        </Box>
      </Grid>

      {/* Second Column (Links) */}
      <Grid item xs={12} sm={4}>
        {/* Add your links or navigation components here */}
        <ul>
          <h1>Main Office</h1>
          <p>
            <h3>123 Anywhere St.</h3>
          </p>
          <p>
            <h3>Any City, State</h3>
          </p>
          <p>
            <h3>Any Country</h3>
          </p>
          <p>
            <h3>(123) 456 7890</h3>
          </p>
        </ul>
      </Grid>

      {/* Third Column (Address) */}
      <Grid item xs={12} sm={4}>
        {/* Add your address or contact information here */}
        <h1>Social Media</h1>
        <p>
          <h3>Facebook</h3>
        </p>
        <p>
          <h3>Instagram</h3>
        </p>
        <p>
          <h3>Twitter</h3>
        </p>
        <p>
          <h3>connect@trafficanalytic.com</h3>
        </p>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2" align="center" color="textSecondary">
          <span style={{ color: 'black' }}>
            <h2> &copy; @2024 TrafficLoad. All rights reserved.</h2>
          </span>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
