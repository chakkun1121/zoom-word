import { Metadata } from "next";
import GoogleAnalytics from "./GoogleAnalytics";
import Footer from "./footer";
import Header from "./header";
import Main from "./main";
export const metadata = {
  title: "文字を拡大 | chakkun1121",
  description:
    "文字を拡大するだけのページです。漢字や怪しいURLなどの文字を拡大したいときに使ってください。",
  alternates: {
    canonical: "https://zoom-word.vercel.app/",
  },
  openGraph: {
    title: "文字を拡大 | chakkun1121",
    description:
      "文字を拡大するだけのページです。漢字や怪しいURLなどの文字を拡大したいときに使ってください。",
    url: "https://zoom-word.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://zoom-word.vercel.app/ogp.png",
        width: 1200,
        height: 630,
        alt: "文字を拡大 | chakkun1121",
      },
    ],
  },
  twitter: {
    title: "文字を拡大 | chakkun1121",
    description:
      "文字を拡大するだけのページです。漢字や怪しいURLなどの文字を拡大したいときに使ってください。",
  },
};

export default function App() {
  return (
    <>
      <GoogleAnalytics />
      <Header />
      <Main />
      <Footer />
    </>
  );
}
