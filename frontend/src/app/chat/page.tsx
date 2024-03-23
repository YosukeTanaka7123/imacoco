'use client'
import Image from 'next/image'
import { ChangeEvent, useState } from 'react'

type Message = {
  name: string
  message: string
  timestamp: Date
}

export default function ChatPage() {
  const [name, setName] = useState('')
  const [rows, setRows] = useState(2)
  const [message, setMessage] = useState('')
  const [chat, setChat] = useState<Message[]>([])

  const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const lineCount = e.target.value.split('\n').length
    setMessage(e.target.value)
    setRows(lineCount > 2 ? lineCount : 2)
  }

  const sendMessage = () => {
    setChat([...chat, { name, message, timestamp: new Date() }])
    setMessage('')
  }

  return (
    <>
      <input
        className="rounded-md bg-red-200 p-2 font-bold"
        type="text"
        placeholder="あなたの名前を入力してください"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <div className="h-full overflow-y-auto rounded-md bg-red-100 p-4">
        {chat.map((msg, index) => (
          <div key={index} className="mb-2 rounded-md bg-white p-2 shadow-md">
            <div className="flex items-center justify-between">
              <div className="font-bold text-red-500">{msg.name}</div>
              <div className="text-sm text-gray-500">{msg.timestamp.toLocaleString()}</div>
            </div>
            <div className="whitespace-pre-wrap break-words text-gray-700">{msg.message}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-col">
        <textarea
          className="resize-none rounded-md border-2 border-red-200 p-2 disabled:border-gray-300"
          placeholder="メッセージ..."
          value={message}
          onChange={onMessageChange}
          rows={rows}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && e.ctrlKey) {
              e.preventDefault()
              sendMessage()
              setRows(2)
            }
          }}
          disabled={!name}
        />
        <div className="flex w-full">
          <button
            className="ml-auto rounded bg-red-200 px-4 py-2 hover:bg-red-300 disabled:bg-gray-300"
            onClick={() => {
              sendMessage()
              setRows(2)
            }}
            disabled={!name || !message}
          >
            <Image src="/send-arrow.svg" alt="Send Arrow" width={20} height={20} />
          </button>
        </div>
      </div>
    </>
  )
}
