import { ArrowRight } from "lucide-react"
import Link from "next/link"

const news = [
  {
    id: "kichijoji-open-date",
    date: "2025.07.05",
    category: "新店情報",
    title: "『八王子ラーメン横山食堂 吉祥寺店』本日オープン",
  },
  {
    id: "kichijoji-open",
    date: "2025.05.17",
    category: "新店情報",
    title: "『八王子ラーメン横山食堂 吉祥寺店』オープンのお知らせ",
  },
]

export function NewsSection() {
  return (
    <section id="news" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm tracking-[0.3em] text-[#d4af37]">NEWS</p>
          <h2 className="text-2xl font-medium tracking-wide text-[#0d1b2a] sm:text-3xl md:text-4xl">
            ニュースリリース
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-[#d4af37]" />
        </div>

        {/* News List */}
        <div className="mx-auto max-w-3xl">
          {news.map((item) => (
            <Link
              key={item.id}
              href={`/news#${item.id}`}
              className="group flex flex-col border-b border-gray-200 py-6 transition-colors hover:bg-gray-50 sm:flex-row sm:items-center sm:gap-6"
            >
              <div className="mb-2 flex items-center gap-4 sm:mb-0">
                <time className="text-sm text-gray-500">{item.date}</time>
                <span className="border border-[#d4af37] px-3 py-1 text-xs text-[#d4af37]">
                  {item.category}
                </span>
              </div>
              <p className="flex-1 text-sm text-[#0d1b2a] transition-colors group-hover:text-[#d4af37] sm:text-base">
                {item.title}
              </p>
              <ArrowRight className="hidden h-4 w-4 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-[#d4af37] sm:block" />
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 border border-[#0d1b2a] px-8 py-3 text-sm tracking-widest text-[#0d1b2a] transition-all hover:bg-[#0d1b2a] hover:text-white"
          >
            すべてのニュースを見る
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
