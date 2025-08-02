import "@styles/globals.scss";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={`${geistSans.variable} ${geistMono.variable} fade-in`}>
      <Component {...pageProps} />
    </main>
  );
}
