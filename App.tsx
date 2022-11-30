import styled from '@emotion/native';
import React from 'react';

import { Hero, Navigation } from './src/components';

export const App = () => {
  return (
    <Wrapper>
      <Hero
        headline="Title - 4 lines then ellipse"
        link="Navigation Link"
        subheadline="Sub-text - unlimited lines"
      />
      <Navigation />
    </Wrapper>
  );
};

const Wrapper = styled.View`
  background-color: #edc6a3;
  display: flex;
  flex-basis: 0;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  flex: 1;
  padding: 0 24px 0 24px;
  justify-content: center;
`;
