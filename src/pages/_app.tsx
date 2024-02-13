import type { AppProps } from "next/app";

import "react-toastify/dist/ReactToastify.min.css";
import "@css/style.scss";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
