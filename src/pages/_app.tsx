import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import { store } from "../lib/store";
import { StoreProvider } from "easy-peasy";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      {/* @ts-ignore */}
      <StoreProvider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StoreProvider>
    </ChakraProvider>
  );
}

export default MyApp;
