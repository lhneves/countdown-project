import React from 'react';
import { SearchIcon } from '@chakra-ui/icons';
import { Box, IconButton, Input, useColorModeValue } from '@chakra-ui/react';

type SearchInputProps = {
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

export const SearchInput = ({ onChange }: SearchInputProps) => {
  return (
    <Box
      sx={{
        display: 'inline-flex',
        borderRadius: '50px',
        transition: '0.4s',
        p: '5px',
        _hover: {
          bgColor: '#52525215',
        },
      }}
      role="group"
    >
      <IconButton
        colorScheme={useColorModeValue('purple', 'orange')}
        aria-label="Search database"
        borderRadius="50%"
        size="sm"
        icon={<SearchIcon />}
      />
      <Input
        type="text"
        variant="unstyled"
        placeholder="Search"
        onChange={onChange}
        sx={{
          p: 0,
          border: 0,
          maxWidth: 0,
          maxHeight: '32px',
          textIndent: '12px',
          transition: '0.4s',
          outline: 'none',
          bgColor: 'transparent',
          _groupHover: {
            maxWidth: '180px',
          },
        }}
      />
    </Box>
  );
};
