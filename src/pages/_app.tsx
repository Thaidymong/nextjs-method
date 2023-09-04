import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {ApolloProvider} from "@apollo/client";
import { client } from '@/libs/apollo';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

