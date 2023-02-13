import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AddReviewWrapper, BannerWrapper, PostContentWrapper, ReviewWrapper } from './styles';
import { Avatar, Button, Form, Image, Input, Menu, Typography } from 'antd';
import { CalendarOutlined, FolderOutlined } from '@ant-design/icons';
import moment from 'moment';
import BlogSingleBG from '../../assets/images/blog-single.png';

const { Text, Title } = Typography;
const { TextArea } = Input;

const Blog = () => {
  useEffect(() => {
    document.title = `Blog Single - Burger King`;
    window.scrollTo(0, 0);
  }, []);

  const [form] = Form.useForm();

  const metaListItems = [
    {
      label: (
        <Link to={`/blogs/time/time`}>
          {moment(new Date().getSeconds() * 1000).format('DD-MM-YYYY')}
        </Link>
      ),
      key: 'time',
      icon: <CalendarOutlined />,
    },
    {
      label: <Link to={`/blogs/category/category`}>Bộ sưu tập ABC</Link>,
      key: 'category',
      icon: <FolderOutlined />,
    },
  ];

  return (
    <>
      <BannerWrapper>
        <div className="banner">
          <div className="content-wrapper">
            <div className="navigate">
              <Link to="/">Trang chủ</Link>
              <Text> / </Text>
              <Link to="/blogs">Bài viết</Link>
              <Text> / Chi tiết bài viết</Text>
            </div>
            <Title level={1} className="title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium est reprehenderit
              saepe in aut ratione.
            </Title>
            <Menu items={metaListItems} />
          </div>
        </div>
      </BannerWrapper>

      <>
        <PostContentWrapper>
          <div className="container">
            {[0, 1, 2].length < 3
              ? [0, 1, 2].map((paragraph, index) => (
                  <Text key={index}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe veniam sunt
                    tempore dolore, amet doloribus, reprehenderit consequuntur, id voluptate
                    delectus asperiores quis sequi incidunt quasi architecto quam blanditiis
                    quisquam dignissimos velit placeat nemo quos? Neque, quasi odio alias fugiat
                    numquam itaque ullam delectus tempora officiis in, voluptas eum? Magnam, quasi!
                  </Text>
                ))
              : [0, 1, 2]
                  .slice(0, 2)
                  .map((paragraph, index) => (
                    <Text key={index}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe veniam sunt
                      tempore dolore, amet doloribus, reprehenderit consequuntur, id voluptate
                      delectus asperiores quis sequi incidunt quasi architecto quam blanditiis
                      quisquam dignissimos velit placeat nemo quos? Neque, quasi odio alias fugiat
                      numquam itaque ullam delectus tempora officiis in, voluptas eum? Magnam,
                      quasi!
                    </Text>
                  ))}
            <div className="images-wrapper">
              {[0, 1].map((image, index) => (
                <Image key={index} src={BlogSingleBG} />
              ))}
            </div>
            {[0, 1, 2].length > 0 &&
              [0, 1, 2]
                .slice(2, [0, 1, 2].length)
                .map((paragraph, index) => (
                  <Text key={index}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe veniam sunt
                    tempore dolore, amet doloribus, reprehenderit consequuntur, id voluptate
                    delectus asperiores quis sequi incidunt quasi architecto quam blanditiis
                    quisquam dignissimos velit placeat nemo quos? Neque, quasi odio alias fugiat
                    numquam itaque ullam delectus tempora officiis in, voluptas eum? Magnam, quasi!
                  </Text>
                ))}
          </div>
        </PostContentWrapper>

        <ReviewWrapper>
          <div className="container">
            <Title level={4}>Nhận xét (1)</Title>
            {[0].map((preview, index) => (
              <div className="review-wrapper" key={index}>
                <Avatar size={60} src={''}>
                  A
                </Avatar>
                <div className="review">
                  <div className="top">
                    <Text className="username">Username</Text>
                    <Text className="time">
                      {moment(new Date().getSeconds() * 1000).format('DD-MM-YYYY')}
                    </Text>
                  </div>
                  <div className="comments">
                    {[0].map((review, index) => (
                      <Text key={index}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dignissimos
                        quos labore earum, illum qui.
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
            <Title level={4}>Thêm nhận xét</Title>
            <Form form={form} name="add-review" className="add-review-form">
              <Form.Item
                name="review"
                label="Nhận xét của bạn"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập trường này!',
                  },
                ]}
              >
                <TextArea rows={4} placeholder="Nhận xét" />
              </Form.Item>
              <Form.Item>
                <Button size="large" type="primary" htmlType="submit" className="add-review-btn">
                  Nhận xét
                </Button>
              </Form.Item>
            </Form>
          </div>
        </AddReviewWrapper>
      </>
    </>
  );
};

export default Blog;
