import React from 'react';
import { Location } from '@reach/router';
import Header from '../header';
import Main from '../main';
import Footer from '../footer';

const App: React.FC = () => {
  return (
    <Location>
      {({ location }) => (
        <>
          <Header location={location['pathname'] as string} />
          <Main />
          <Footer />
        </>
      )}
    </Location>
  );
};

export default App;
