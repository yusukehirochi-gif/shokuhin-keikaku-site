import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle2, MapPin, CreditCard, Utensils, Clock, BadgeJapaneseYen, Sparkles, Heart, Users, Coffee, Train, Smartphone } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "採用情報 | 株式会社食品計画",
  description: "株式会社食品計画の採用情報ページです。一緒に飲食業界を盛り上げてくれる仲間を募集しています。",
}

const jobPostingJsonLd = {
  "@context": "https://schema.org/",
  "@type": "JobPosting",
  "title": "八王子ラーメン横山食堂 吉祥寺店 アルバイトスタッフ",
  "description": "吉祥寺駅徒歩3分のラーメン店でのアルバイト募集。接客、調理、店舗運営に携わっていただきます。メニュー開発にも参加可能。学歴・経験不問、未経験者歓迎。",
  "identifier": {
    "@type": "PropertyValue",
    "name": "株式会社食品計画",
    "value": "yokoyama-shokudo-kichijoji-2025"
  },
  "datePosted": "2025-05-17",
  "validThrough": "2026-12-31T23:59:59+09:00",
  "employmentType": "PART_TIME",
  "hiringOrganization": {
    "@type": "Organization",
    "name": "株式会社食品計画",
    "sameAs": "https://www.shokuhinkeikaku.com/",
    "logo": "https://www.shokuhinkeikaku.com/images/logo.png"
  },
  "jobLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "吉祥寺本町1丁目",
      "addressLocality": "武蔵野市",
      "addressRegion": "東京都",
      "postalCode": "180-0004",
      "addressCountry": "JP"
    }
  },
  "baseSalary": {
    "@type": "MonetaryAmount",
    "currency": "JPY",
    "value": {
      "@type": "QuantitativeValue",
      "value": 1280,
      "unitText": "HOUR"
    }
  },
  "workHours": "17:00-22:00",
  "jobBenefits": "交通費支給、賄い割引あり、社会保険完備",
  "skills": "未経験歓迎、学歴不問"
}

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingJsonLd) }}
      />
      <Header />

      {/* ヒーローセクション */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0d1b2a] via-[#1a3a5c] to-[#0d1b2a] text-white py-24 px-4 pt-36">
        {/* 装飾 */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#d4af37]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block bg-[#d4af37] text-[#0d1b2a] font-bold text-sm px-6 py-2 rounded-full mb-6 animate-bounce">
            アルバイト募集中！
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            いつか自分のお店を持ちたい<br className="md:hidden" />あなたへ
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-[#d4af37] mb-6">
            あなたの「考案ラーメン」が<br className="md:hidden" />新メニューになるかも!?
          </p>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            吉祥寺駅徒歩3分のカウンターメインの小規模店。<br className="hidden md:block"/>
            ただの「店員」ではなく「運営パートナー」として、<br className="hidden md:block"/>
            一緒にお店を作っていきませんか？
          </p>
          <Button asChild size="lg" className="bg-[#d4af37] hover:bg-[#e6c555] text-[#0d1b2a] text-xl px-10 py-7 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105">
            <Link href="/contact">今すぐ応募する!</Link>
          </Button>
          <p className="mt-4 text-sm text-slate-400">※応募は1分で完了・面接はリモートOK</p>
        </div>
      </section>

      {/* 働く魅力セクション */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block bg-[#d4af37] text-[#0d1b2a] font-bold text-sm px-4 py-1 rounded-full mb-4">POINT</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b2a]">働く魅力 6選</h2>
            <p className="mt-4 text-gray-600">楽しく、安心して働ける環境をご用意しています！</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* カード1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-amber-100 hover:border-[#d4af37] transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-[#d4af37] text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                <Sparkles size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#0d1b2a] text-center">自分のお店感覚で働ける</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                「こうしたらもっと良くなる！」という意見がすぐに反映されます。マニュアルに縛られず、あなたの個性を活かしたお店づくりができます。
              </p>
            </div>

            {/* カード2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-blue-100 hover:border-blue-400 transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#0d1b2a] text-center">お客様との距離が近い</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                「今日も美味しかったよ！」という声が直接届く距離感。常連さんと会話を楽しみながら、吉祥寺の街に愛されるお店を一緒に作りましょう。
              </p>
            </div>

            {/* カード3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-green-100 hover:border-green-400 transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                <Utensils size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#0d1b2a] text-center">メニュー開発に携われる</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                「こんなラーメンがあったらいいな」を店主と一緒に形にできます。自分の考えた一杯をお客様に食べていただける喜びは格別です！
              </p>
            </div>

            {/* カード4 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-purple-100 hover:border-purple-400 transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                <Smartphone size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#0d1b2a] text-center">完全キャッシュレス</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                お会計はすべて電子決済！レジ締めや釣銭ミスの心配がなく、キッチン作業や接客に集中できます。接客ストレスも軽減！
              </p>
            </div>

            {/* カード5 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-rose-100 hover:border-rose-400 transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-rose-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                <Train size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#0d1b2a] text-center">吉祥寺駅から徒歩3分</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                雨の日でも通勤ラクラク！仕事終わりの買い物や用事にも便利な好立地。交通費も規定内で支給します。
              </p>
            </div>

            {/* カード6 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-orange-100 hover:border-orange-400 transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                <Coffee size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#0d1b2a] text-center">嬉しい賄い割引あり</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                美味しい八王子ラーメンをスタッフだけの特別価格で。ラーメン好きにはたまらない特典です！
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* お仕事紹介セクション */}
      <section className="py-20 px-4 bg-[#0d1b2a]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block bg-[#d4af37] text-[#0d1b2a] font-bold text-sm px-4 py-1 rounded-full mb-4">JOB</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">お仕事紹介</h2>
            <p className="mt-4 text-gray-400">ただの「店員」ではなく、一人の「運営パートナー」として</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-[#d4af37] mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-[#d4af37] text-[#0d1b2a] rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  基本のお仕事
                </h3>
                <ul className="space-y-3 text-white">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-[#d4af37] shrink-0 mt-1" size={18} />
                    <span>接客、ラーメンの調理・提供</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-[#d4af37] shrink-0 mt-1" size={18} />
                    <span>開店・閉店作業</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-[#d4af37] shrink-0 mt-1" size={18} />
                    <span>キャッシュレス端末操作</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#d4af37] mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-[#d4af37] text-[#0d1b2a] rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  やりたい人はコチラも！
                </h3>
                <ul className="space-y-3 text-white">
                  <li className="flex items-start gap-2">
                    <Sparkles className="text-[#d4af37] shrink-0 mt-1" size={18} />
                    <span>新メニューの企画・提案</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="text-[#d4af37] shrink-0 mt-1" size={18} />
                    <span>SNS等での集客アイデアの発信</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="text-[#d4af37] shrink-0 mt-1" size={18} />
                    <span>店舗運営のノウハウ習得（仕入れや数字管理も！）</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="mt-8 text-center text-gray-300 text-sm">
              まずは笑顔で元気よくお客様を迎えていただければOK！<br />
              あなたの「やってみたい」を応援します！
            </p>
          </div>
        </div>
      </section>

      {/* 募集要項 */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block bg-[#d4af37] text-[#0d1b2a] font-bold text-sm px-4 py-1 rounded-full mb-4">REQUIREMENTS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b2a]">募集要項</h2>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
            <div className="divide-y divide-gray-100">
              <div className="flex flex-col sm:flex-row">
                <div className="py-5 px-6 bg-gradient-to-r from-amber-50 to-amber-100 text-[#0d1b2a] font-bold sm:w-1/3 flex items-center gap-2">
                  <BadgeJapaneseYen className="text-[#d4af37]" size={20} /> 給与
                </div>
                <div className="py-5 px-6 sm:w-2/3">
                  <span className="text-2xl font-bold text-[#d4af37]">時給 1,280円〜</span><br/>
                  <span className="text-sm text-gray-500">※研修期間（1〜2ヶ月）：時給1,230円<br/>※業績連動でのインセンティブあり！</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row">
                <div className="py-5 px-6 bg-gradient-to-r from-amber-50 to-amber-100 text-[#0d1b2a] font-bold sm:w-1/3 flex items-center gap-2">
                  <Clock className="text-[#d4af37]" size={20} /> 勤務時間
                </div>
                <div className="py-5 px-6 sm:w-2/3">
                  <span className="font-semibold">17:00〜22:00</span>（シフト制）<br/>
                  <span className="text-sm text-gray-500">※研修期間中は昼時間帯の勤務有り</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row">
                <div className="py-5 px-6 bg-gradient-to-r from-amber-50 to-amber-100 text-[#0d1b2a] font-bold sm:w-1/3 flex items-center gap-2">
                  <MapPin className="text-[#d4af37]" size={20} /> 勤務地
                </div>
                <div className="py-5 px-6 sm:w-2/3">
                  八王子ラーメン横山食堂 吉祥寺店<br/>
                  <span className="text-sm text-gray-500">吉祥寺駅から徒歩3分</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row">
                <div className="py-5 px-6 bg-gradient-to-r from-amber-50 to-amber-100 text-[#0d1b2a] font-bold sm:w-1/3 flex items-center gap-2">
                  <Users className="text-[#d4af37]" size={20} /> 求める人材
                </div>
                <div className="py-5 px-6 sm:w-2/3">
                  <span className="inline-block bg-[#d4af37] text-[#0d1b2a] font-bold text-sm px-3 py-1 rounded-full mb-2">学歴・経験不問！</span><br/>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 mt-2">
                    <li>「いつか自分の店を持ちたい」という夢がある方</li>
                    <li>料理を作るのが好きな方</li>
                    <li>人と話すのが好きな方</li>
                  </ul>
                  <p className="mt-2 text-sm text-gray-500">副業・Wワーク、学生さんも歓迎！</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row">
                <div className="py-5 px-6 bg-gradient-to-r from-amber-50 to-amber-100 text-[#0d1b2a] font-bold sm:w-1/3">福利厚生</div>
                <div className="py-5 px-6 sm:w-2/3">
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">賄い割引あり</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">交通費支給</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">社会保険完備</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">※交通費：上限500円/日（実費精算）</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ボトムCTA */}
      <section className="py-24 px-4 bg-gradient-to-br from-[#0d1b2a] via-[#1a3a5c] to-[#0d1b2a] text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#d4af37]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl" />
        
        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            一緒に吉祥寺で<br className="md:hidden" />愛されるお店を作りませんか？
          </h2>
          <p className="text-slate-300 mb-10 leading-relaxed">
            面接はリモートで行いますので、まずはお気軽にご応募・お問い合わせください。<br/>
            あなたの「こんなラーメンを作りたい」というアイデアもお聞かせください！
          </p>
          <Button asChild size="lg" className="bg-[#d4af37] hover:bg-[#e6c555] text-[#0d1b2a] text-xl px-12 py-8 rounded-full font-bold shadow-2xl transition-all hover:scale-105">
            <Link href="/contact">応募フォームへ進む</Link>
          </Button>
          <p className="mt-6 text-sm text-slate-400">ご質問だけでもお気軽にどうぞ！</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
