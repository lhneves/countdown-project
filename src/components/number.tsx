import FlipNumbers from 'react-flip-numbers';
import { useColorModeValue } from '@chakra-ui/react';

export const Number = ({ number }: { number: string }) => {
  return (
    <FlipNumbers
      height={15}
      width={15}
      color={useColorModeValue('dark', 'light')}
      background="transparent"
      play
      perspective={100}
      numbers={number}
    />
  );
};
