import { ArrowLeft, Clock, MapPin, Train } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "横山食堂 | 株式会社食品計画",
  description: "八王子ラーメン横山食堂 - 東京都八王子市のご当地ラーメンとして親しまれている醤油ラーメン",
}

const menu = {
  ramen: [
    { name: "ラーメン", price: "1,000円" },
    { name: "チャーシューメン", price: "1,360円" },
    { name: "大盛", price: "+150円" },
  ],
  toppings: [
    { name: "玉ねぎ", price: "100円" },
    { name: "メンマ", price: "200円" },
    { name: "海苔", price: "200円" },
    { name: "生卵", price: "100円" },
  ],
  abura: [
    { name: "油そば", price: "1,000円" },
    { name: "チャーシュー油そば", price: "1,360円" },
  ],
  aburaNote: "※大盛は並盛と同一料金です",
  morning: [
    { name: "朝ラーセット", price: "1,000円" },
    { name: "かけラーメン", price: "500円" },
  ],
  side: [
    { name: "ライス", price: "200円" },
    { name: "和え玉", price: "300円" },
    { name: "和え玉(大)", price: "450円" },
  ],
  alcohol: [
    { name: "缶ビール", price: "500円" },
  ],
}

const shopInfo = {
  name: "八王子ラーメン横山食堂 吉祥寺店",
  postalCode: "〒180-0003",
  address: "東京都武蔵野市吉祥寺南町1丁目9-11\n第2吉祥寺じぞうビル 2階E号室",
  hours: {
    weekday: "平日 8:00〜14:00",
    weekend: "土日・祝日 10:00〜15:00",
  },
  closed: "金曜日",
  access: [
    "JR中央線 / 吉祥寺駅 徒歩3分",
    "京王井の頭線 / 吉祥寺駅 徒歩3分",
  ],
  links: [
    { name: "食べログ", url: "https://tabelog.com/tokyo/A1320/A132001/13309870/" },
    { name: "ラーメンデータベース", url: "https://ramendb.supleks.jp/s/165759.html" },
  ],
  sns: [
    { name: "X", url: "https://x.com/yokoyamashokudo" },
    { name: "Instagram", url: "https://www.instagram.com/yokoyamashokudo/" },
  ],
}

