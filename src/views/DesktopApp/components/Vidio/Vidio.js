/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Vidio = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Grid container spacing={4}>
      <Grid item container alignItems={'center'} xs={12} md={6}>
        <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Box marginBottom={2}>
            <Typography
              color={'primary'}
              component={'span'}
              variant="h4"
              sx={{ fontWeight: 700 }}
            >
              The World's best website traffic generator
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography
              variant="h6"
              component="p"
              color="black" // Set font color to black
              sx={{
                fontFamily: 'Arial, sans-serif', // Set a common sans-serif font
                fontWeight: 'bold', // Set font weight to bold
                fontSize: '1.2rem', // Adjust font size for readability
                lineHeight: 1.6, // Adjust line height for readability
                // Add other styling properties as needed
              }}
            >
              No card is required, and the traffic will appear in your Google
              Analytics in less than 20 minutes.
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection={'column'}
            justifyContent={'center'}
          >
            <Box marginBottom={2}>
              <Typography
                variant="body1"
                color="black"
                component="div" // Use a div as the component to include nested p elements
                sx={{
                  fontFamily: 'Arial, sans-serif', // Set a common sans-serif font
                  fontSize: '1.1rem', // Adjust font size for readability
                  lineHeight: 1.6, // Adjust line height for readability
                  // Add other styling properties as needed
                }}
              >
                <p>1. Register at app.sparktraffic.com/register</p>
                <p>2. Click on Add New Project link</p>
                <p>3. Fill in the form and click on the blue button</p>
              </Typography>
            </Box>
            <Box
              component={'form'}
              noValidate
              autoComplete="off"
              sx={{
                '& .MuiInputBase-input.MuiOutlinedInput-input': {
                  bgcolor: 'background.paper',
                },
              }}
            >
              <Box
                display="flex"
                flexDirection={{ xs: 'column', sm: 'row' }}
                alignItems={{ xs: 'stretched', sm: 'flex-start' }}
              >
                {/* <Box
                  flex={'1 1 auto'}
                  component={TextField}
                  label="Enter your email"
                  variant="outlined"
                  color="primary"
                  fullWidth
                  height={54}
                /> */}
                {/* <Box
                  component={Button}
                  variant="contained"
                  color="primary"
                  size="large"
                  height={54}
                  marginTop={{ xs: 2, sm: 0 }}
                  marginLeft={{ sm: 2 }}
                >
               </Box> */}
                <hr />
                <Box marginBottom={2}>
                  <Typography variant="body1" component="p" color="black">
                    Wait 10-20 minutes and check your Google Analytics. You
                    should witness a spike of new traffic.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          height={1}
          width={1}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Box height={1} width={1} maxHeight={600}>
            <Box
              component={'iframe'}
              title="video"
              width="100%"
              height="100%"
              minHeight={320}
              src="https://www.youtube.com/embed/ClIbn_IF31U"
              frameBorder="0"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              boxShadow={4}
              borderRadius={2}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Vidio;
