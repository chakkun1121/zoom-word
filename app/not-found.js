import Link from "next/link";

export default function NotFound() {
  return (
    <section>
      <h1>404 - Page Not Found</h1>
      <p>お探しのページは見つかりませんでした。</p>
      <Link href="/">トップページに戻る</Link>
    </section>
  )
}