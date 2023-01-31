import themeBase from '@/styles/theme/theme';
import { ColorModeScript } from '@chakra-ui/react';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <ColorModeScript initialColorMode={themeBase.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
