import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BannerWrapper, BlogListWrapper } from './styles';
import { Typography, Image, Row, Col, Pagination } from 'antd';
import moment from 'moment';
import ShopBG from '../../assets/images/shop-bg.png';

const { Text, Title, Paragraph } = Typography;

const Blogs = () => {
  useEffect(() => {
    document.title = 'Bài viết - Burger King';
    window.scrollTo(0, 0);
  }, []);

  // config blog pagination
  const numEachPage = 4;
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(numEachPage);
  const handlePaginationChange = (current) => {
    setMin((current - 1) * numEachPage);
    setMax(current * numEachPage);
  };

  // idea: check location -> set selected
  return (
    <>
      <BannerWrapper>
        <div className="banner">
          <div className="content-wrapper">
            <div className="navigate">
              <Link to="/">Trang chủ</Link>
              <Text> / Bài viết</Text>
            </div>
            <Title level={1} className="title">
              Bài viết
            </Title>
            <Paragraph className="content">
              Chia sẻ kiến thức về các món ngon của chúng tôi. Những bài viết sẽ giúp bạn hiểu rõ
              nhất các món chúng tôi gửi tới bạn.
            </Paragraph>
          </div>
        </div>
      </BannerWrapper>

      <BlogListWrapper>
        <div className="container">
          <Row>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].slice(min, max).map((blog, index) => (
              <Col key={index} span={24}>
                <Image src={ShopBG} width={'100%'} />
                <div className="category_time_wrapper">
                  <Link to={`category/category`}>category</Link>
                  <Text> / </Text>
                  <Link to={`time/time`}>
                    {moment(new Date().getSeconds() * 1000).format('DD-MM-YYYY')}
                  </Link>
                </div>
                <Link to={`id`} className="title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eius modi maiores
                  animi perspiciatis qui itaque delectus distinctio quae. Odio.
                </Link>
                <Text className="content_slice">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit odio iure assumenda
                  non, dolor dolorum doloremque natus, atque laboriosam quos quisquam quidem
                  voluptatum modi debitis quas, vitae a id porro eum ipsa voluptate omnis. Minima
                  tempore asperiores iste et, soluta corporis ea, numquam quis quia odio nisi. Iste
                  dicta ratione quod consequuntur voluptatem id, unde voluptate? Tenetur sed
                  aspernatur exercitationem rem repellat at tempore autem ipsa nisi, accusantium
                  asperiores minima recusandae alias debitis optio incidunt, nesciunt porro earum
                  maxime non quasi dolore? Voluptatum itaque alias eligendi, eaque optio dolorem
                  necessitatibus debitis cupiditate, ipsa quidem cum qui quas non suscipit autem!
                </Text>
                <Link to={`id`} className="read_more">
                  Xem thêm
                </Link>
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
      </BlogListWrapper>
    </>
  );
};

export default Blogs;
