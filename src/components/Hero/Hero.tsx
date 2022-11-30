import styled from '@emotion/native';
import React from 'react';

interface Props {
  headline: string;
  subheadline: string;
  link: string;
}

export const Hero: React.FC<Props> = ({ headline, subheadline, link }) => {
  return (
    <HeroContainer>
      <InformationContainer>
        <Headline>{headline}</Headline>
        <Subheadline>{subheadline}</Subheadline>
      </InformationContainer>
      <LinkContainer>
        <NavigationLink>{link}</NavigationLink>
      </LinkContainer>
    </HeroContainer>
  );
};

const HeroContainer = styled.View`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 50px;
`;

const InformationContainer = styled.View`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  margin-bottom: 32px;
  text-align: center;
`;

const Headline = styled.Text`
  align-self: center;
  color: #01001d;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 34px;
`;

const Subheadline = styled.Text`
  color: #000000;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  letter-spacing: 0.4px;
  line-height: 24px;
`;

const LinkContainer = styled.View``;

const NavigationLink = styled.Text`
  color: #ed470f;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.4px;
  mix-blend-mode: normal;
`;
