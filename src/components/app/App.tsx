import React from 'react';
import Header from '../layout/header/root';
import Main from '../layout/main';
import Footer from '../layout/footer';

const App: React.FC = () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <Header />
    <Main />
    <Footer />
  </div>
);

export default App;
