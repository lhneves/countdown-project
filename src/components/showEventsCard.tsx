import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from '@chakra-ui/react';

export const ShowEventsCard = () => {
  return (
    <Card variant="outline">
      <CardHeader>
        <Heading size="md" textAlign="center">
          Your Future Events
        </Heading>
      </CardHeader>
      <CardBody>
        <Text>View a summary of all your customers over the last month.</Text>
      </CardBody>
      <CardFooter>
        <Button>View here</Button>
      </CardFooter>
    </Card>
  );
};
