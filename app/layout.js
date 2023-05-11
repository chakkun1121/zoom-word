import "./globals.css";
import Header from "./header";
export const metadata = {
  title: "文字を拡大 | chakkun1121",
  description:
    "文字を拡大するだけのページです。漢字などの文字を拡大したいときに使ってください。",
};
export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
