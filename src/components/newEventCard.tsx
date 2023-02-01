import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from '@chakra-ui/react';

export const NewEventCard = () => {
  return (
    <Card variant="outline" size="sm">
      <CardHeader>
        <Heading size="md" textAlign="center">
          Create Your Event
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
