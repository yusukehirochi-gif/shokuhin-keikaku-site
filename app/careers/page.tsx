import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MapPin, Clock, Banknote, Users, Building2, Phone } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "採用情報 | 株式会社食品計画",
  description: "株式会社食品計画の採用情報。八王子ラーメン店のアルバイトを募集しています。",
}

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative flex min-h-[40vh] items-center justify-center bg-[#0d1b2a] pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0d1b2a]/50" />
        <div className="relative z-10 text-center px-4">
          <p className="mb-3 text-sm tracking-[0.3em] text-[#d4af37]">CAREERS</p>
          <h1 className="text-3xl font-medium tracking-wide text-white sm:text-4xl md:text-5xl">
            採用情報
          </h1>
          <div className="mx-auto mt-6 h-px w-16 bg-[#d4af37]" />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Job Title */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-block border border-[#d4af37] px-4 py-1">
              <span className="text-sm tracking-wider text-[#d4af37]">アルバイト募集</span>
            </div>
            <h2 className="text-2xl font-medium text-[#0d1b2a] sm:text-3xl">
              八王子ラーメン店スタッフ
            </h2>
          </div>

          {/* Appeal Points */}
          <div className="mb-12 grid gap-4 sm:grid-cols-2">
            <div className="border border-gray-200 bg-gray-50 p-6 text-center">
              <p className="text-lg font-medium text-[#0d1b2a]">吉祥寺駅徒歩3分</p>
            </div>
            <div className="border border-gray-200 bg-gray-50 p-6 text-center">
              <p className="text-lg font-medium text-[#0d1b2a]">キャッシュレスオンリーで<br />キッチン作業に集中できる</p>
            </div>
          </div>

          {/* Job Description */}
          <div className="mb-12">
            <h3 className="mb-6 border-b border-[#d4af37] pb-3 text-lg font-medium text-[#0d1b2a]">
              仕事内容
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                キッチン・ホールサービス業務全般をお任せします。
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>仕込み、調理</li>
                <li>接客、料理提供</li>
                <li>キャッシュレス端末操作</li>
                <li>開店・閉店作業</li>
              </ul>
              <p className="mt-6">
                まずは笑顔で元気よくお客様を迎えていただければOKです。徐々にできることを増やしてください。
              </p>
              <p>
                アナタらしい働きで、お客様・職場を盛り上げてください。お店やラーメンに関するご意見も大歓迎です。ながく愛されるお店を、一緒につくっていきましょう。
              </p>
            </div>
          </div>

          {/* Requirements */}
          <div className="mb-12">
            <h3 className="mb-6 border-b border-[#d4af37] pb-3 text-lg font-medium text-[#0d1b2a]">
              <Users className="mr-2 inline-block h-5 w-5 text-[#d4af37]" />
              求めている人材
            </h3>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="mb-3 text-sm font-medium text-[#d4af37]">必須条件</p>
                <p className="text-gray-600">なし（経験・学歴不問）</p>
              </div>
              <div>
                <p className="mb-3 text-sm font-medium text-[#d4af37]">歓迎条件</p>
                <p className="text-gray-600">飲食店勤務経験（アルバイト経験でも歓迎）</p>
              </div>
            </div>
            <div className="mt-6">
              <p className="mb-3 text-sm font-medium text-[#d4af37]">求められる人材</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>接客が好きな方</li>
                <li>笑顔で元気よく挨拶できる方</li>
                <li>調理経験のある方（自炊でもOK）</li>
                <li>積極的に行動し意見を言える方</li>
              </ul>
            </div>
          </div>

          {/* Working Hours */}
          <div className="mb-12">
            <h3 className="mb-6 border-b border-[#d4af37] pb-3 text-lg font-medium text-[#0d1b2a]">
              <Clock className="mr-2 inline-block h-5 w-5 text-[#d4af37]" />
              勤務時間
            </h3>
            <div className="space-y-3 text-gray-600">
              <p><span className="font-medium text-[#0d1b2a]">勤務時間：</span>終日、17:00〜22:00</p>
            </div>
          </div>

          {/* Location */}
          <div className="mb-12">
            <h3 className="mb-6 border-b border-[#d4af37] pb-3 text-lg font-medium text-[#0d1b2a]">
              <MapPin className="mr-2 inline-block h-5 w-5 text-[#d4af37]" />
              勤務地
            </h3>
            <div className="space-y-3 text-gray-600">
              <p>〒180-0003<br />東京都武蔵野市吉祥寺南町1-9-11 第2吉祥寺じぞうビル2階E号室</p>
              <p><span className="font-medium text-[#0d1b2a]">アクセス：</span>吉祥寺駅 徒歩3分</p>
              <p className="text-sm text-gray-500">※転居を伴わない転勤あり（複数店舗出店までは転勤なし）</p>
            </div>
          </div>

          {/* Salary */}
          <div className="mb-12">
            <h3 className="mb-6 border-b border-[#d4af37] pb-3 text-lg font-medium text-[#0d1b2a]">
              <Banknote className="mr-2 inline-block h-5 w-5 text-[#d4af37]" />
              給与・待遇
            </h3>
            <div className="space-y-4 text-gray-600">
              <p className="text-xl font-medium text-[#0d1b2a]">時給 1,280円〜</p>
              <p className="text-sm">研修期間：時給1,230円</p>
              <p className="text-sm">（業績連動でのインセンティブあり）</p>
              
              <div className="mt-6 space-y-2">
                <p className="font-medium text-[#0d1b2a]">福利厚生</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>研修期間あり</li>
                  <li>業績連動でのインセンティブあり</li>
                  <li>賄い割引あり</li>
                  <li>交通費：上限500円/日（実費精算）</li>
                </ul>
              </div>

              <div className="mt-6 space-y-2">
                <p className="font-medium text-[#0d1b2a]">社会保険</p>
                <div className="flex flex-wrap gap-2">
                  <span className="border border-gray-300 px-3 py-1 text-sm">雇用保険</span>
                  <span className="border border-gray-300 px-3 py-1 text-sm">労災保険</span>
                  <span className="border border-gray-300 px-3 py-1 text-sm">健康保険</span>
                  <span className="border border-gray-300 px-3 py-1 text-sm">厚生年金</span>
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <p className="font-medium text-[#0d1b2a]">試用期間</p>
                <p>1〜2ヶ月（OJTを行います）</p>
                <p className="text-sm text-gray-500">※試用期間中は給与・勤務時間条件が異なる場合があります</p>
              </div>
            </div>
          </div>

          {/* Work Environment */}
          <div className="mb-12">
            <h3 className="mb-6 border-b border-[#d4af37] pb-3 text-lg font-medium text-[#0d1b2a]">
              職場環境
            </h3>
            <p className="text-gray-600 leading-relaxed">
              経営陣と密にコミュニケーション可能で、柔軟にご意見を取り入れられる環境です。
            </p>
            <p className="mt-3 text-sm text-gray-500">
              喫煙所：屋外あり（吉祥寺駅前の一般共有喫煙スペース、店舗より徒歩3分）
            </p>
          </div>

          {/* Selection Process */}
          <div className="mb-12">
            <h3 className="mb-6 border-b border-[#d4af37] pb-3 text-lg font-medium text-[#0d1b2a]">
              選考プロセス
            </h3>
            <p className="text-gray-600">
              選考はリモート面接1〜2回を予定しております。
            </p>
          </div>

          {/* Company Info */}
          <div className="mb-12 bg-gray-50 p-6 sm:p-8">
            <h3 className="mb-6 text-lg font-medium text-[#0d1b2a]">
              <Building2 className="mr-2 inline-block h-5 w-5 text-[#d4af37]" />
              企業情報
            </h3>
            <dl className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:gap-8">
                <dt className="mb-1 w-32 shrink-0 text-sm text-gray-500">企業名</dt>
                <dd className="text-[#0d1b2a]">株式会社食品計画</dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-8">
                <dt className="mb-1 w-32 shrink-0 text-sm text-gray-500">本社所在地</dt>
                <dd className="text-[#0d1b2a]">東京都渋谷区道玄坂1-16-6 二葉ビル8B</dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-8">
                <dt className="mb-1 w-32 shrink-0 text-sm text-gray-500">
                  <Phone className="mr-1 inline-block h-4 w-4" />
                  電話番号
                </dt>
                <dd className="text-[#0d1b2a]">
                  <a href="tel:08011031411" className="transition-colors hover:text-[#d4af37]">
                    080-1103-1411
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="mb-6 text-gray-600">ご応募・お問い合わせはこちらから</p>
            <Link
              href="/contact"
              className="inline-block border border-[#d4af37] bg-[#d4af37] px-10 py-4 text-sm tracking-widest text-[#0d1b2a] transition-all hover:bg-transparent hover:text-[#d4af37]"
            >
              応募する
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
