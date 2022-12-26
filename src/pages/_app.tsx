import '@/styles/globals.css';

import type { AppProps as NextAppProps } from 'next/app';
import useWrappedStore from '@/store';
import { DefaultSeo } from 'next-seo';
import { Provider } from 'react-redux';
import SEO from '@/next-seo.config';
import { Montserrat } from '@next/font/google';
import MainLayout from '@/layouts/MainLayout';
import dynamic from 'next/dynamic';

const ProgressBar = dynamic(() => import('@/components/ProgressBar'), {
  ssr: false,
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

type AppProps<P> = {
  Component: NextAppProps<P>['Component'] & { theme?: string };
  rest: NextAppProps<P>['pageProps'];
} & P;

function MyApp({ Component, ...rest }: AppProps<NextAppProps>) {
  const { store, props } = useWrappedStore(rest);

  return (
    <>
      <DefaultSeo {...SEO} />
      <ProgressBar />
      <Provider store={store}>
        <MainLayout font={montserrat.variable} theme={Component.theme}>
          <Component {...props.pageProps} />
        </MainLayout>
      </Provider>
    </>
  );
}

export default MyApp;
