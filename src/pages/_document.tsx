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
        <script
          src="https://apis.google.com/js/api.js"
          type="text/javascript"
        ></script>
        <script
          src="https://accounts.google.com/gsi/client"
          type="text/javascript"
        ></script>
      </body>
    </Html>
  );
}
