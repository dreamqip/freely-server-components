import '@/styles/globals.css';

import type { AppProps as NextAppProps } from 'next/app';
import { wrapper } from '@/store';
import { DefaultSeo } from 'next-seo';
import { Provider } from 'react-redux';
import SEO from '../../next-seo.config';
import dynamic from 'next/dynamic';
import { Montserrat } from '@next/font/google';
import Script from 'next/script';

const MainLayout = dynamic(() => import('@/layouts/MainLayout'));
const Progress = dynamic(() => import('@/components/ProgressBar'));

const montserrat = Montserrat({
  subsets: ['latin'],
});

type AppProps<P = any> = {
  Component: NextAppProps<P>['Component'] & { theme?: string };
  rest: any;
} & P;

function MyApp({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <>
      <style jsx global>{`
        :root {
          --font-montserrat: ${montserrat.style.fontFamily};
        }
      `}</style>
      <Script
        id='google-analytics'
        src='https://www.googletagmanager.com/gtag/js?id=G-3FTM4H2WDP'
        strategy='worker'
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-3FTM4H2WDP');
          `,
        }}
      ></Script>

      <DefaultSeo {...SEO} />
      <Progress />
      <Provider store={store}>
        <MainLayout theme={Component.theme}>
          <Component {...props.pageProps} />
        </MainLayout>
      </Provider>
    </>
  );
}

export default MyApp;
