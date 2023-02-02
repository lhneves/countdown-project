import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Input,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';

export const NewEventCard = () => {
  return (
    <Card variant="outline" size="sm">
      <CardHeader p={4}>
        <Heading size="md" textAlign="center">
          Create Your Event
        </Heading>
      </CardHeader>
      <CardBody>
        <Input placeholder="Event Name" variant="filled" />

        <SimpleGrid templateColumns="repeat(5, minmax(0, auto))" gap={4} mt={5}>
          <Input placeholder="Day" variant="filled" />
          <Text display="flex" alignItems="center">
            /
          </Text>
          <Input placeholder="Month" variant="filled" />
          <Text display="flex" alignItems="center">
            /
          </Text>
          <Input placeholder="Year" variant="filled" />
        </SimpleGrid>
        <SimpleGrid templateColumns="repeat(3, minmax(0, auto))" gap={4} mt={5}>
          <Input placeholder="Hour" variant="filled" />
          <Text display="flex" alignItems="center">
            :
          </Text>
          <Input placeholder="Min" variant="filled" />
        </SimpleGrid>
        <Text pt={2} pl={2} fontSize="xs" w="100%">
          Hour and Minutes are optional.
        </Text>
      </CardBody>
    </Card>
  );
};
