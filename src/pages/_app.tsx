import '@/styles/globals.css';

import type { AppProps as NextAppProps } from 'next/app';
import useWrappedStore from '@/store';
import { DefaultSeo } from 'next-seo';
import { Provider } from 'react-redux';
import SEO from '@/next-seo.config';
import { Montserrat } from '@next/font/google';
import MainLayout from '@/layouts/MainLayout';
import ProgressBar from '@/components/ProgressBar';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
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
