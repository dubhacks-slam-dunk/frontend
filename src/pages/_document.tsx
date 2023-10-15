import { Html, Head, Main, NextScript } from 'next/document';
import { Theme, ThemePanel } from '@radix-ui/themes';
import App from './_app';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Theme
          accentColor="crimson"
          grayColor="sand"
          radius="large"
          scaling="100%"
          panelBackground="solid"
        >
          <Main />
          <NextScript />
          {/* <ThemePanel /> */}
        </Theme>
      </body>
    </Html>
  );
}
