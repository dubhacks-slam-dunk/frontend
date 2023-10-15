import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { AuthProvider } from '@/utils/AuthContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Theme accentColor="iris">
        <Component {...pageProps} />
      </Theme>
    </AuthProvider>
  );
}
