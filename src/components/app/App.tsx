import React from 'react';
import { Location } from '@reach/router';
import Header from '../layout/header';
import Main from '../layout/main';
import Footer from '../layout/footer';

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
