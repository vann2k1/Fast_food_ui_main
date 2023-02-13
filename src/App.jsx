import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header, Login } from './components';

const App = () => {
  return (
    <>
      <Header />
      <div>
        <Outlet />
        <Login />
      </div>
      <Footer />
    </>
  );
};

export default App;
