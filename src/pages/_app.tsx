import '@/styles/globals.css';

import type { AppProps as NextAppProps } from 'next/app';
import { wrapper } from '@/store';
import { DefaultSeo } from 'next-seo';
import { Provider } from 'react-redux';
import SEO from '../../next-seo.config';
import dynamic from 'next/dynamic';
import { Montserrat } from '@next/font/google';

const MainLayout = dynamic(() => import('@/layouts/MainLayout'));
const Progress = dynamic(() => import('@/components/ProgressBar'));

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700', '800'],
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
