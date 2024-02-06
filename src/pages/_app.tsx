import type { AppProps } from "next/app";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import 'react-toastify/dist/ReactToastify.min.css';


import "@css/style.scss";

const client = new ApolloClient({
  uri: '/api/graphql',
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
