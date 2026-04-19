import Link from "next/link"

export function ContactSection() {
  return (
    <section id="contact" className="bg-[#f8f8f8] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm tracking-[0.3em] text-[#d4af37]">CONTACT</p>
          <h2 className="text-2xl font-medium tracking-wide text-[#0d1b2a] sm:text-3xl md:text-4xl">
            お問い合わせ
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-[#d4af37]" />
        </div>

        <div className="mx-auto max-w-5xl">
          {/* CTA Box */}
          <div className="mb-16 bg-[#0d1b2a] p-8 sm:p-12 md:p-16">
            <div className="text-center">
              <h3 className="mb-4 text-xl font-medium text-white sm:text-2xl">
                飲食店の事業承継・M&Aに関するご相談
              </h3>
              <p className="mb-8 leading-relaxed text-gray-400">
                後継者問題でお悩みの飲食店オーナー様、飲食業界への参入をお考えの方、<br className="hidden sm:inline" />
                まずはお気軽にご相談ください。秘密厳守でご対応いたします。
              </p>
              <Link
                href="/contact"
                className="inline-block border border-[#d4af37] px-10 py-4 text-sm tracking-widest text-[#d4af37] transition-all hover:bg-[#d4af37] hover:text-[#0d1b2a]"
              >
                お問い合わせはこちら
              </Link>
            </div>
          </div>

          {/* Company Info */}
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left: Company Details */}
            <div>
              <p className="mb-3 text-sm tracking-[0.2em] text-[#d4af37]">COMPANY</p>
              <h3 className="mb-8 text-xl font-medium text-[#0d1b2a]">会社概要</h3>
              
              <dl className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:gap-8">
                  <dt className="mb-1 w-24 shrink-0 text-xs tracking-wider text-gray-400 sm:mb-0">商号</dt>
                  <dd className="text-[#0d1b2a]">株式会社食品計画</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-8">
                  <dt className="mb-1 w-24 shrink-0 text-xs tracking-wider text-gray-400 sm:mb-0">本社</dt>
                  <dd className="text-[#0d1b2a]">〒150-0043<br />東京都渋谷区道玄坂1-16-6 二葉ビル8B</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-8">
                  <dt className="mb-1 w-24 shrink-0 text-xs tracking-wider text-gray-400 sm:mb-0">設立</dt>
                  <dd className="text-[#0d1b2a]">2025年1月22日</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-8">
                  <dt className="mb-1 w-24 shrink-0 text-xs tracking-wider text-gray-400 sm:mb-0">資本金</dt>
                  <dd className="text-[#0d1b2a]">6,000千円</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-8">
                  <dt className="mb-1 w-24 shrink-0 text-xs tracking-wider text-gray-400 sm:mb-0">事業内容</dt>
                  <dd className="text-[#0d1b2a]">飲食店経営業務</dd>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-8">
                  <dt className="mb-1 w-24 shrink-0 text-xs tracking-wider text-gray-400 sm:mb-0">連絡先</dt>
                  <dd className="text-[#0d1b2a]">
                    <a href="mailto:board@shokuhinkeikaku.com" className="transition-colors hover:text-[#d4af37]">
                      board@shokuhinkeikaku.com
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            {/* Right: Map */}
            <div className="aspect-[4/3] w-full overflow-hidden border border-gray-200 bg-gray-100 lg:aspect-auto lg:h-80">
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=東京都渋谷区道玄坂1-16-6&zoom=17"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="株式会社食品計画 本社所在地"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
