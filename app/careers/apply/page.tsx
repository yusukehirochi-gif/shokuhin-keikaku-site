"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ApplyPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // メール送信用のリンクを生成
    const subject = encodeURIComponent("【採用応募】八王子ラーメン横山食堂 吉祥寺店")
    const body = encodeURIComponent(
      `■ お名前\n${formData.name}\n\n■ 連絡先（電話番号 or メール）\n${formData.contact}\n\n---\n採用ページからの応募です。`
    )
    
    window.location.href = `mailto:board@shokuhinkeikaku.com?subject=${subject}&body=${body}`
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
        <Header />
        <section className="pt-36 pb-24 px-4">
          <div className="max-w-lg mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="text-green-600" size={48} />
            </div>
            <h1 className="text-3xl font-bold text-[#0d1b2a] mb-4">メールアプリが開きます</h1>
            <p className="text-gray-600 mb-8 leading-relaxed">
              メールアプリで内容を確認し、送信ボタンを押してください。<br />
              送信後、担当者より折り返しご連絡いたします。
            </p>
            <div className="space-y-4">
              <Button asChild variant="outline" className="w-full">
                <Link href="/careers">
                  <ArrowLeft size={18} className="mr-2" />
                  採用ページに戻る
                </Link>
              </Button>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />

      <section className="pt-36 pb-24 px-4">
        <div className="max-w-lg mx-auto">
          {/* 戻るリンク */}
          <Link href="/careers" className="inline-flex items-center text-gray-500 hover:text-[#0d1b2a] mb-8 transition-colors">
            <ArrowLeft size={18} className="mr-1" />
            採用ページに戻る
          </Link>

          {/* ヘッダー */}
          <div className="text-center mb-10">
            <span className="inline-block bg-[#d4af37] text-[#0d1b2a] font-bold text-sm px-4 py-1 rounded-full mb-4">
              ENTRY
            </span>
            <h1 className="text-3xl font-bold text-[#0d1b2a] mb-3">かんたん応募フォーム</h1>
            <p className="text-gray-600">30秒で完了します！</p>
          </div>

          {/* フォーム */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 名前 */}
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-[#0d1b2a] mb-2">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="山田 太郎"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#d4af37] focus:outline-none transition-colors text-lg"
                />
              </div>

              {/* 連絡先 */}
              <div>
                <label htmlFor="contact" className="block text-sm font-bold text-[#0d1b2a] mb-2">
                  連絡先（電話番号 or メールアドレス）<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="contact"
                  required
                  placeholder="090-1234-5678 または example@email.com"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#d4af37] focus:outline-none transition-colors text-lg"
                />
                <p className="mt-2 text-sm text-gray-500">折り返しのご連絡に使用します</p>
              </div>

              {/* 送信ボタン */}
              <Button
                type="submit"
                className="w-full bg-[#d4af37] hover:bg-[#e6c555] text-[#0d1b2a] text-xl py-7 rounded-full font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
              >
                この内容で応募する
              </Button>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-sm text-gray-500 text-center leading-relaxed">
                ご応募いただいた内容を確認後、<br className="sm:hidden" />
                2〜3営業日以内にご連絡いたします。<br />
                面接はリモートで行いますのでご安心ください。
              </p>
            </div>
          </div>

          {/* 補足 */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              ご質問のみのお問い合わせも歓迎です。<br />
              <Link href="/contact" className="text-[#d4af37] hover:underline">
                お問い合わせフォームはこちら
              </Link>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
