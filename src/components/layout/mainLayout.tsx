import Head from 'next/head';

import { Box, Container } from '@chakra-ui/react';

type MainLayoutProps = {
  children: React.ReactNode;
};
const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>CountDown Project</title>
      </Head>

      <Container maxW="container.lg" pt={14}>
        {children}
      </Container>
    </Box>
  );
};

export default MainLayout;
