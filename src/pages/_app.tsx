import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

import "react-toastify/dist/ReactToastify.min.css";
import "@css/style.scss";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
