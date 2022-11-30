import styled from '@emotion/native';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import { NavigationItemProps } from './../@types';
import { data } from './../data';
import { NavigationItem as Item } from './NavigationItem';
import { SearchInput } from './SearchInput';

export const Navigation = () => {
  const [filteredItems, setFilteredItems] =
    useState<Array<NavigationItemProps>>(data);

  const [term, setTerm] = useState<string>('');

  useEffect(() => {
    if (term.length === 0) {
      setFilteredItems(data);
    }

    setFilteredItems(
      data.filter(({ message }) =>
        message.toLocaleLowerCase().includes(term.toLocaleLowerCase()),
      ),
    );
  }, [term]);
  return (
    <NavigationContainer>
      {data.length > 0 && <SearchInput onTermChange={setTerm} />}
      <StyledText>Navigation component</StyledText>

      <FlatList
        data={filteredItems}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item._id}
        renderItem={({ item }) => <Item {...item} />}
      />
    </NavigationContainer>
  );
};

const NavigationContainer = styled.View`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const StyledText = styled.Text`
  color: #333333;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;
