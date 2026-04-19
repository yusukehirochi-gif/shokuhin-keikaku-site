import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "プライバシーポリシー | 株式会社食品計画",
  description: "株式会社食品計画のプライバシーポリシー。個人情報の取り扱いについて。",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-[#0d1b2a] pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm tracking-[0.3em] text-[#d4af37]">PRIVACY POLICY</p>
          <h1 className="text-3xl font-medium tracking-wide text-white sm:text-4xl">
            プライバシーポリシー
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="mb-12">
            <p className="leading-relaxed text-gray-600">
              株式会社食品計画（以下「当社」）は、以下のとおり個人情報保護方針を定め、個人情報保護の仕組みを構築し、全従業員に個人情報保護の重要性の認識と取組みを徹底させることにより、個人情報の保護を推進致します。
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-12">
            {/* 個人情報の管理 */}
            <div>
              <h2 className="mb-4 border-l-4 border-[#d4af37] pl-4 text-xl font-medium text-[#0d1b2a]">
                個人情報の管理
              </h2>
              <p className="leading-relaxed text-gray-600">
                当社は、お客さまの個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備・社員教育の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行ないます。
              </p>
            </div>

            {/* 個人情報の利用目的 */}
            <div>
              <h2 className="mb-4 border-l-4 border-[#d4af37] pl-4 text-xl font-medium text-[#0d1b2a]">
                個人情報の利用目的
              </h2>
              <p className="leading-relaxed text-gray-600">
                お客さまからお預かりした個人情報は、当社からのご連絡や業務のご案内やご質問に対する回答として、電子メールや資料のご送付に利用いたします。
              </p>
            </div>

            {/* 個人情報の第三者への開示・提供の禁止 */}
            <div>
              <h2 className="mb-4 border-l-4 border-[#d4af37] pl-4 text-xl font-medium text-[#0d1b2a]">
                個人情報の第三者への開示・提供の禁止
              </h2>
              <p className="mb-4 leading-relaxed text-gray-600">
                当社は、お客さまよりお預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d4af37]" />
                  <span>お客さまの同意がある場合</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d4af37]" />
                  <span>お客さまが希望されるサービスを行なうために当社が業務を委託する業者に対して開示する場合</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d4af37]" />
                  <span>法令に基づき開示することが必要である場合</span>
                </li>
              </ul>
            </div>

            {/* 個人情報の安全対策 */}
            <div>
              <h2 className="mb-4 border-l-4 border-[#d4af37] pl-4 text-xl font-medium text-[#0d1b2a]">
                個人情報の安全対策
              </h2>
              <p className="leading-relaxed text-gray-600">
                当社は、個人情報の正確性及び安全性確保のために、セキュリティに万全の対策を講じています。
              </p>
            </div>

            {/* ご本人の照会 */}
            <div>
              <h2 className="mb-4 border-l-4 border-[#d4af37] pl-4 text-xl font-medium text-[#0d1b2a]">
                ご本人の照会
              </h2>
              <p className="leading-relaxed text-gray-600">
                お客さまがご本人の個人情報の照会・修正・削除などをご希望される場合には、ご本人であることを確認の上、対応させていただきます。
              </p>
            </div>

            {/* 法令、規範の遵守と見直し */}
            <div>
              <h2 className="mb-4 border-l-4 border-[#d4af37] pl-4 text-xl font-medium text-[#0d1b2a]">
                法令、規範の遵守と見直し
              </h2>
              <p className="leading-relaxed text-gray-600">
                当社は、保有する個人情報に関して適用される日本の法令、その他規範を遵守するとともに、本ポリシーの内容を適宜見直し、その改善に努めます。
              </p>
            </div>

            {/* 署名 */}
            <div className="pt-8 text-right">
              <p className="font-medium text-[#0d1b2a]">株式会社食品計画</p>
            </div>

            {/* お問い合せ */}
            <div className="border-t border-gray-200 pt-12">
              <h2 className="mb-4 border-l-4 border-[#d4af37] pl-4 text-xl font-medium text-[#0d1b2a]">
                お問い合せ
              </h2>
              <p className="mb-6 leading-relaxed text-gray-600">
                当社の個人情報の取扱についてはお問い合わせフォームまでご連絡ください。
              </p>
              <Link
                href="/contact"
                className="inline-block border border-[#0d1b2a] px-8 py-3 text-sm tracking-widest text-[#0d1b2a] transition-all hover:bg-[#0d1b2a] hover:text-white"
              >
                お問い合わせフォーム
              </Link>
            </div>
          </div>

          {/* Back Link */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-[#0d1b2a]"
            >
              <ArrowLeft className="h-4 w-4" />
              トップページに戻る
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
