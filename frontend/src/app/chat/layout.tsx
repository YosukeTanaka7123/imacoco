import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'チャット',
  description: 'チャットができるページです。',
}

export default function ChatLayout({ children }: { children: ReactNode }) {
  return (
    <main className="container m-auto flex h-screen flex-col gap-y-2 bg-red-50 p-4">
      {children}
    </main>
  )
}
