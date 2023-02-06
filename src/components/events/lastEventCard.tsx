import { useEffect, useState } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useEvents } from '@/context/eventsContexts';
import { ArrowDownIcon } from '@chakra-ui/icons';
import { EventCard } from './eventCard';
import { IEvent } from '@/types/event';

export const LastEventCard = () => {
  const { eventList } = useEvents();

  const [event, setEvent] = useState<IEvent>();

  useEffect(() => {
    setEvent(eventList[0]);
  }, [eventList]);

  return (
    <Card variant="outline">
      <CardHeader p={4}>
        <Heading size="md" textAlign="center">
          Your Future Events
        </Heading>
      </CardHeader>
      <CardBody p={2}>
        {event ? (
          <EventCard name={event.eventName} date={event.date} />
        ) : (
          <Text>Crie um evento</Text>
        )}
      </CardBody>
      <CardFooter justifyContent="right" p={2}>
        <Button
          colorScheme={useColorModeValue('purple', 'orange')}
          rightIcon={<ArrowDownIcon />}
        >
          See All Events
        </Button>
      </CardFooter>
    </Card>
  );
};
