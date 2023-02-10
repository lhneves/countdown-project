import { Card, Container, SimpleGrid, useMediaQuery } from '@chakra-ui/react';
import { NewEventCard } from '@/components/events/newEventCard';
import { LastEventCard } from '@/components/events/lastEventCard';
import SendEventButton from '../buttons/sendEventButton';

export const CreateEvent = () => {
  const [isLargerThan48em] = useMediaQuery('(min-width: 48em)');

  return (
    <Container
      display="flex"
      maxWidth="container.lg"
      height={isLargerThan48em ? '80vh' : '105vh'}
      flexWrap="nowrap"
      alignItems="center"
      justifyContent="center"
    >
      <Card p={3}>
        <SimpleGrid
          templateColumns={{
            base: 'minmax(0, auto)',
            md: '1fr minmax(0, auto) 1fr',
          }}
          gap={4}
        >
          <NewEventCard />
          <SendEventButton />
          <LastEventCard />
        </SimpleGrid>
      </Card>
    </Container>
  );
};
