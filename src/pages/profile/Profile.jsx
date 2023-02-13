import React from 'react';
import { Footer, Header, ProfileComponent } from '../../components';
import { Wrapper } from './styles';

const Profile = () => {
  return (
    <Wrapper>
      <div className="header-bg">
        <Header />
      </div>
      <ProfileComponent />
      <Footer />
    </Wrapper>
  );
};

export default Profile;
