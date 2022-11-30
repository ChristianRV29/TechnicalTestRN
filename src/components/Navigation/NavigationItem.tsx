import styled from '@emotion/native';
import React, { useState } from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

import { NavigationItemProps } from '../../@types';

export const NavigationItem: React.FC<NavigationItemProps> = ({
  _id,
  message,
  link,
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const onPress = () => {
    console.log(`You are searching ${message} with the link ${link}`);
    setIsActive(true);
  };

  return (
    <Wrapper
      isActive={isActive}
      activeOpacity={0.8}
      key={_id}
      onPress={() => onPress()}>
      <ItemName>{message}</ItemName>
      <Icon name="chevron-forward-outline" size={15} color="black" />
    </Wrapper>
  );
};

const Wrapper = styled.TouchableOpacity<{ isActive: boolean }>`
  align-items: center;
  background: #fff;
  border-radius: 16px;
  border: ${({ isActive }) =>
    isActive ? '1px solid #ED470F' : '1px solid #E0E0E0'};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 24px 16px 16px;
  width: 100%;

  &:not(:first-of-type) {
    margin: 10px 0;
  }
`;

const ItemName = styled.Text`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;
