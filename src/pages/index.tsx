import {
  Box,
  Card,
  Container,
  IconButton,
  SimpleGrid,
  useColorModeValue,
  useMediaQuery,
} from '@chakra-ui/react';
import { ArrowForwardIcon, ArrowDownIcon } from '@chakra-ui/icons';
import { NewEventCard } from '@/components/events/newEventCard';
import { LastEventCard } from '@/components/events/lastEventCard';

export default function Home() {
  const [isLargerThan48em] = useMediaQuery('(min-width: 48em)');

  return (
    <>
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
            <Box
              display="flex"
              alignItems="center"
              textAlign="center"
              w={{ sm: '100%' }}
            >
              <IconButton
                aria-label="Create New Event Button"
                form="event-form"
                type="submit"
                icon={
                  isLargerThan48em ? <ArrowForwardIcon /> : <ArrowDownIcon />
                }
                w={{ base: '100%' }}
                colorScheme={useColorModeValue('purple', 'orange')}
              />
            </Box>
            <LastEventCard />
          </SimpleGrid>
        </Card>
      </Container>
      <Container
        display="flex"
        maxWidth="container.lg"
        height="100vh"
        flexWrap="nowrap"
        alignItems="center"
        justifyContent="center"
      >
        <Card p={3} minWidth="calc(100vw - 20vw)"></Card>
      </Container>
    </>
  );
}
