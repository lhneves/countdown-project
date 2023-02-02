import { addHoursToDate } from '@/utils/date';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import { ArrowDownIcon } from '@chakra-ui/icons';
import { Event } from './event';

export const ShowEventsCard = () => {
  return (
    <Card variant="outline">
      <CardHeader p={4}>
        <Heading size="md" textAlign="center">
          Your Future Events
        </Heading>
      </CardHeader>
      <CardBody p={2}>
        <Event name="My Birthday" date={addHoursToDate(new Date(), 24 * 2)} />
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
