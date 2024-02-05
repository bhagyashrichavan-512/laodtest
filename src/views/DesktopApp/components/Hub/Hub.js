import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';  // Import Grid component
import Button from '@mui/material/Button';
// import List from '@mui/material/List';


const Hero = () => {
  const products = [
    {
      pages:"6 000",
      heading:"Up to 6 000 page views",
      name: "Nano",
      description: "Nano is a tiny traffic package with limited functionality.FREE",
      price:"FREE",
      get:"GET FREE TRAFFIC",
      topic:"Up to 6 000 page views every month",
      topic2:"2 pages per visit,",  
      topic3:"Up to 30 seconds per page",
      topic4:"Night and Day traffic volume change",
      topic5:"Day of Week traffic volume change",
      topic6:"Countries Geo-Targeting",
    },
    {
      pages:"60 000",
      heading:"Up to 60 000 page views",
      name: "Mini",
      description: "A small package with some features available",
      price:"from $5.96",
      get:"GET FREE TRAFFIC",
      topic:"Up to 10 000 000 page views every month",
      topic2:"3 pages per visit",  
      topic3:"Up to 5 minutes per page",
      topic4:"Countries Geo-Targeting",
      topic5:"Day of Week traffic volume change",
    },
    {
      pages:"300 000",
      heading:"Up to 300 000 page views",
      name: "Medium",
      description: "A good amount of traffic at an affordable price",
      price:" $17.96",
      get:"BUY TRAFFIC!",
      rule:"Not happy during the first 7 days? We refund the payment!",
      topic:"Up to  10 000 000 page views every month",
      topic2:"3 pages per visit",
      topic3:"Up to 5 minutes per page",
      topic4:"Night and Day traffic volume change",
      topic5:"Day of Week traffic volume change",
      topic6:"Countries Geo-Targeting",

    },
    {
      pages:"600 000",
      heading:"Up to 600 000 page views",
      name: "Large",
      description: "Advanced features with a good amount of traffic",
      price:" $35.96",
      get:"BUY TRAFFIC!",
      rule:"Not happy during the first 7 days? We refund the payment!",
      topic:"Up to 10 000 000 page views every month",
      topic2:"3 pages per visit",
      topic3:"Up to 5 minutes per page",
      topic4:"Night and Day traffic volume change",
      topic5:"Day of Week traffic volume change",
      topic6:"Connect your RSS or Sitemap",
      topic7:"Countries Geo-Targeting",
      topic8:"Cities Geo-Targeting",

    },
    {
      pages:"1 000 000",
      heading:"Up to 1 000 000 page views",
      name: "Ultimate",
      description: "All the features available with the perfect big traffic volume",
      price:" $59.96",
      get:"BUY TRAFFIC!",
      rule:"Not happy during the first 7 days? We refund the payment!",
      topic:"Up to 10 000 000 page views every month",
      topic2:"3 pages per visit",
      topic3:"Up to 5 minutes per page",
      topic4:"Night and Day traffic volume change",
      topic5:"Day of Week traffic volume change",
      topic6:"Connect your RSS or Sitemap",
      topic7:"Countries Geo-Targeting",
      topic8:"Cities Geo-Targeting",
    },
    {
      pages:"10 000 000",
      heading:"Up to 10 000 000 page views",
      name: "Max",
      description: "All the features available with the perfect big traffic volume",
      price:" $699.96",
      get:"BUY TRAFFIC!",
      rule:"Not happy during the first 7 days? We refund the payment!",
      topic:"Up to 10 000 000 page views every month",
      topic2:"3 pages per visit",
      topic3:"Up to 5 minutes per page",
      topic4:"Night and Day traffic volume change",
      topic5:"Day of Week traffic volume change",
      topic6:"Connect your RSS or Sitemap",
      topic7:"Countries Geo-Targeting",
      topic8:"Cities Geo-Targeting",
    },
    {
      pages:"10 000 000+",
      heading:"10 000 000+ page views",
      name: "Max+",
      description: "Contact us about 10M+ traffic packages ",
      price:"Contact Us",
      topic:"Up to 10 000 000 page views every month",
      topic2:"3 pages per visit",
      topic3:"Up to 5 minutes per page",
      topic4:"Night and Day traffic volume change",
      topic5:"Day of Week traffic volume change",
      topic6:"Connect your RSS or Sitemap",
      topic7:"Countries Geo-Targeting",
      topic8:"Cities Geo-Targeting",
    },
  ];

  const [selectedProductIndex, setSelectedProductIndex] = useState(0);

  const handleSliderChange = (_, nextValue) => {
    const newIndex = Math.floor((nextValue / 100) * (products.length - 1));
    setSelectedProductIndex(newIndex);
  }; 

  
  const handleViewPagesClick = () => {
    // Add your logic for handling the "View Pages" button click
    console.log('View Pages button clicked!');
  };
  return (
    
    
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 4 }}>
    <Typography variant="h2" gutterBottom align="center" sx={{ fontWeight: 900 }}>
      Website Traffic Pricing Plans
    </Typography>
    <Typography
      variant="h6"
      component="p"
      color="text.secondary"
      sx={{
        color: 'secondary',
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.5',
        textAlign: 'center',
      }}
    >
      Buy Website Traffic at the market's lowest prices per visit. The prices are shown per website.
      <br />
      If you have multiple websites, please purchase a plan for each. We provide discounts of
      <br />
      up to 40% depending on the number of plans you would like to purchase.
      <br />
    </Typography>
    <br />
    <br />
    <Button
      variant="contained"
      color="primary"
      sx={{ borderRadius: '20px', mb: 2 }}
      onClick={handleViewPagesClick}
    >
      <Typography variant="h6" fontWeight="bold">
        View Pages {products[selectedProductIndex].pages}
      </Typography>
    </Button>
    <Box sx={{ width: '50%' }}>
      <Slider
        onChange={handleSliderChange}
        min={0}
        max={100}
        defaultValue={0}
        sx={{ height: '8px' }}
      />
    </Box>
    <br />
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 4 }}>
        <Box sx={{ width: '40%' }}>
        {/* <Slider
          onChange={handleSliderChange}
          min={0}
          max={100}
          defaultValue={0}
        /> */}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', height: '400px', width: '800px' }}>
  <Card>
    <Grid container spacing={2} >
      <Grid item xs={6}>
      <Box display="flex" alignItems="center" p={2}>
     
        <Box>
          <Grid container>
            {/* Left side (logo) */}
            <Grid item xs={4}>
              <img 
                src="https://assets-global.website-files.com/6308ae40c4ce25dfccd2eaa8/650f158e9aad1a83c3eb5aff_646fbd94d58fe540ff5e6ead_speedometer-ultimate.webp" 
                alt="Logo" 
                style={{ 
                  marginRight: '10px',
                  height: '80px', // Adjust the height as needed
                  width: 'auto'   // Let the width adjust automatically to maintain aspect ratio
                }} 
              />
            </Grid>
            {/* Right side */}
            <Grid item xs={6}>
              <Box>
                <Typography  color="primary" alignItems="center">
                  {products[selectedProductIndex].heading}
                </Typography>
                <Typography 
                        variant="h4" 
                        style={{ 
                          textAlign: 'center', 
                          fontWeight: 'bold', 
                          color:"#170f49"  
                        }}
                  >
                    {products[selectedProductIndex].name}
                  </Typography>
              </Box>
            </Grid>
          </Grid>
          
          <Typography  color="#272c7d"  p={3}>
            {products[selectedProductIndex].description}
          </Typography>
          <Typography variant="h2" marginLeft={"20px"} color="#170f49" fontWeight= 'bold'  >
            {products[selectedProductIndex].price}
          </Typography>
          <Typography variant="h5" marginTop={"10px"}  marginLeft={"20px"} marginRight={"110px"} fontWeight= 'bold' backgroundColor="#1c7ee0" >
            {products[selectedProductIndex].get}
          </Typography>
          <Typography  marginTop={"10px"}  marginLeft={"20px"} color="#272c7d">
            {products[selectedProductIndex].rule}
          </Typography>
        </Box>
      </Box>

      </Grid>
      <Grid item xs={6} sx={{ width: '100%', maxWidth: '50%' ,backgroundColor: '#F0F0F0' }}>
        <Box display="flex" alignItems="center" p={2}>
          <Box>
            <Typography variant="h6" color="#170f49" fontWeight= 'bold'>
              What’s included
            </Typography>
            <Typography  color="#170f49">
              <img src="https://assets-global.website-files.com/6308ae40c4ce25dfccd2eaa8/646e004df9b384f481a80437_check-icon-brix-templates.svg" alt="" style={{ width: '20px', height: '20px' }} /> 
              {products[selectedProductIndex].topic}
            </Typography>
            <Typography  color="#170f49">
            <img src="https://assets-global.website-files.com/6308ae40c4ce25dfccd2eaa8/646e004df9b384f481a80437_check-icon-brix-templates.svg" alt="" style={{ width: '20px', height: '20px' }} />
              {products[selectedProductIndex].topic2}
            </Typography>
            <Typography color="#170f49">
            <img src="https://assets-global.website-files.com/6308ae40c4ce25dfccd2eaa8/646e004df9b384f481a80437_check-icon-brix-templates.svg" alt="" style={{ width: '20px', height: '20px' }} />
              {products[selectedProductIndex].topic3}
            </Typography>
            <Typography color="#170f49">
            <img src="https://assets-global.website-files.com/6308ae40c4ce25dfccd2eaa8/646e004df9b384f481a80437_check-icon-brix-templates.svg" alt="" style={{ width: '20px', height: '20px' }} />
              {products[selectedProductIndex].topic4}
            </Typography>
            <Typography color="#170f49">
            <img src="https://assets-global.website-files.com/6308ae40c4ce25dfccd2eaa8/646e004df9b384f481a80437_check-icon-brix-templates.svg" alt="" style={{ width: '20px', height: '20px' }} />
              {products[selectedProductIndex].topic5}
            </Typography>
            <Typography color="#170f49">
            <img src="https://assets-global.website-files.com/6308ae40c4ce25dfccd2eaa8/646e004df9b384f481a80437_check-icon-brix-templates.svg" alt="" style={{ width: '20px', height: '20px' }} />
              {products[selectedProductIndex].topic6}
            </Typography>
            <Typography color="#170f49">
            <img src="https://assets-global.website-files.com/6308ae40c4ce25dfccd2eaa8/646e004df9b384f481a80437_check-icon-brix-templates.svg" alt="" style={{ width: '20px', height: '20px' }} />
              {products[selectedProductIndex].topic7}
            </Typography>
            <Typography color="#170f49">
            <img src="https://assets-global.website-files.com/6308ae40c4ce25dfccd2eaa8/646e004df9b384f481a80437_check-icon-brix-templates.svg" alt="" style={{ width: '20px', height: '20px' }} />
              {products[selectedProductIndex].topic8}
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  </Card>
</Box>
</Box>
<Box sx={{ width: "100%", maxWidth: "800px", mt: 4 }}>
  <Card>
    <CardContent>
      <Typography variant="h6" gutterBottom>
        {/* Selected Product: */}
      </Typography>
      <Grid container spacing={2}>
        {/* First part (occupying 12 grid units on mobile, 6 on larger screens) */}
        <Grid item xs={12} sm={6}>
          <Box>
            {/* Content for the first part */}
            <Box>
              <Grid container alignItems="center" spacing={1}>
                <Grid item>
                  <img src="assets/organic (2).png" alt="" style={{ width: '24px', height: '24px' }} />
                </Grid>
                <Grid item>
                  <Typography variant="h6" gutterBottom>
                    Organic Website Traffic
                  </Typography>
                </Grid>
              </Grid>
              {/* Repeat similar structures for other lines of text */}
              <Grid container alignItems="center" spacing={1}>
                        <Grid item>
                          <img src="assets/social.png" alt="" style={{ width: '24px', height: '24px' }} />
                        </Grid>
                        <Grid item>
                          <Typography variant="h6" gutterBottom >
                          Social Website Traffic
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid container alignItems="center" spacing={1}>
                        <Grid item>
                          <img src="assets/referral.png" alt="" style={{ width: '24px', height: '24px' }} />
                        </Grid>
                        <Grid item>
                          <Typography variant="h6" gutterBottom >
                          Referral Website Traffic
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid container alignItems="center" spacing={1}>
                        <Grid item>
                          <img src="assets/direct.png" alt="" style={{ width: '24px', height: '24px' }} />
                        </Grid>
                        <Grid item>
                          <Typography variant="h6" gutterBottom >
                          Direct Website Traffic
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid container alignItems="center" spacing={1}>
                        <Grid item>
                          <img src="assets/utm.png" alt="" style={{ width: '24px', height: '24px' }} />
                        </Grid>
                        <Grid item>
                          <Typography variant="h6" gutterBottom >
                          UTM campaigns
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid container alignItems="center" spacing={1}>
                        <Grid item>
                        <img src="assets/organic (2).png" alt="" style={{ width: '24px', height: '24px' }} />
                        </Grid>
                        <Grid item>
                          <Typography variant="h6" gutterBottom >
                          Shorteners like bit.ly, cutt.ly
                          </Typography>
                        </Grid>
                      </Grid>
            </Box>
          </Box>
        </Grid>

        {/* Second part (occupying 12 grid units on mobile, 6 on larger screens) */}
        <Grid item xs={12} sm={6}>
          <Box>
            {/* Content for the second part */}
            <Box>
              <Grid container alignItems="center" spacing={1}>
                <Grid item>
                  <img src="assets/countries.png" alt="" style={{ width: '24px', height: '24px' }} />
                </Grid>
                <Grid item>
                  <Typography variant="h6" gutterBottom>
                    Countries Geo-Targeting
                  </Typography>
                </Grid>
              </Grid>
              {/* Repeat similar structures for other lines of text */}
              <Grid container alignItems="center" spacing={1}>
                        <Grid item>
                          <img src="assets/unique.png" alt="" style={{ width: '24px', height: '24px' }} />
                        </Grid>
                        <Grid item>
                          <Typography variant="h6" gutterBottom >
                          Unique residential IP addresses
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid container alignItems="center" spacing={1}>
                        <Grid item>
                          <img src="assets/random.png" alt="" style={{ width: '24px', height: '24px' }} />
                        </Grid>
                        <Grid item>
                          <Typography variant="h6" gutterBottom >
                          Random session time
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid container alignItems="center" spacing={1}>
                        <Grid item>
                          <img src="assets/minute.png" alt="" style={{ width: '24px', height: '24px' }} />
                        </Grid>
                        <Grid item>
                          <Typography variant="h6" gutterBottom >
                          Up to 5 minutes visit on every page
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid container alignItems="center" spacing={1}>
                        <Grid item>
                          <img src="assets/bounce.png" alt="" style={{ width: '24px', height: '24px' }} />
                        </Grid>
                        <Grid item>
                          <Typography variant="h6" gutterBottom >
                          Bounce Rate Control
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid container alignItems="center" spacing={1}>
                        <Grid item>
                          <img src="assets/server.png" alt="" style={{ width: '24px', height: '24px' }} />
                        </Grid>
                        <Grid item>
                          <Typography variant="h6" gutterBottom >
                          Minimize server load bandwidth
                          </Typography>
                        </Grid>
                      </Grid>
                      
            </Box>
          </Box>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
</Box>
  </Box>
);
};


export default Hero;
