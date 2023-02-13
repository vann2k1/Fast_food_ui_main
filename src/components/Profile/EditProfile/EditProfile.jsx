import React, { useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Avatar, Button, Form, Input, Typography, Upload } from 'antd';
import { Wrapper } from './styles';

const { Title, Text } = Typography;

function isVietnamesePhoneNumber(number) {
  return /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(number);
}

const EditProfile = () => {
  const [form] = Form.useForm();

  // states
  const [formFields, setFormFields] = useState([]);
  const [photo, setPhoto] = useState(null);

  const beforeUpload = () => {
    return false;
  };
  const uploadChange = ({ file, fileList }) => {
    if (file?.status && file?.status === 'removed') {
      setPhoto(null);
    } else {
      const isLt2M = file?.size / 1024 / 1024 < 2;
      if (file?.type !== 'image/png' && file?.type !== 'image/jpeg') {
        fileList?.pop();
        alert('File phải là hình ảnh .jpg hoặc .png');
      } else if (!isLt2M) {
        fileList?.pop();
        alert('Chỉ cho phép tải file nhỏ hơn 2MB');
      } else {
        setPhoto(file);
      }
    }
  };

  return (
    <Wrapper>
      <Title className="title" level={2}>
        Hồ Sơ Của Tôi
      </Title>
      <div className="form-wrapper">
        <Form
          form={form}
          name="edit_profile_form"
          className="forgot-password-form"
          fields={formFields}
        >
          <Form.Item label="Email đăng nhập">
            <Text className="email-value">example@email.com</Text>
          </Form.Item>

          <Form.Item
            name="username"
            label="Tên"
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
            name="address"
            label="Địa chỉ"
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

          <div className="avatar-edit">
            <Form.Item name="avatar" label="Ảnh đại diện">
              <Avatar size={60} src={''}>
                A
              </Avatar>
            </Form.Item>

            <Upload
              className="upload-btn-wrapper"
              maxCount={1}
              beforeUpload={beforeUpload}
              onChange={uploadChange}
              listType="picture"
            >
              <Button icon={<UploadOutlined />}>Tải lên ảnh đại diện</Button>
            </Upload>
          </div>

          <Form.Item>
            <Button size="large" type="primary" htmlType="submit" className="save-button">
              Lưu
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Wrapper>
  );
};

export default EditProfile;
