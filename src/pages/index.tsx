import {
  Box,
  Card,
  Container,
  IconButton,
  SimpleGrid,
  useMediaQuery,
} from '@chakra-ui/react';
import { ArrowForwardIcon, ArrowDownIcon } from '@chakra-ui/icons';
import { NewEventCard } from '@/components/newEventCard';
import { ShowEventsCard } from '@/components/showEventsCard';

export default function Home() {
  const [isLargerThan48em] = useMediaQuery('(min-width: 48em)');

  return (
    <Container
      display="flex"
      maxWidth="container.lg"
      height="calc(100vh - 108px)"
      flexWrap="nowrap"
      alignItems="center"
      justifyContent="center"
    >
      <Card p={3}>
        <SimpleGrid
          templateColumns={{
            base: 'repeat(1, minmax(0, auto))',
            md: 'repeat(3, minmax(0, auto))',
          }}
          gap={4}
        >
          <NewEventCard />
          <Box
            display="flex"
            alignItems="center"
            textAlign="center"
            w={{ sm: '100%' }}
          >
            <IconButton
              aria-label="Create New Event Button"
              icon={isLargerThan48em ? <ArrowForwardIcon /> : <ArrowDownIcon />}
              w={{ base: '100%' }}
            />
          </Box>
          <ShowEventsCard />
        </SimpleGrid>
      </Card>
    </Container>
  );
}
