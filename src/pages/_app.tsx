// import type { AppProps } from 'next/app';
import { withTRPC } from '@trpc/next';
import type { AppType } from 'next/dist/shared/lib/utils';
import type { AppRouter } from './api/trpc/[trpc]';

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default withTRPC<AppRouter>({
  config({ ctx }) {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    const url = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/api/trpc`
      : 'http://localhost:3000/api/trpc';

    return {
      url,
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: {
      //   defaultOptions: {
      //     queries: {
      //       refetchOnWindowFocus: false,
      //       retry: false,
      //       refetchInterval: false,
      //       refetchOnMount: false,
      //       refetchOnReconnect: false,
      //       cacheTime: Infinity,
      //     },
      //   },
      // },
    };
  },
  // with enabled, the batch req doesn't fire on load if the queryClientConfig is set
  // also see no cache-control headers
  ssr: true,
  responseMeta({ clientErrors, ctx }) {
    if (clientErrors.length) {
      console.log('clientErrors.length', clientErrors)
      return {
        status: clientErrors[0].data?.httpStatus ?? 500,
      };
    }
    // cache full page for 1 day + revalidate once every second
    const ONE_DAY_IN_SECONDS = 60 * 60 * 24;
    return {
      'Cache-Control': `s-maxage=1, stale-while-revalidate=${ONE_DAY_IN_SECONDS}`,
    };
  },
})(MyApp);
