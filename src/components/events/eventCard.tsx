import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Grid,
  Heading,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { dateTimeToSeconds, secondsToTimes } from '@/utils/date';
import { useInterval } from '@/hooks/use-interval';
import { Number } from '../number';

type EventProps = {
  name: string;
  date: Date;
  hour?: number;
  min?: number;
};

export const EventCard = ({ name = 'Event Name', date }: EventProps) => {
  const dateFormatted = date.toLocaleDateString('pt-br');

  const [diferenceInSeconds, setDiferenceInSeconds] = useState(
    dateTimeToSeconds(date) - dateTimeToSeconds(new Date()),
  );
  const [times, setTimes] = useState<string[]>();

  useInterval(() => {
    setDiferenceInSeconds(diferenceInSeconds - 1);
  }, 1000);

  useEffect(() => {
    setTimes(secondsToTimes(diferenceInSeconds));
  }, [diferenceInSeconds]);

  useEffect(() => {
    setDiferenceInSeconds(
      dateTimeToSeconds(date) - dateTimeToSeconds(new Date()),
    );
  }, [date]);

  return (
    <Card>
      <CardHeader p={3} display="flex" justifyContent="space-between">
        <Heading size="sm">{name}</Heading>
        <Heading size="sm">{dateFormatted}</Heading>
      </CardHeader>
      <CardBody px={2} py={2}>
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
    </Card>
  );
};
