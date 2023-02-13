import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AddReviewWrapper,
  BannerWrapper,
  DescriptionWrapper,
  ProductInfo,
  RelatedProductsWrapper,
  ReviewWrapper,
} from './styles';
import { Avatar, Button, Col, Form, Image, Input, Pagination, Row, Typography } from 'antd';
import ReactStars from 'react-rating-stars-component';
import { EyeOutlined, MinusOutlined, PlusOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import moment from 'moment';
import ProductBG from '../../assets/images/product-bg.jpg';

const { Text, Title, Paragraph } = Typography;
const { TextArea } = Input;

const Product = () => {
  // states
  const [quantity, setQuantity] = useState(1);

  const [form] = Form.useForm();

  // config pagination
  const numEachPage = 4;
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
              <Text> / </Text>
              <Link to="/products">Thực đơn</Link>
              <Text> / Chi tiết sản phẩm</Text>
            </div>
            <Title level={1} className="title">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At voluptatem tenetur,
              accusamus minus ea earum incidunt fuga doloremque voluptas quibusdam tempora odio
              nihil, consectetur eius in. Placeat, officiis? Blanditiis, inventore!
            </Title>
            <Paragraph className="content">
              Một bữa ăn đầy đủ chất dinh dưỡng cho bạn sức khỏe tốt, sự dẻo dai, và thân hình đúng
              chuẩn. Trong xã hội hiện đại, mọi thứ được tối giản đáng kể, và các món ăn cũng vậy.
            </Paragraph>
          </div>
        </div>
      </BannerWrapper>

      <>
        <ProductInfo>
          <div className="container">
            <div className="top-info">
              <Row gutter={[32, 32]}>
                <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                  <Image src={ProductBG} width="100%" />
                </Col>
                <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                  <Title level={2}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam provident
                    inventore totam doloribus laborum fugit.
                  </Title>
                  <div className="rate-wrapper">
                    <ReactStars
                      count={5}
                      size={25}
                      activeColor="#ffa27e"
                      value={4.5}
                      edit={false}
                    />
                    <Text>(1 đánh giá)</Text>
                  </div>
                  <Text>200.000 VND</Text>
                  <div className="quantity-change-wrapper">
                    <div className="quantity-change">
                      <Text className="quantity">10</Text>
                      <div className="btn-wrapper">
                        <Button type="default" onClick={() => setQuantity(quantity + 1)}>
                          <PlusOutlined />
                        </Button>
                        <Button
                          type="default"
                          disabled={quantity === 1}
                          onClick={() => setQuantity(quantity - 1)}
                        >
                          <MinusOutlined />
                        </Button>
                      </div>
                    </div>
                    <div className="btn-add">
                      <Button type="primary">Thêm vào giỏ hàng</Button>
                    </div>
                  </div>
                  <Text>Phân loại: Burger</Text>
                </Col>
              </Row>
            </div>
          </div>
        </ProductInfo>

        <DescriptionWrapper>
          <div className="container">
            <Title level={4}>Mô tả</Title>
            <Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta perferendis enim
              laborum pariatur reiciendis ullam rem facilis dignissimos porro! Placeat natus eum, ad
              molestiae nisi beatae ipsa debitis, repellat alias quidem, voluptatum doloribus magnam
              omnis. Provident atque, corrupti cum vitae iure expedita ipsam dolorem beatae, debitis
              ut eligendi sapiente? Distinctio quas quisquam quo repudiandae necessitatibus sunt eos
              mollitia culpa sit. Nobis officiis fugiat libero provident, mollitia eos aliquid culpa
              quibusdam illo? In natus facilis quasi nisi sequi commodi tenetur sapiente harum!
              Ullam asperiores mollitia impedit dolore voluptatem eum provident ipsa aperiam fugit
              soluta facilis atque, incidunt magnam, veniam sunt ab.
            </Text>
          </div>
        </DescriptionWrapper>

        <ReviewWrapper>
          <div className="container">
            <Title level={4}>Đánh giá (1)</Title>
            {[0].map((preview, index) => (
              <div className="review-wrapper" key={index}>
                <Avatar size={60} src={''}>
                  A
                </Avatar>
                <div className="review">
                  <div className="top">
                    <Text className="username">Name</Text>
                    <Text className="time">
                      {moment(new Date().getSeconds() * 1000).format('DD-MM-YYYY')}
                    </Text>
                  </div>
                  <ReactStars count={5} size={25} color2={'#ffa27e'} value={4.5} edit={false} />
                  <div className="comments">
                    {[0].map((review, index) => (
                      <Text key={index}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
                        consequuntur, voluptatibus quae perferendis a quibusdam.
                      </Text>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ReviewWrapper>

        <AddReviewWrapper>
          <div className="container">
            <Title level={4}>Thêm đánh giá</Title>
            <Form form={form} name="add-review" className="add-review-form">
              <Form.Item label="Đánh giá của bạn">
                <ReactStars count={5} size={25} color2={'#ffa27e'} value={0} />
              </Form.Item>
              <Form.Item
                name="review"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập trường này!',
                  },
                ]}
              >
                <TextArea rows={4} placeholder="Đánh giá" />
              </Form.Item>
              <Form.Item>
                <Button size="large" type="primary" htmlType="submit" className="add-review-btn">
                  Đánh giá
                </Button>
              </Form.Item>
            </Form>
          </div>
        </AddReviewWrapper>

        <RelatedProductsWrapper>
          <div className="container">
            <Title level={4}>Món ngon liên quan</Title>
            <Row gutter={[16, 32]}>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].slice(min, max)?.map((product, index) => (
                <Col key={index} xl={6} lg={8} md={12} sm={24} xs={24}>
                  <div className="product-wrapper">
                    <Image src={ProductBG} width="100%" height="300px" />
                    <div className="info-wrapper">
                      <div className="info">
                        <Text>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
                          numquam.
                        </Text>
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
            <div className="pagination">
              <Pagination
                pageSize={numEachPage}
                defaultCurrent={1}
                total={10}
                onChange={handlePaginationChange}
              />
            </div>
          </div>
        </RelatedProductsWrapper>
      </>
    </>
  );
};

export default Product;
