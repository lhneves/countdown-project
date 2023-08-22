import React from 'react';

import Link from 'next/link';
import styled from '@emotion/styled';
import { TimeIcon } from '@chakra-ui/icons';
import { Text, useColorModeValue } from '@chakra-ui/react';

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transform: rotate(20deg);
  }
`;

const Logo = () => {
  return (
    <Link href="/">
      <LogoBox>
        <TimeIcon boxSize={19} />
        <Text
          display={{ base: 'none', sm: 'inline-block' }}
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily="M PLUS Rounded 1c"
          fontWeight="bold"
          ml={3}
        >
          CountDown Project
        </Text>
      </LogoBox>
    </Link>
  );
};

export default Logo;
