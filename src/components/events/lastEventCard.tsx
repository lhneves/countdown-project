import { useEffect, useState } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import { useEvents } from '@/context/eventsContexts';
import { ArrowDownIcon } from '@chakra-ui/icons';
import { EventCard } from './eventCard';
import { IEvent } from '@/types/event';
import { EventCardEmpty } from './eventCardEmpty';
import { AnimatePresence, motion } from 'framer-motion';

export const LastEventCard = () => {
  const variant = useColorModeValue('outline', 'filled');
  const buttonColor = useColorModeValue('purple', 'orange');

  const { eventList } = useEvents();
  const [event, setEvent] = useState<IEvent>();

  useEffect(() => {
    setEvent(eventList[0]);
  }, [eventList]);

  const handleClick = () => {
    const element = document.getElementById('allEvents');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Card variant="outline">
      <CardHeader p={4}>
        <Heading size="md" textAlign="center">
          Your Future Events
        </Heading>
      </CardHeader>
      <CardBody p={2}>
        <AnimatePresence mode="wait" initial={false}>
          {event ? (
            <motion.div
              key="lastEvent"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.2 }}
            >
              <EventCard variant={variant} event={event} />
            </motion.div>
          ) : (
            <motion.div
              key="emptyEvent"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.2 }}
            >
              <EventCardEmpty />
            </motion.div>
          )}
        </AnimatePresence>
      </CardBody>
      {eventList.length > 1 && (
        <CardFooter justifyContent="right" p={2}>
          <Button
            colorScheme={buttonColor}
            rightIcon={<ArrowDownIcon />}
            onClick={handleClick}
          >
            See All Events
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};
