import React from 'react';
import Slider from 'react-slick';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const mock = [
  {
    companyLogo:
      //   'https://assets.maccarianagency.com/svg/logos/airbnb-original.svg',
      'assets/Safety.png',
    description:
      'Make sure to review Googles advertising policies regularly to ensure your ad content remains compliant. Additionally, specific industries. ',
  },
  {
    companyLogo:
      // 'https://assets.maccarianagency.com/svg/logos/amazon-original.svg',
      'assets/guranted.png',
    description:
      'Always review Googles advertising policies and guidelines to ensure that your ad content is compliant. Avoid making absolute guarantees, and focus on highlighting the value.',
  },
  {
    companyLogo:
      // 'https://assets.maccarianagency.com/svg/logos/fitbit-original.svg',
      'assets/geocity.png',
    description:
      'Ensure compliance with Googles advertising policies and guidelines, and consider the specific preferences and interests of your target audience in the designated location. ',
  },
  {
    companyLogo:
      // 'https://assets.maccarianagency.com/svg/logos/google-original.svg',
      'assets/organic.png',
    description:
      'Elevate your online presence with our organic, natural-looking traffic solutions. We specialize in driving authentic engagement to your website, creating meaningful.',
  },
  {
    companyLogo:
      // 'https://assets.maccarianagency.com/svg/logos/hubspot-original.svg',
      'assets/money.png',
    description:
      'Make sure that your money-back guarantee policy is clear, and the timeframe for requesting a refund is specified. This transparency helps build trust with potential customers.',
  },
  {
    companyLogo:
      // 'https://assets.maccarianagency.com/svg/logos/mapbox-original.svg',
      'assets/available.png',
    description:
      'Highlighting the availability of 24/7 customer service helps build trust with your audience and reassures them that assistance is always within reach.',
  },
  {
    companyLogo:
      // 'https://assets.maccarianagency.com/svg/logos/netflix-original.svg',
      'assets/Country.png',
    description:
      'When promoting language targeting, its essential to highlight the inclusivity and adaptability of your product or service to various linguistic preferences in most countries.',
  },
  {
    companyLogo:
      // 'https://assets.maccarianagency.com/svg/logos/paypal-original.svg',
      'assets/language.png',
    description:
      'PayPal is the faster, safer way to send money, make an online payment, receive money or set up a merchant account most important language is engliash.',
  },
];

const Safety = () => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const isXs = useMediaQuery(theme.breakpoints.up('xs'), {
    defaultMatches: true,
  });
  const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true,
  });
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  let slidesToShow = 1;
  if (isXs) {
    slidesToShow = 1;
  }
  if (isSm) {
    slidesToShow = 2;
  }
  if (isMd) {
    slidesToShow = 3;
  }

  const sliderOpts = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
          align={'center'}
        >
          Safety & Guarantee
        </Typography>
        <Typography fontWeight={700} variant={'h3'} align={'center'}>
          The Most Advanced Website
          <br />
          Traffic Generator
        </Typography>
      </Box>
      <Slider {...sliderOpts}>
        {mock.map((item, i) => (
          <Box key={i} padding={{ xs: 1, sm: 2, md: 3 }}>
            <Box
              component={'a'}
              href={''}
              display={'block'}
              width={1}
              height={1}
              sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <Box
                component={Card}
                width={1}
                height={1}
                borderRadius={2}
                display={'flex'}
                flexDirection={'column'}
                style={{ backgroundColor: '#272c7D' }}
              >
                <Box
                  component={CardContent}
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
                >
                  <Box maxWidth={100} marginBottom={2}>
                    <Box
                      component="img"
                      height={1}
                      width={1}
                      src={item.companyLogo}
                      alt="..."
                      sx={{
                        filter: mode === 'dark' ? 'contrast(0)' : 'none',
                      }}
                    />
                  </Box>
                  <Typography
                    align={'center'}
                    variant={'body2'}
                    color="secondary"
                    sx={{
                      // fontWeight: 'bold', // Set font weight to bold
                      fontFamily: 'Arial, sans-serif', // Set a common sans-serif font
                      fontSize: '1.2rem', // Adjust font size for readability
                      lineHeight: 1.6, // Adjust line height for readability
                      // Add other styling properties as needed
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
                <Box flexGrow={1} />
                <Box component={CardActions} justifyContent={'center'}>
                  <Button size="large">Learn more</Button>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};
export default Safety;
