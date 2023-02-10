import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import MainLayout from '@/components/layout/mainLayout';
import { EventsContextProvider } from '@/context/eventsContexts';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <EventsContextProvider>
      <ChakraProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ChakraProvider>
    </EventsContextProvider>
  );
}
