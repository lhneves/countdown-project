import { DeleteIcon } from '@chakra-ui/icons';
import {
  Button,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';

export const DeleteEventPopover = ({ onDelete }: { onDelete: () => void }) => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <Popover closeOnBlur={true} isOpen={isOpen}>
      <PopoverTrigger>
        <IconButton
          aria-label="deleteButton"
          colorScheme={useColorModeValue('purple', 'orange')}
          icon={<DeleteIcon />}
          size="sm"
          cursor="pointer"
          onClick={onToggle}
        />
      </PopoverTrigger>
      <Portal>
        <PopoverContent
          border="none"
          boxShadow=" rgba(0, 0, 0, 0.35) 0px 5px 15px;"
        >
          <PopoverArrow />
          <PopoverHeader>
            Are you sure you want to delete this event?
          </PopoverHeader>
          <PopoverBody display="flex" justifyContent="space-between">
            <Button size="sm" onClick={onClose}>
              Cancel
            </Button>
            <Button
              colorScheme={useColorModeValue('purple', 'orange')}
              size="sm"
              cursor="pointer"
              onClick={onDelete}
              onBlur={onClose}
            >
              Delete
            </Button>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};
