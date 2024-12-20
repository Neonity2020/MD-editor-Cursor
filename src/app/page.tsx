import MarkdownEditor from '@/components/MarkdownEditor'

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto mb-8">
        <h1 className="text-3xl font-bold mb-4">Markdown 编辑器</h1>
      </div>
      <MarkdownEditor />
    </main>
  )
}