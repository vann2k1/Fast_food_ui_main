import React, { useEffect, useState } from 'react';
import { Col, Menu, Pagination, Row, Typography, Image, Select } from 'antd';
import { Link } from 'react-router-dom';
import { BannerWrapper, ContainerWrapper } from './styles';
import { EyeOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import ReactStars from 'react-rating-stars-component';
import ShopBG from '../../assets/images/shop-bg.png';

const { Paragraph, Title, Text } = Typography;
const { Option } = Select;

const Shop = () => {
  useEffect(() => {
    document.title = 'Thực đơn - Burger King';
    window.scrollTo(0, 0);
  }, []);

  // config menu filter
  const getMenuItem = (label, key, icon, children, type) => {
    return {
      label,
      key,
      icon,
      children,
      type,
    };
  };
  const categoryItems = [
    getMenuItem('Tất cả', 'all'),
    getMenuItem('Combo', 'Combo'),
    getMenuItem('Burger', 'Burger'),
    getMenuItem('Gà rán', 'Gà rán'),
    getMenuItem('Pizza', 'Pizza'),
    getMenuItem('Món phụ', 'Món phụ'),
  ];

  // config products pagination
  const numEachPage = 8;
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(numEachPage);
  const handlePaginationChange = (current) => {
    setMin((current - 1) * numEachPage);
    setMax(current * numEachPage);
  };

  return (
    <>
      <BannerWrapper>
        <div className="banner">
          <div className="content-wrapper">
            <div className="navigate">
              <Link to="/">Trang chủ</Link>
              <Text> / Thực đơn</Text>
            </div>
            <Title level={1} className="title">
              Thực đơn của chúng tôi
            </Title>
            <Paragraph className="content">
              Đồ ăn nhanh rẻ và ngon. Thực đơn đa dạng với những suất ăn lớn và sắp đồ rất đầy đủ,
              đặc biệt là phô mai.
            </Paragraph>
          </div>
        </div>
      </BannerWrapper>

      <>
        <ContainerWrapper>
          <div className="container">
            <div className="filter-wrapper">
              <Menu
                mode="horizontal"
                items={categoryItems}
                defaultSelectedKeys={['all']}
                className="category-menu"
              />
              <Select defaultValue="default" size="large">
                <Option value="default">Mặc định</Option>
                <Option value="price_desc">Giá giảm dần</Option>
                <Option value="price_increase">Giá tăng dần</Option>
                <Option value="rate_desc">Đánh giá giảm dần</Option>
                <Option value="rate_increase">Đánh giá tăng dần</Option>
              </Select>
            </div>

            <Row gutter={[16, 32]}>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].slice(min, max).map((product, index) => (
                <Col key={index} xl={6} lg={8} md={12} sm={24} xs={24}>
                  <div className="product-wrapper">
                    <Image src={ShopBG} width="100%" height="300px" />
                    <div className="info-wrapper">
                      <div className="info">
                        <Text>Lorem ipsum dolor sit amet.</Text>
                        <Text>200.000 VND</Text>
                      </div>
                      <div className="footer">
                        <ReactStars
                          count={5}
                          size={25}
                          activeColor="#ffa27e"
                          value={4.5}
                          edit={false}
                        />
                        <div className="icon-wrapper">
                          <div className="icon shopping-cart">
                            <ShoppingCartOutlined />
                          </div>
                          <Link to={`id`} className="icon eye">
                            <EyeOutlined />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>

            <div className="pagination">
              <Pagination
                pageSize={numEachPage}
                defaultCurrent={1}
                total={10}
                onChange={handlePaginationChange}
              />
            </div>
          </div>
        </ContainerWrapper>
      </>
    </>
  );
};

export default Shop;
