/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Platform } from 'react-native';

import styled from '@emotion/native';

import Icon from 'react-native-vector-icons/Ionicons';
import { useDevouncedValue } from '../hooks/useDebounceValue';

interface Props {
  onTermChange: (value: string) => void;
}

export const SearchInput: React.FC<Props> = ({ onTermChange }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const { devouncedValue } = useDevouncedValue({
    input: inputValue,
    delay: 1000,
  });

  useEffect(() => {
    onTermChange(devouncedValue);
  }, [devouncedValue]);

  return (
    <Wrapper isAndroid={Platform.OS === 'android'}>
      <Icon name="search-outline" size={20} color="red" />
      <StyledTextInput
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={e => setInputValue(e)}
        placeholder="Search"
        placeholderTextColor="black"
        value={inputValue}
      />
    </Wrapper>
  );
};

const Wrapper = styled.View<{ isAndroid: boolean }>`
  align-items: center;
  background-color: #fff;
  border-radius: 25px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  height: auto;
  justify-content: flex-start;
  margin-bottom: 16px;
  padding: ${({ isAndroid }) => (isAndroid ? '0px 20px' : '10px 20px')};
  width: 100%;
`;

const StyledTextInput = styled.TextInput`
  color: black;
  font-size: 15px;
  margin-left: 13px;
  width: 100%;
`;
