import Link from "next/link";
export default function Footer() {
  return (
    <footer>
      <section id="copyright">
        <p>@ 2023 chakkun1121</p>
      </section>
      <section id="links">
        <Link href="./privacy-policy">プライバシーポリシー</Link>
        <a href="https://chakkun1121.github.io/">chakkun1121のホームページ</a>
      </section>
    </footer>
  );
}
