import React, { useState } from 'react';
import { useEvents } from '@/context/eventsContexts';
import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react';
import { SearchInput } from '../searchInput';
import { EventCard } from './eventCard';
import { IEvent } from '@/types/event';

export const AllEvents = () => {
  const { eventList, searchEventByName } = useEvents();

  const [eventsFiltered, setEventsFiltered] = useState<IEvent[]>();

  const handleInputChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const eventName = target.value;

    const eventsFilterByName = searchEventByName(eventName);

    setEventsFiltered(eventsFilterByName);
  };

  function handleEventList() {
    if (eventsFiltered && eventsFiltered.length > 0) {
      return eventsFiltered;
    }

    if (eventList && eventList.length > 0) {
      return eventList;
    }

    return [];
  }

  return (
    <Container
      display="flex"
      maxWidth="container.lg"
      minHeight="100vh"
      flexWrap="nowrap"
      alignItems="center"
      justifyContent="center"
      id="allEvents"
    >
      <Card p={2} minWidth="calc(100vw - 20vw)">
        <CardHeader
          p={2}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading size="md">All Events</Heading>
          <SearchInput onChange={handleInputChange} />
        </CardHeader>
        <CardBody p={2}>
          <SimpleGrid
            gap={4}
            templateColumns={{
              base: 'minmax(0, auto)',
              md: 'repeat(3, 1fr)',
            }}
          >
            {handleEventList().map((event, index) => (
              <EventCard
                variant="outline"
                event={event}
                key={`${event.eventName}-${index}`}
              />
            ))}
          </SimpleGrid>
        </CardBody>
      </Card>
    </Container>
  );
};
