import { useState, useEffect } from 'react';
import { useEvents } from '@/context/eventsContexts';
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Grid,
  Heading,
  Text,
  useToast,
} from '@chakra-ui/react';
import { Number } from '../number';
import { CheckCircleIcon } from '@chakra-ui/icons';

import { dateTimeToSeconds, secondsToTimes, zeroLeft } from '@/utils/date';
import { useInterval } from '@/hooks/useInterval';
import { IEvent } from '@/types/event';
import { DeleteEventPopover } from '../deleteEventPopover';

type EventProps = {
  event: IEvent;
  variant?: 'filled' | 'outline';
};

export const EventCard = ({ event, variant = 'filled' }: EventProps) => {
  const toast = useToast();
  const { toggleHasReached, deleteEventById } = useEvents();

  const [times, setTimes] = useState<string[]>([...Array(6).fill('0')]);

  const hasHours = event.date.getHours() > 0;
  const dateFormatted = event.date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const [diferenceInSeconds, setDiferenceInSeconds] = useState(
    handleTimeDiference(),
  );

  function handleTimeDiference() {
    const timeDiff =
      dateTimeToSeconds(event.date) - dateTimeToSeconds(new Date());

    return timeDiff < 0 ? 0 : timeDiff;
  }

  useInterval(
    () => {
      if (diferenceInSeconds > 0) {
        setDiferenceInSeconds(diferenceInSeconds - 1);
      }
    },
    event.hasReached ? null : 1000,
  );

  useEffect(() => {
    setDiferenceInSeconds(handleTimeDiference());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [event]);

  useEffect(() => {
    if (diferenceInSeconds > 0) {
      setTimes(secondsToTimes(diferenceInSeconds));
    }
    if (diferenceInSeconds <= 0 && !event.hasReached) {
      toast({
        description: `${event.eventName} has reached!`,
        status: 'success',
        isClosable: true,
        position: 'top-right',
      });
      toggleHasReached(event.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [diferenceInSeconds]);

  return (
    <Card variant={variant} key={event.id}>
      <CardHeader p={3} display="flex" justifyContent="space-between">
        <Heading size="sm">{event.eventName}</Heading>
        <Heading size="sm" display="flex" justifyContent="center">
          {dateFormatted}
          <Text ml={2}>
            {hasHours &&
              `${zeroLeft(event.date.getHours())}:${zeroLeft(
                event.date.getMinutes(),
              )}`}
          </Text>
          {event.hasReached && (
            <CheckCircleIcon color="green.200" ml={3} my="auto" />
          )}
        </Heading>
      </CardHeader>
      <CardBody px={2} py={1}>
        {times && (
          <Grid templateColumns="repeat(3, minmax(0, auto))" row={2} gap={5}>
            <Box textAlign="center">
              <Number number={times[0]} />
              Year(s)
            </Box>
            <Box textAlign="center">
              <Number number={times[1]} />
              Month(s)
            </Box>
            <Box textAlign="center">
              <Number number={times[2]} />
              Day(s)
            </Box>
            <Box textAlign="center">
              <Number number={times[3]} />
              Hours
            </Box>
            <Box textAlign="center">
              <Number number={times[4]} />
              Minutes
            </Box>
            <Box textAlign="center">
              <Number number={times[5]} />
              Sec
            </Box>
          </Grid>
        )}
      </CardBody>
      <CardFooter p={2} display="flex" justifyContent="right">
        <DeleteEventPopover onDelete={() => deleteEventById(event.id)} />
      </CardFooter>
    </Card>
  );
};
