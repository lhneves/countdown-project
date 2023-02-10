import { Card, CardBody, CardHeader, Heading, Text } from '@chakra-ui/react';

export const EventCardEmpty = () => {
  return (
    <Card minH="20vh">
      <CardHeader p={3} display="flex" justifyContent="space-between">
        <Heading size="sm">Event Name</Heading>
      </CardHeader>
      <CardBody
        px={2}
        py={2}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Text maxH="4vh">Last Created Event Will Appear Here</Text>
      </CardBody>
    </Card>
  );
};
