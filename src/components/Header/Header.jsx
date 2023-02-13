import React, { useState } from 'react';
import Logo from '../../assets/logo/burger-king-logo.png';
import { Link } from 'react-router-dom';
import {
  BarsOutlined,
  CloseOutlined,
  SearchOutlined,
  ShoppingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Input, Menu } from 'antd';
import { HeaderWrapper } from './styles';
import { useDispatch } from 'react-redux';
import { toggleHiddenLogin } from '../../redux/loginSlice';

const Header = () => {
  const dispatch = useDispatch();
  // states
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

  // menu config
  const [pageCurrent, setPageCurrent] = useState('home');
  const navItems = [
    {
      label: <Link to="/">TRANG CHỦ</Link>,
      key: 'home',
    },
    {
      label: <Link to="/about">VỀ CHÚNG TÔI</Link>,
      key: 'whatBK',
    },
    {
      label: <Link to="/products">THỰC ĐƠN</Link>,
      key: 'menu',
    },
    {
      label: <Link to="/blogs">BÀI VIẾT</Link>,
      key: 'blog',
    },
    {
      label: <Link to="/contact">LIÊN HỆ</Link>,
      key: 'contact',
    },
  ];
  const menuClick = (e) => {
    setPageCurrent(e.key);
  };

  // handle toggle search box
  const toggleHiddenSearchBox = () => {
    setIsSearch(!isSearch);
  };

  return (
    <HeaderWrapper toggleMenu={toggleMenu} search={isSearch}>
      <Link to="/" className="logo-wrapper">
        <img src={Logo} alt="logo" />
      </Link>
      <div className="link-wrapper">
        <Menu items={navItems} selectedKeys={[pageCurrent]} onClick={menuClick} />
        <div className="icon-wrapper">
          <Link className="cart-wrapper icon" to="/cart">
            <ShoppingOutlined />
            <span className="quantity">1</span>
          </Link>
          <div className="search-wrapper">
            <SearchOutlined className="icon" onClick={toggleHiddenSearchBox} />
            {isSearch ? (
              <div className="search-result">
                <Input placeholder="Nhập tên món ăn" />
              </div>
            ) : null}
          </div>
          <UserOutlined className="icon" onClick={() => dispatch(toggleHiddenLogin(false))} />

          {toggleMenu ? (
            <CloseOutlined className="icon" onClick={() => setToggleMenu(!toggleMenu)} />
          ) : (
            <BarsOutlined className="icon" onClick={() => setToggleMenu(!toggleMenu)} />
          )}
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
