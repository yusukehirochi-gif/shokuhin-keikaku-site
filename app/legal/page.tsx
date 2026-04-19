import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 | 株式会社食品計画",
  description: "株式会社食品計画の特定商取引法に基づく表記",
}

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative flex min-h-[30vh] items-center justify-center bg-[#0d1b2a] pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0d1b2a]/50" />
        <div className="relative z-10 text-center px-4">
          <p className="mb-3 text-sm tracking-[0.3em] text-[#d4af37]">LEGAL</p>
          <h1 className="text-2xl font-medium tracking-wide text-white sm:text-3xl md:text-4xl">
            特定商取引法に基づく表記
          </h1>
          <div className="mx-auto mt-6 h-px w-16 bg-[#d4af37]" />
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* 販売業者 */}
            <div>
              <h2 className="mb-4 border-b border-[#d4af37] pb-2 text-lg font-medium text-[#0d1b2a]">
                販売業者
              </h2>
              <p className="text-gray-600">株式会社食品計画</p>
            </div>

            {/* 運営統括責任者 */}
            <div>
              <h2 className="mb-4 border-b border-[#d4af37] pb-2 text-lg font-medium text-[#0d1b2a]">
                運営統括責任者
              </h2>
              <p className="text-gray-600">代表取締役</p>
            </div>

            {/* 所在地 */}
            <div>
              <h2 className="mb-4 border-b border-[#d4af37] pb-2 text-lg font-medium text-[#0d1b2a]">
                所在地
              </h2>
              <p className="text-gray-600">
                〒150-0043<br />
                東京都渋谷区道玄坂1-16-6 二葉ビル8B
              </p>
            </div>

            {/* 連絡先 */}
            <div>
              <h2 className="mb-4 border-b border-[#d4af37] pb-2 text-lg font-medium text-[#0d1b2a]">
                連絡先
              </h2>
              <p className="text-gray-600">
                メールアドレス：<a href="mailto:board@shokuhinkeikaku.com" className="text-[#d4af37] hover:underline">board@shokuhinkeikaku.com</a>
              </p>
            </div>

            {/* 商品代金以外の必要料金 */}
            <div>
              <h2 className="mb-4 border-b border-[#d4af37] pb-2 text-lg font-medium text-[#0d1b2a]">
                商品代金以外の必要料金
              </h2>
              <p className="text-gray-600">
                消費税（商品代金に含む）
              </p>
            </div>

            {/* 支払方法 */}
            <div>
              <h2 className="mb-4 border-b border-[#d4af37] pb-2 text-lg font-medium text-[#0d1b2a]">
                支払方法
              </h2>
              <p className="text-gray-600">
                店舗での飲食：キャッシュレス決済（クレジットカード、電子マネー、QRコード決済）
              </p>
            </div>

            {/* 支払時期 */}
            <div>
              <h2 className="mb-4 border-b border-[#d4af37] pb-2 text-lg font-medium text-[#0d1b2a]">
                支払時期
              </h2>
              <p className="text-gray-600">
                店舗での飲食：ご注文時
              </p>
            </div>

            {/* 商品の引き渡し時期 */}
            <div>
              <h2 className="mb-4 border-b border-[#d4af37] pb-2 text-lg font-medium text-[#0d1b2a]">
                商品の引き渡し時期
              </h2>
              <p className="text-gray-600">
                店舗での飲食：調理完了後、速やかにご提供いたします
              </p>
            </div>

            {/* 返品・交換について */}
            <div>
              <h2 className="mb-4 border-b border-[#d4af37] pb-2 text-lg font-medium text-[#0d1b2a]">
                返品・交換について
              </h2>
              <p className="text-gray-600">
                商品の性質上、お客様都合による返品・交換はお受けできません。<br />
                商品に不備があった場合は、速やかにスタッフまでお申し付けください。
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
