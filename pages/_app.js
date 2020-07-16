import './styles.scss';
import { useEffect, useState } from 'react';
import Router from 'next/dist/next-server/lib/router/router';
import LoadingBar from '../components/LoadingBar';

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const handleRouteStart = () => {
      setLoading(true);
    }
    const handleRouteComplete = () => {
      console.log('Complete')
      setLoading(false);
    }

    Router.events.on('routeChangeStart', handleRouteStart);
    Router.events.on('routeChangeComplete', handleRouteComplete);

    return () => {
      Router.events.off('routeChangeStart', handleRouteStart);
      Router.events.off('routeChangeComplete', handleRouteStart);
    }
  }, [setLoading])
  return (
    <>
      <LoadingBar loading={loading}></LoadingBar>
      <Component {...pageProps} />
    </>
  )
}