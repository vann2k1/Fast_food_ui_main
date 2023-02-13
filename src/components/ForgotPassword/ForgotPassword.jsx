import { MailOutlined } from '@ant-design/icons';
import { Button, Form, Input, Typography } from 'antd';
import React from 'react';
import { Wrapper } from './styles';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [form] = Form.useForm();

  const handleBackPage = () => {
    navigate(-1);
  };

  return (
    <Wrapper>
      <Form form={form} name="forgot_password" className="forgot-password-form">
        <Title className="forgot-password-title" level={2}>
          Lấy lại mật khẩu
        </Title>
        <Form.Item
          name="email"
          rules={[
            {
              type: 'email',
              message: 'Định dạng E-mail chưa đúng!',
            },
            {
              required: true,
              message: 'Vui lòng nhập trường này!',
            },
          ]}
        >
          <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
        </Form.Item>

        <Form.Item>
          <div className="button-wrapper">
            <Button
              size="large"
              type="primary"
              htmlType="submit"
              className="forgot-password-button"
            >
              Lấy lại mật khẩu
            </Button>
            <Button size="large" type="text" className="back-button" onClick={handleBackPage}>
              Quay lại
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Wrapper>
  );
};

export default ForgotPassword;
