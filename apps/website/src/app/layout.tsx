import { firaCode, getFontVariables, notoSans } from '@hayabusa/core/font/family';
import { getBaseUrl } from '@hayabusa/core/util/get-base-url';
import { colors } from '@hayabusa/design-token';
import { css } from '@hayabusa/style/css';
import { ThemeProvider } from '@hayabusa/ui/component/theme-provider';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata, NextPage, Viewport } from 'next';
import type { ReactNode } from 'react';
import { UrqlProvider } from '#website/infra/urql/ssr';
import { Footer } from '#website/layout/global/footer';
import '#website/style/global.css';

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout: NextPage<RootLayoutProps> = async ({ children }) => (
  <html lang='en' className={getFontVariables([firaCode, notoSans])} suppressHydrationWarning>
    <head />
    <body
      className={css({
        pos: 'relative',
        bg: 'iris.1',
        fontFamily: 'sans',
      })}
    >
      <Analytics />
      <div
        aria-hidden
        className={css({
          pos: 'absolute',
          zIndex: '[-20]',
          w: 'full',
          h: 'full',
          bgPattern: 'iris.light.a.7',
          maskImage: 'linear-gradient(to bottom, black, transparent 80%)',
          _dark: {
            bgPattern: 'iris.dark.a.7',
          },
        })}
      />
      <UrqlProvider>
        <ThemeProvider attribute='data-theme' enableSystem defaultTheme='system'>
          {children}
          <Footer />
        </ThemeProvider>
      </UrqlProvider>
    </body>
  </html>
);

export default RootLayout;

export const generateMetadata = (): Metadata => {
  const title = 'Hayabusa | The next-gen web User Interface';
  const description =
    'Hayabusa is a service that allows users to manipulate any website in natural language through dynamic automatic browser control using LLM.';

  return {
    description,
    metadataBase: getBaseUrl({ app: 'website' }),
    openGraph: {
      title,
      description,
      locale: 'en_US',
      url: getBaseUrl({ app: 'website' }),
    },
    title: {
      default: title,
      template: '%s | Hayabusa',
    },
    twitter: {
      card: 'summary_large_image',
    },
  };
};

export const generateViewport = async (): Promise<Viewport> => ({
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: colors.iris.light['7'] },
    { media: '(prefers-color-scheme: dark)', color: colors.iris.dark['7'] },
  ],
});
