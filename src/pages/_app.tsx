import "@/styles/globals.scss";
import 'rsuite/dist/rsuite.min.css';
import type { AppProps } from "next/app";

import { Sidebar } from "@/components/Sidebar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <Component {...pageProps} />
      </div>
    </>
  )
}
