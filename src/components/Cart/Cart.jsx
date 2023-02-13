import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BannerWrapper, CartWrapper } from './styles';
import { Button, Typography, Table, Avatar, Card, Form, Input } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import CartBG from '../../assets/images/cart-bg.jpg';

const { Title, Text, Paragraph } = Typography;

function isVietnamesePhoneNumber(number) {
  return /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(number);
}

const Cart = () => {
  useEffect(() => {
    document.title = 'Giỏ hàng - Burger King';
    window.scrollTo(0, 0);
  }, []);

  // states
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [formFields, setFormFields] = useState([]);
  const [form] = Form.useForm();

  // change select row
  const onSelectChange = (selectedRowKeys) => {
    setSelectedRowKeys(selectedRowKeys);
  };

  // config table
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const columns = [
    {
      title: 'Món ăn',
      dataIndex: 'productName',
      key: 'product',
      render: (productName, record) => (
        <div className="product_info">
          <Avatar size="large" src={CartBG}></Avatar>
          <Text className="product_name">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nobis explicabo maxime sequi
            illum incidunt?
          </Text>
        </div>
      ),
    },
    {
      title: 'Số lượng',
      dataIndex: 'quantity',
      key: 'quantity',
      render: (quantity, record) => (
        <div className="quantity_change">
          <Button type="default">
            <MinusOutlined />
          </Button>
          <Text className="quantity">1</Text>
          <Button type="default">
            <PlusOutlined />
          </Button>
        </div>
      ),
    },
    {
      title: 'Giá',
      dataIndex: 'price',
      key: 'price',
      render: (price, record) => (
        <>
          <Text className="total_price">200.000 VND</Text>
        </>
      ),
    },
    {
      title: '',
      key: 'action',
      render: (record) => (
        <Button type="primary" danger>
          Xoá
        </Button>
      ),
    },
  ];

  // handle Cancel
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <BannerWrapper>
        <div className="banner">
          <div className="content-wrapper">
            <div className="navigate">
              <Link to="/">Trang chủ</Link>
              <Text> / Giỏ hàng</Text>
            </div>
            <Title level={1} className="title">
              Giỏ hàng
            </Title>
            <Paragraph className="content">
              Thanh toán và cảm nhận hương vị tuyệt vời ngay bây giờ
            </Paragraph>
          </div>
        </div>
      </BannerWrapper>

      <CartWrapper isModalVisible={isModalVisible}>
        <div className="container">
          <div className="exist">
            <div className="action">
              <Button type="primary" danger disabled={selectedRowKeys.length < 1}>
                Xoá
              </Button>
              {selectedRowKeys.length > 0 && (
                <Text className="product_selected">{`Đã chọn ${selectedRowKeys.length} món ăn`}</Text>
              )}
            </div>
            <Table columns={columns} dataSource={[0]} rowSelection={rowSelection} />
            <div className="payment">
              <Text className="notes">
                *
                <Text className="contents">
                  : Đơn hàng được giảm 10% khi số lượng lớn hơn hoặc bằng 3
                </Text>
              </Text>
              <Text>Tổng tiền: 200.000 VND</Text>
              <Text>Đã giảm: 0 VND</Text>
              <Button
                type="primary"
                onClick={() => setIsModalVisible(true)}
                className="payment-btn"
              >
                Thanh toán
              </Button>
              <div className="modal">
                <Card title="Xác nhận thanh toán">
                  <Form name="confirm-payment" form={form} fields={formFields}>
                    <Form.Item
                      label="Địa chỉ"
                      name={'address'}
                      rules={[
                        {
                          required: true,
                          message: 'Vui lòng nhập trường này!',
                        },
                      ]}
                    >
                      <Input size="large" />
                    </Form.Item>

                    <Form.Item
                      name="phoneNumber"
                      label="Số điện thoại"
                      rules={[
                        {
                          required: true,
                          message: 'Vui lòng nhập trường này!',
                        },
                        () => ({
                          validator(_, value) {
                            if (!value) {
                              return Promise.resolve();
                            }
                            if (!isVietnamesePhoneNumber(value)) {
                              return Promise.reject(new Error('Số điện thoại chưa đúng định dạng'));
                            } else {
                              return Promise.resolve();
                            }
                          },
                        }),
                      ]}
                    >
                      <Input size="large" />
                    </Form.Item>

                    <Form.Item>
                      <div className="btn-wrapper">
                        <Button
                          size="large"
                          type="primary"
                          className="cancel-btn"
                          danger
                          onClick={handleCancel}
                        >
                          Huỷ
                        </Button>
                        <Button
                          size="large"
                          type="primary"
                          htmlType="submit"
                          className="confirm-btn"
                        >
                          Xác nhận
                        </Button>
                      </div>
                    </Form.Item>
                  </Form>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </CartWrapper>
    </>
  );
};

export default Cart;
