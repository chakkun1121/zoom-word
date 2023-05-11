import Footer from "./footer";
import Header from "./header";
import Main from "./main";
export const metadata = {
  title: "文字を拡大 | chakkun1121",
  description:
    "文字を拡大するだけのページです。漢字などの文字を拡大したいときに使ってください。",
};
export default function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
