import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle2, MapPin, CreditCard, Utensils, Clock, BadgeJapaneseYen } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "採用情報 | 株式会社食品計画",
  description: "株式会社食品計画の採用情報ページです。一緒に飲食業界を盛り上げてくれる仲間を募集しています。",
}

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* ヒーローセクション（ファーストビュー） */}
      <section className="bg-[#0d1b2a] text-white py-20 px-4 pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[#d4af37] font-semibold tracking-wider text-sm mb-4 block">RECRUIT / アルバイト募集</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            八王子ラーメン店<br className="md:hidden" /> オープニングスタッフ
          </h1>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            吉祥寺駅徒歩3分。キャッシュレス特化で接客ストレスを軽減！<br className="hidden md:block"/>
            ラーメンが好き、飲食が好きな方、一緒に新しいお店を作りませんか？
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button asChild size="lg" className="bg-[#d4af37] hover:bg-[#c9a432] text-[#0d1b2a] w-full sm:w-auto text-lg px-8 py-6 rounded-full font-bold shadow-lg">
              <Link href="/contact">今すぐ応募する（1分で完了）</Link>
            </Button>
            <span className="text-sm text-slate-400">※面接はリモートで1〜2回のみ</span>
          </div>
        </div>
      </section>

      {/* 働くメリット（ハイライト） */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0d1b2a]">働く3つのメリット</h2>
            <div className="w-16 h-1 bg-[#d4af37] mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-amber-100 text-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-6">
                <CreditCard size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#0d1b2a]">完全キャッシュレス</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                お会計はすべて電子決済。レジ締めや現金での釣銭ミスの心配がなく、キッチン作業や接客にしっかり集中できます。
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#0d1b2a]">吉祥寺駅から徒歩3分</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                雨の日でも通勤ラクラク。仕事終わりの買い物や用事にも便利な好立地です。交通費も規定内で支給します。
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Utensils size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#0d1b2a]">嬉しい賄い割引あり</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                美味しい八王子ラーメンをスタッフだけの特別価格で。ラーメン好きにはたまらない特典です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 募集要項 */}
      <section className="py-16 px-4 bg-white border-y border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0d1b2a]">募集要項</h2>
          </div>

          <div className="bg-slate-50 rounded-xl overflow-hidden border border-gray-200">
            <div className="divide-y divide-gray-200">
              <div className="flex flex-col sm:flex-row">
                <div className="py-5 px-6 bg-slate-100 text-[#0d1b2a] font-semibold sm:w-1/3 flex items-center gap-2">
                  <BadgeJapaneseYen className="text-slate-500" size={18} /> 給与
                </div>
                <div className="py-5 px-6 text-slate-700 sm:w-2/3">
                  <span className="text-xl font-bold text-[#d4af37]">時給 1,280円〜</span><br/>
                  <span className="text-sm text-gray-500">※研修期間（1〜2ヶ月）：時給1,230円<br/>※業績連動でのインセンティブあり！</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row">
                <div className="py-5 px-6 bg-slate-100 text-[#0d1b2a] font-semibold sm:w-1/3 flex items-center gap-2">
                  <CheckCircle2 className="text-slate-500" size={18} /> 仕事内容
                </div>
                <div className="py-5 px-6 text-slate-700 sm:w-2/3">
                  <ul className="list-disc list-inside space-y-1">
                    <li>仕込み、調理</li>
                    <li>接客、料理提供</li>
                    <li>キャッシュレス端末操作</li>
                    <li>開店・閉店作業</li>
                  </ul>
                  <p className="mt-2 text-sm text-gray-600">まずは笑顔で元気よくお客様を迎えていただければOKです！</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row">
                <div className="py-5 px-6 bg-slate-100 text-[#0d1b2a] font-semibold sm:w-1/3 flex items-center gap-2">
                  <Clock className="text-slate-500" size={18} /> 勤務時間
                </div>
                <div className="py-5 px-6 text-slate-700 sm:w-2/3">
                  終日、17:00〜22:00（シフト制）
                </div>
              </div>
              <div className="flex flex-col sm:flex-row">
                <div className="py-5 px-6 bg-slate-100 text-[#0d1b2a] font-semibold sm:w-1/3">求める人材</div>
                <div className="py-5 px-6 text-slate-700 sm:w-2/3">
                  <span className="font-semibold text-[#d4af37]">経験・学歴不問！</span><br/>
                  【歓迎】飲食店勤務経験（アルバイト経験でも歓迎）、接客が好きな方、調理経験のある方（自炊でもOK）
                </div>
              </div>
              <div className="flex flex-col sm:flex-row">
                <div className="py-5 px-6 bg-slate-100 text-[#0d1b2a] font-semibold sm:w-1/3">福利厚生・待遇</div>
                <div className="py-5 px-6 text-slate-700 sm:w-2/3">
                  賄い割引あり / 交通費支給（上限500円/日）/ 各種社会保険完備（雇用・労災・健康・厚生年金）
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ボトムCTA */}
      <section className="py-20 px-4 bg-[#0d1b2a] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">あなたのご応募をお待ちしています</h2>
          <p className="text-slate-300 mb-8">
            面接はリモートで行いますので、まずはお気軽にご応募・お問い合わせください。<br/>
            お店やラーメンに関するご意見も大歓迎です！
          </p>
          <Button asChild size="lg" className="bg-[#d4af37] hover:bg-[#c9a432] text-[#0d1b2a] text-xl px-12 py-8 rounded-full font-bold shadow-2xl transition-transform hover:scale-105">
            <Link href="/contact">応募フォームへ進む</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