export default function YokoyamaShokudoPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-[#0d1b2a]">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          {/* Back Link */}
          <Link
            href="/#brands"
            className="mb-8 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-[#d4af37]"
          >
            <ArrowLeft className="h-4 w-4" />
            ブランド一覧に戻る
          </Link>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Text Content */}
            <div className="flex flex-col justify-center">
              <p className="mb-3 text-sm tracking-[0.3em] text-[#d4af37]">HACHIOJI RAMEN</p>
              <h1 className="mb-6 text-3xl font-medium tracking-wide text-white sm:text-4xl md:text-5xl">
                八王子ラーメン<br />横山食堂
              </h1>
              <div className="mb-8 h-px w-16 bg-[#d4af37]" />
              <p className="text-lg leading-relaxed text-gray-300">
                東京都八王子市のご当地ラーメンとして<br className="hidden sm:inline" />
                親しまれている醤油ラーメン
              </p>
              <p className="mt-4 text-gray-400">
                スープ表面を覆うラードと<br className="hidden sm:inline" />
                刻んだ玉ねぎのトッピングが特徴
              </p>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-square overflow-hidden">
                <Image
                  src="/images/yokoyama-ramen.jpeg"
                  alt="八王子ラーメン横山食堂"
                  width={600}
                  height={600}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              {/* Decorative Frame */}
              <div className="absolute -bottom-4 -right-4 -z-10 hidden h-full w-full border border-[#d4af37] lg:block" />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm tracking-[0.3em] text-[#d4af37]">MENU</p>
            <h2 className="text-2xl font-medium tracking-wide text-[#0d1b2a] sm:text-3xl">
              メニュー
            </h2>
            <div className="mx-auto mt-6 h-px w-16 bg-[#d4af37]" />
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Ramen Menu */}
            <div>
              <h3 className="mb-6 border-b border-[#d4af37] pb-3 text-lg font-medium text-[#0d1b2a]">
                ラーメン
              </h3>
              <ul className="space-y-4">
                {menu.ramen.map((item, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <span className="text-[#0d1b2a]">{item.name}</span>
                    <span className="text-[#d4af37]">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Abura Soba */}
            <div>
              <h3 className="mb-6 border-b border-[#d4af37] pb-3 text-lg font-medium text-[#0d1b2a]">
                油そば
              </h3>
              <ul className="space-y-4">
                {menu.abura.map((item, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <span className="text-[#0d1b2a]">{item.name}</span>
                    <span className="text-[#d4af37]">{item.price}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-gray-500">{menu.aburaNote}</p>
            </div>

            {/* Morning Menu */}
            <div>
              <h3 className="mb-6 border-b border-[#d4af37] pb-3 text-lg font-medium text-[#0d1b2a]">
                朝メニュー
              </h3>
              <ul className="space-y-4">
                {menu.morning.map((item, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <span className="text-[#0d1b2a]">{item.name}</span>
                    <span className="text-[#d4af37]">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Toppings */}
            <div>
              <h3 className="mb-6 border-b border-[#d4af37] pb-3 text-lg font-medium text-[#0d1b2a]">
                トッピング
              </h3>
              <ul className="space-y-4">
                {menu.toppings.map((item, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <span className="text-[#0d1b2a]">{item.name}</span>
                    <span className="text-[#d4af37]">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Side */}
            <div>
              <h3 className="mb-6 border-b border-[#d4af37] pb-3 text-lg font-medium text-[#0d1b2a]">
                サイド
              </h3>
              <ul className="space-y-4">
                {menu.side.map((item, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <span className="text-[#0d1b2a]">{item.name}</span>
                    <span className="text-[#d4af37]">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Alcohol */}
            <div>
              <h3 className="mb-6 border-b border-[#d4af37] pb-3 text-lg font-medium text-[#0d1b2a]">
                アルコール
              </h3>
              <ul className="space-y-4">
                {menu.alcohol.map((item, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <span className="text-[#0d1b2a]">{item.name}</span>
                    <span className="text-[#d4af37]">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Info Section */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm tracking-[0.3em] text-[#d4af37]">SHOP INFO</p>
            <h2 className="text-2xl font-medium tracking-wide text-[#0d1b2a] sm:text-3xl">
              店舗情報
            </h2>
            <div className="mx-auto mt-6 h-px w-16 bg-[#d4af37]" />
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="bg-white p-8 shadow-sm sm:p-12">
              <h3 className="mb-8 text-xl font-medium text-[#0d1b2a]">{shopInfo.name}</h3>
              
              <div className="grid gap-8 md:grid-cols-2">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex gap-4">
                    <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#d4af37]" />
                    <div>
                      <p className="mb-1 text-xs tracking-wider text-gray-400">住所</p>
                      <p className="text-[#0d1b2a]">{shopInfo.postalCode}</p>
                      <p className="whitespace-pre-line text-[#0d1b2a]">{shopInfo.address}</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex gap-4">
                    <Clock className="mt-1 h-5 w-5 shrink-0 text-[#d4af37]" />
                    <div>
                      <p className="mb-1 text-xs tracking-wider text-gray-400">営業時間</p>
                      <p className="text-[#0d1b2a]">{shopInfo.hours.weekday}</p>
                      <p className="text-[#0d1b2a]">{shopInfo.hours.weekend}</p>
                      <p className="mt-2 text-sm text-gray-500">定休日：{shopInfo.closed}</p>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Access */}
                  <div className="flex gap-4">
                    <Train className="mt-1 h-5 w-5 shrink-0 text-[#d4af37]" />
                    <div>
                      <p className="mb-1 text-xs tracking-wider text-gray-400">アクセス</p>
                      {shopInfo.access.map((line, index) => (
                        <p key={index} className="text-[#0d1b2a]">{line}</p>
                      ))}
                    </div>
                  </div>

                  {/* SNS */}
                  <div className="pt-4">
                    <p className="mb-3 text-xs tracking-wider text-gray-400">SNS</p>
                    <div className="flex flex-wrap gap-4">
                      {shopInfo.sns.map((link, index) => (
                        <a
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border border-[#d4af37] px-4 py-2 text-sm text-[#d4af37] transition-colors hover:bg-[#d4af37] hover:text-[#0d1b2a]"
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* External Links */}
                  <div className="pt-4">
                    <p className="mb-3 text-xs tracking-wider text-gray-400">外部リンク</p>
                    <div className="flex flex-wrap gap-4">
                      {shopInfo.links.map((link, index) => (
                        <a
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border border-[#0d1b2a] px-4 py-2 text-sm text-[#0d1b2a] transition-colors hover:bg-[#0d1b2a] hover:text-white"
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="aspect-[16/9] w-full overflow-hidden border border-gray-200 bg-gray-100 md:aspect-[21/9]">
            <iframe
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=八王子ラーメン横山食堂+吉祥寺店&zoom=17"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="八王子ラーメン横山食堂 吉祥寺店"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
