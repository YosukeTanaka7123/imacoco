import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="container m-auto">
      <ul>
        <li>
          <Link href="/chat">チャットへ</Link>
        </li>
      </ul>
    </main>
  )
}
