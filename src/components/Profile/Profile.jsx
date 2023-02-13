import { EditOutlined, LogoutOutlined, ShoppingOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Col, Menu, Row, Typography } from 'antd';
import React, { useState } from 'react';
import { Wrapper } from './styles';
import { useNavigate } from 'react-router-dom';
import EditProfile from './EditProfile/EditProfile';
import ChangePassword from './ChangePassword/ChangePassword';
import ShoppingHistory from './ShoppingHistory/ShoppingHistory';

const { Text } = Typography;

const Profile = () => {
  const navigate = useNavigate();

  // states
  const [selected, setSelected] = useState('profile');
  const [providerId, setProviderId] = useState('');

  // handle logout
  const handleLogout = () => {
    navigate('/');
  };

  // config navbar
  const navItems = [
    {
      label: <Text className="profile-info">Hồ sơ</Text>,
      key: 'profile',
    },
    providerId === 'password' && {
      label: <Text className="change-password-title">Đổi mật khẩu</Text>,
      key: 'change-password',
    },
  ];
  const handleNavbarClick = (e) => {
    setSelected(e.key);
  };

  return (
    <Wrapper selected={selected}>
      <Row>
        <Col className="sidebar">
          <div className="top">
            <Avatar size="large" src={''}>
              A
            </Avatar>
            <div className="name-wrapper">
              <Text>Username</Text>
              <div className="edit-wrapper" onClick={() => setSelected('profile')}>
                <EditOutlined />
                Sửa hồ sơ
              </div>
            </div>
          </div>

          <div className="profile">
            <div className="title" onClick={() => setSelected('profile')}>
              <UserOutlined />
              <Text>Tài khoản của tôi</Text>
            </div>
            <Menu items={navItems} defaultSelectedKeys={['profile']} onClick={handleNavbarClick} />
          </div>
          <div className="shopping-history" onClick={() => setSelected('shopping-history')}>
            <ShoppingOutlined />
            <Text>Đơn mua</Text>
          </div>
          <div className="logout" onClick={handleLogout}>
            <LogoutOutlined />
            <Text>Đăng xuất</Text>
          </div>
        </Col>

        <Col className="content">
          {(selected === 'profile' && <EditProfile />) ||
            (selected === 'change-password' && <ChangePassword />) ||
            (selected === 'shopping-history' && <ShoppingHistory />)}
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Profile;
