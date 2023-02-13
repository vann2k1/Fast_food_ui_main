import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Form, Input, Typography } from 'antd';
import React, { useState } from 'react';
import { FormWrapper, Wrapper, Modal } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { toggleHiddenLogin } from '../../redux/loginSlice';
import { Link } from 'react-router-dom';

const { Title, Text } = Typography;

export default function Login() {
  const dispatch = useDispatch();

  const [isSignIn, setIsSignIn] = useState(true);

  const [form] = Form.useForm();

  const { isHiddenLogin } = useSelector((state) => state.login);

  // handle hidden login form
  const handleHiddenLogin = () => {
    dispatch(toggleHiddenLogin(true));
  };

  return (
    <Wrapper isHidden={isHiddenLogin}>
      <Modal onClick={handleHiddenLogin} />
      <FormWrapper signIn={isSignIn}>
        <div className="title-wrapper">
          <Title className="sign-in-title" level={2} onClick={() => setIsSignIn(true)}>
            Đăng Nhập
          </Title>
          <Title className="sign-up-title" level={2} onClick={() => setIsSignIn(false)}>
            Đăng Ký
          </Title>
        </div>

        {isSignIn ? (
          <Form
            form={form}
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Vui lòng nhập trường này!' }]}
            >
              <Input
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="Email"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Vui lòng nhập trường này!' }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Mật khẩu"
              />
            </Form.Item>

            <Form.Item>
              <Link className="login-form-forgot" to="/forgot-password">
                Quên mật khẩu?
              </Link>
            </Form.Item>
            <Form.Item>
              <Button size="large" type="primary" htmlType="submit" className="login-form-button">
                Đăng Nhập
              </Button>
            </Form.Item>
          </Form>
        ) : (
          <Form form={form} name="register" className="register-form" scrollToFirstError>
            <Form.Item
              name="email"
              label="E-mail"
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
              <Input />
            </Form.Item>

            <Form.Item
              name="passwordRegister"
              label="Mật khẩu"
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
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="Nhập lại mật khẩu"
              dependencies={['passwordRegister']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập trường này!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('passwordRegister') === value) {
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
              <Button
                size="large"
                type="primary"
                htmlType="submit"
                className="register-form-button"
              >
                Đăng Ký
              </Button>
            </Form.Item>
          </Form>
        )}

        <div className="other">
          <Text className="text-middle">Hoặc</Text>
          <Button size="large" type="primary">
            Đăng nhập bằng Google
          </Button>
        </div>
      </FormWrapper>
    </Wrapper>
  );
}
