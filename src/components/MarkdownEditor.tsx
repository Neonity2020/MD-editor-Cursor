'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Preview } from '@/components/Preview'

const MDEditor = dynamic(
  () => import('@uiw/react-md-editor'),
  { ssr: false }
)

export default function MarkdownEditor() {
  const [value, setValue] = useState<string | undefined>('# 开始编写...')
  const [isPreview, setIsPreview] = useState(false)

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      <div className="flex justify-end space-x-2">
        <Button 
          variant={isPreview ? "outline" : "default"}
          onClick={() => setIsPreview(false)}
        >
          编辑器
        </Button>
        <Button 
          variant={isPreview ? "default" : "outline"}
          onClick={() => setIsPreview(true)}
        >
          预览卡片
        </Button>
      </div>
      
      {isPreview ? (
        <Preview content={value || ''} />
      ) : (
        <Card className="p-4">
          <MDEditor
            value={value}
            onChange={setValue}
            preview="live"
            height={500}
          />
        </Card>
      )}
    </div>
  )
} 