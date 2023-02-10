import React from 'react';
import { useEvents } from '@/context/eventsContexts';
import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react';
import { EventCard } from './eventCard';

export const AllEvents = () => {
  const { eventList } = useEvents();

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
        </CardHeader>
        <CardBody p={2}>
          <SimpleGrid
            gap={4}
            templateColumns={{
              base: 'minmax(0, auto)',
              md: 'repeat(3, 1fr)',
            }}
          >
            {eventList.map((event, index) => (
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
