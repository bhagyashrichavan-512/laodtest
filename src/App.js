import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import Routes from './Routes';
import Page from './components/Page';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';
import { DesktopApp } from 'views';

const App = () => {
  return (
    <Page>
      <DesktopApp />
    </Page>
  );
};

export default App;
