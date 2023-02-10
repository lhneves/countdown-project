import { AnimatePresence, motion } from 'framer-motion';
import { IconButton, useColorModeValue, useMediaQuery } from '@chakra-ui/react';
import { ArrowForwardIcon, ArrowDownIcon } from '@chakra-ui/icons';

const SendEventButton = () => {
  const [isLargerThan48em] = useMediaQuery('(min-width: 48em)');

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        style={{
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          width: '100%',
          cursor: 'pointer',
        }}
        whileTap={{ scale: 0.87 }}
      >
        <IconButton
          cursor="pointer"
          form="event-form"
          type="submit"
          aria-label="sendEvent"
          colorScheme={useColorModeValue('purple', 'orange')}
          icon={isLargerThan48em ? <ArrowForwardIcon /> : <ArrowDownIcon />}
          width={!isLargerThan48em ? '100%' : undefined}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default SendEventButton;
