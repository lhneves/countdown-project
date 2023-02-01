import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import MainLayout from '@/components/layout/mainLayout';

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider>
      <MainLayout router={router}>
        <Component {...pageProps} />
      </MainLayout>
    </ChakraProvider>
  );
}
