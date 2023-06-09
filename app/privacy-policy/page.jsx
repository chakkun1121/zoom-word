import Footer from "../footer";
import Header from "../header";

export default function PrivacyPolicyPages() {
  return (
    <>
      <Header />
      <main>
        <h1>プライバシーポリシー</h1>
        <section>
          <h2>cookieについて</h2>
          <p>
            当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を使用しています。このGoogleアナリティクスはデータの収集のためにCookieを使用しています。このデータは匿名で収集されており、個人を特定するものではありません。
            この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。この規約に関しての詳細は
            <a href="https://marketingplatform.google.com/about/analytics/terms/jp/">
              Googleアナリティクスサービス利用規約のページ
            </a>
            や
            <a href="https://policies.google.com/technologies/ads?hl=ja">
              Googleポリシーと規約ページ
            </a>
            をご覧ください。
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
