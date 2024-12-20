'use client'

import { Card } from '@/components/ui/card'
import ReactMarkdown from 'react-markdown'

interface PreviewProps {
  content: string
}

export function Preview({ content }: PreviewProps) {
  return (
    <Card className="p-8">
      <div className="prose dark:prose-invert prose-slate max-w-none w-full">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </Card>
  )
}