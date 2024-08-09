import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { JetBrains_Mono } from "next/font/google";
import RootLayout from "../layout";
import LoadingModal from "../components/loading";
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={jetbrainsMono.className}>
      <RootLayout>
        <LoadingModal />
        <Component {...pageProps} />
      </RootLayout>
    </div>
  );
}
