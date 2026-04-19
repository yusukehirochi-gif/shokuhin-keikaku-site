import { ArrowRight, ArrowLeft, FileText } from "lucide-react"
import Link from "next/link"

const news = [
  {
    id: "kichijoji-open-date",
    date: "2025.07.05",
    category: "新店情報",
    title: "『八王子ラーメン横山食堂 吉祥寺店』本日オープン",
    description: "本日、吉祥寺駅 徒歩3分の場所に『八王子ラーメン横山食堂 吉祥寺店』がオープンいたしました。皆様のご来店を心よりお待ちしております。",
    address: "東京都武蔵野市吉祥寺南町1丁目9-11 第2吉祥寺じぞうビル 2階E号室",
  },
  {
    id: "kichijoji-open",
    date: "2025.05.17",
    category: "新店情報",
    title: "『八王子ラーメン横山食堂 吉祥寺店』オープンのお知らせ",
    description: "2025年7月上旬 吉祥寺駅 徒歩3分の場所に『八王子ラーメン横山食堂 吉祥寺店』を開店予定です。日程の詳細は決定次第、お知らせいたします。",
    address: "東京都武蔵野市吉祥寺南町1丁目9-11 第2吉祥寺じぞうビル 2階E号室",
  },
]

const announcements = [
  {
    title: "第1期決算公告",
    date: "2026年1月31日",
    files: [
      { name: "貸借対照表", size: "PDF", href: "/documents/balance-sheet-2025.pdf" },
    ],
  },
]

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed left-0 right-0 top-0 z-50 bg-[#0d1b2a]">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center">
            <div>
              <p className="text-lg font-medium tracking-wider text-white">食品計画</p>
              <p className="text-[10px] tracking-widest text-gray-400">SHOKUHIN KEIKAKU</p>
            </div>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-[#d4af37]"
          >
            <ArrowLeft className="h-4 w-4" />
            トップに戻る
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-[#0d1b2a] pb-16 pt-32 sm:pb-24 sm:pt-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm tracking-[0.3em] text-[#d4af37]">NEWS</p>
          <h1 className="text-3xl font-medium tracking-wide text-white sm:text-4xl md:text-5xl">
            ニュースリリース
          </h1>
          <div className="mt-6 h-px w-16 bg-[#d4af37]" />
        </div>
      </section>

      {/* News List */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-0">
            {news.map((item) => (
              <article
                key={item.id}
                id={item.id}
                className="scroll-mt-24 border-b border-gray-200 py-8 first:pt-0"
              >
                <div className="mb-4 flex flex-wrap items-center gap-4">
                  <time className="text-sm text-gray-500">{item.date}</time>
                  <span className="border border-[#d4af37] px-3 py-1 text-xs text-[#d4af37]">
                    {item.category}
                  </span>
                </div>
                <h2 className="mb-4 text-lg font-medium text-[#0d1b2a] sm:text-xl">
                  {item.title}
                </h2>
                <p className="leading-relaxed text-gray-600">
                  {item.description}
                </p>
                {item.address && (
                  <p className="mt-4 text-sm text-gray-500">
                    <span className="font-medium text-[#0d1b2a]">住所：</span>
                    {item.address}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Announcements */}
      <section className="border-t border-gray-200 bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* 決算公告 */}
          <div className="mb-16">
            <p className="mb-3 text-sm tracking-[0.2em] text-[#d4af37]">FINANCIAL ANNOUNCEMENT</p>
            <h2 className="mb-8 text-xl font-medium text-[#0d1b2a] sm:text-2xl">決算公告</h2>
            
            <div className="space-y-6">
              {announcements.map((announcement, index) => (
                <div
                  key={index}
                  className="border border-gray-200 bg-white p-6"
                >
                  <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="font-medium text-[#0d1b2a]">{announcement.title}</h3>
                    <time className="text-sm text-gray-500">{announcement.date}</time>
                  </div>
                  <div className="space-y-2">
                    {announcement.files.map((file, fileIndex) => (
                      <a
                        key={fileIndex}
                        href={file.href}
                        download
                        className="group flex items-center gap-3 text-sm text-gray-600 transition-colors hover:text-[#d4af37]"
                      >
                        <FileText className="h-4 w-4" />
                        <span>{file.name}</span>
                        <span className="text-xs text-gray-400">({file.size})</span>
                        <ArrowRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 電子公告 */}
          <div>
            <p className="mb-3 text-sm tracking-[0.2em] text-[#d4af37]">ELECTRONIC ANNOUNCEMENT</p>
            <h2 className="mb-8 text-xl font-medium text-[#0d1b2a] sm:text-2xl">電子公告</h2>
            
            <div className="border border-gray-200 bg-white p-6">
              <p className="text-gray-600">現在公示中の法定公告はありません。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0d1b2a] py-12">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Link href="/" className="mb-6 inline-block">
            <p className="text-lg font-medium tracking-wider text-white">株式会社食品計画</p>
            <p className="text-[10px] tracking-widest text-gray-500">SHOKUHIN KEIKAKU CO., LTD.</p>
          </Link>
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Shokuhin Keikaku Co., Ltd. All Rights Reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
