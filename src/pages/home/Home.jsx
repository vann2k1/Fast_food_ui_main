import React, { useEffect } from 'react';
import { Button, Col, Row, Typography, Image, Carousel } from 'antd';
import { EyeOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import {
  BannerWrapper,
  NewProductsWrapper,
  BlogsRecentlyWrapper,
  MenuListWrapper,
  FormContactWrapper,
  ButtonStyled,
} from './styles';
import ReactStars from 'react-rating-stars-component';
import ShopBG from '../../assets/images/shop-bg.png';

const { Paragraph, Title, Text } = Typography;

const categoryOptions = ['Combo', 'Burger', 'Pizza', 'Gà rán', 'Món phụ'];

const Home = () => {
  useEffect(() => {
    document.title = 'Trang chủ - Burger King';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Carousel autoplay>
        <BannerWrapper photoURL={ShopBG}>
          <div className="banner">
            <div className="content-wrapper">
              <Title level={1} className="title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, consequatur.
              </Title>
              <Paragraph className="content">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, animi! Corporis
                numquam rem non rerum.
              </Paragraph>
              <Link to={`products/id`} className="btn-view-more">
                <ButtonStyled size="middle">Xem thêm</ButtonStyled>
              </Link>
            </div>
          </div>
        </BannerWrapper>
      </Carousel>

      <NewProductsWrapper className="container">
        <div className="title-wrapper">
          <Title level={4}>món mới</Title>
          <Text>Các món ăn mới đang được bán tại cửa hàng</Text>
        </div>
        <div className="container">
          <Row gutter={[16, 32]}>
            {[0, 1, 2].map((product, index) => (
              <Col key={index} xl={8} lg={8} md={12} sm={24} xs={24}>
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
                        <Link to={`/products/id`} className="icon eye">
                          <EyeOutlined />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
        <Link to="products">
          <ButtonStyled size="middle">Xem thêm</ButtonStyled>
        </Link>
      </NewProductsWrapper>

      <MenuListWrapper className="container">
        <div className="title-wrapper">
          <Title level={4}>danh mục thực đơn</Title>
          <Text>Phân loại món ăn giúp bạn dễ dàng tìm kiếm hơn</Text>
        </div>
        <div className="container">
          <Row gutter={[16, 32]}>
            {categoryOptions.map((category) => (
              <Col xl={8} lg={8} md={12} sm={24} xs={24} key={category}>
                <div className="product-wrapper">
                  <img src={ShopBG} alt={category} />
                  <div className="middle">
                    <Text>{category}</Text>
                    <Link to={`/products/id`}>
                      <ButtonStyled size="middle">Xem thêm</ButtonStyled>
                    </Link>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </MenuListWrapper>

      <BlogsRecentlyWrapper className="container">
        <div className="title-wrapper">
          <Title level={4}>bài viết gần đây</Title>
          <Text>Những chia sẻ về các hoạt động của cửa hàng mới nhất cho bạn</Text>
        </div>
        <div className="container">
          <Row gutter={[16, 32]}>
            {[0, 1, 2].map((blog, index) => (
              <Col xl={8} lg={8} md={12} sm={24} xs={24} key={index}>
                <Link to={`/blogs/id`}>
                  <div className="blog-image-wrapper">
                    <img src={ShopBG} alt="blog" />
                  </div>
                  <div className="info-wrapper">
                    <Text className="title">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos veniam
                      accusantium deleniti? Veritatis, quas soluta?
                    </Text>
                    <Text className="description">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores incidunt
                      blanditiis perspiciatis rem pariatur nemo perferendis modi commodi? Nesciunt,
                      vitae.
                    </Text>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
        <Link to="blogs">
          <ButtonStyled size="middle">Xem thêm</ButtonStyled>
        </Link>
      </BlogsRecentlyWrapper>

      <FormContactWrapper className="container">
        <Title level={4} className="title">
          Nhận thông tin về sản phẩm mới nhất
        </Title>
        <Text className="description">
          Điền email của bạn tại đây, chúng tôi sẽ gửi thông tin và báo giá ngay!
        </Text>
        <div className="input-wrapper">
          <input type="text" placeholder="Nhập email" />
          <Button size="small">Gửi</Button>
        </div>
      </FormContactWrapper>
    </>
  );
};

export default Home;
