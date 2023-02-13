import React from 'react';
import { Wrapper } from './styles';
import { Typography, Form, Input, Button } from 'antd';

const { Title } = Typography;

const ChangePassword = () => {
  const [form] = Form.useForm();

  return (
    <Wrapper>
      <Title className="title" level={2}>
        Đổi mật khẩu
      </Title>

      <Form name="change_password_form" form={form}>
        <Form.Item
          label="Mật khẩu mới"
          name="newPassword"
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
                if (value.length < 6) {
                  return Promise.reject(new Error('Mật khẩu phải có ít nhất 6 ký tự'));
                } else {
                  return Promise.resolve();
                }
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Nhập lại mật khẩu"
          name="confirmPassword"
          dependencies={['newPassword']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập trường này!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('newPassword') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('Mật khẩu không trùng khớp'));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button size="large" type="primary" htmlType="submit" className="change-password-btn">
            Xác nhận
          </Button>
        </Form.Item>
      </Form>
    </Wrapper>
  );
};

export default ChangePassword;
