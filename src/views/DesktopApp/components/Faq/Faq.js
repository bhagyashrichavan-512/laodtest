import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FaqGroupItem = ({ title, items }) => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={2}>
        <Box marginBottom={2} textAlign="center">
          {' '}
          {/* Added textAlign="center" */}
          <Typography fontWeight={700} variant={'h4'}>
            {title}
          </Typography>
        </Box>
      </Box>
      <Grid container spacing={2}>
        {items.map((item, i) => (
          <Grid item xs={12} sm={6} key={i}>
            <Accordion
              padding={1}
              marginBottom={i === items.length - 1 ? 0 : 2}
              borderRadius={`${theme.spacing(1)} !important`}
              sx={{
                '&::before': {
                  display: 'none',
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${i + 1}a-content`}
                id={`panel${i + 1}a-header--${i}`}
              >
                <Typography fontWeight={600}>{item.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="text.secondary">{item.subtitle}</Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

FaqGroupItem.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

const Faq = () => {
  return (
    <Box>
      <Box marginBottom={6}>
        <FaqGroupItem
          title={'Frequently Asked Questions'}
          items={[
            {
              title: 'What is your refund policy for traffic?',
              subtitle:
                'First 7 days after the payment: Unconditional full refund After 7 days: Full refund for unused credits.',
            },
            {
              title: 'Is the traffic real?',
              subtitle:
                'It is automated traffic. We use real web browsers with automation to create it, which means the traffic looks like real human traffic but it doesnt make purchases. We guarantee that you will see all of the traffic we send to your website in your Google Analytics dashboard.',
            },
            {
              title: 'How much traffic will I get per day?',
              subtitle:
                'You will receive one 30th of your monthly traffic volume on a daily basis. For example, if you purchase an Ultimate plan with a monthly volume of one million hits (Page views) and 333,333 visits, you will receive up to 33,333 hits and 11,111 visits from us every day.',
            },
            {
              title: 'Why can I not use my website for a free project?',
              subtitle:
                'In Demo and Nano projects, you can only use domains that are not in our database yet. We do not accept shorteners, redirects, or affiliate links. To use these URLs, please upgrade to a paid plan.',
            },
            {
              title: 'Will the traffic help me with SEO, ranking, etc.?',
              subtitle:
                'We have different kinds of traffic. If your goal is to improve your Google positions, we recommend you use our Search Console Traffic. This will ensure that you see all of the traffic in your Google Search Console alongside your target keywords.',
            },
            {
              title: 'Do you accept Adult websites?',
              subtitle: 'Yes, we do accept Adult websites.',
            },
            {
              title: 'What is Bounce Rate?',
              subtitle:
                'Your Bounce Rate is the percentage of visitors who looked at only one page of your site before closing their browser or navigating away from your URL. Keep in mind that a higher Bounce rate will decrease the traffic that you receive because we have to close the browser very quickly to avoid creating additional page views for a visit.',
            },
            {
              title: 'Can I pay with Crypto?',
              subtitle:
                'Yes, we do accept Bitcoin, Ethereum, and other cryptocurrency payments. You can see the various payment options we offer when you make a purchase.',
            },
            {
              title: 'This website has already been used for Demo traffic',
              subtitle:
                'We allow just one Demo project per website. And we check the 2nd level domain. So if this domain has already been used for a Demo, we show this error. Contact our customer service for exceptions. We are always pleased to grant one.',
            },
            {
              title: 'I didnt get a single visitor. Whats going on?',
              subtitle:
                'Please get in touch with our customer service. We will check all the settings of your project and find a solution. Theres always a chat online in the bottom right corner.',
            },
            {
              title: 'I have made a deposit but do not see the activation run',
              subtitle:
                'Check that you have created a project. We cannot know where to send the traffic if no project was created.',
            },
            {
              title: 'What are your services for?',
              subtitle:
                'Most of our clients use our services to improve their website traffic metrics. We can fix your bounce rate, return rate, and session time. We can also help increase your traffic volume, organic, and social traffic, as well as improve almost every other aspect of your website traffic.',
            },
            {
              title: 'Do you have free plans?',
              subtitle:
                'We have free time-limited trial accounts for testing purposes and free Nano projects. ‍If you have already registered, you have a complimentary Demo credit on your account that you can use to create a 1-hour limited Demo project.',
            },
            {
              title:
                'Is the traffic Adsense(and any other Pay Per Click affiliate programs) safe?',
              subtitle:
                'Yes, it is absolutely safe for PPC ads. We avoid clicking on ads and, therefore, you wont violate any of the rules set out by these programs and providers. In the case of Adsense, we dont even load the ads, so by default, you wont see any impressions.',
            },
            {
              title:
                'Do you accept shorteners, redirects, and affiliate links?',
              subtitle:
                'No, we cannot guarantee any results unless you use traditional websites with Google Analytics installed.',
            },
          ]}
        />
      </Box>
      {/* Add other FaqGroupItem components if needed */}
    </Box>
  );
};

export default Faq;
