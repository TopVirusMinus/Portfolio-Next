import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="bg-transparent w-full md:w-3/4 mx-auto">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </>
  );
}
