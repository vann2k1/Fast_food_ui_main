import React from 'react';
import { Typography } from 'antd';
import { Wrapper } from './styles';

const { Text } = Typography;

const ShoppingHistory = () => {
  return (
    <Wrapper>
      <Text className="no-order">Bạn chưa mua hàng lần nào</Text>
    </Wrapper>
  );
};

export default ShoppingHistory;
