"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    phone: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Create mailto link with form data
    const subject = encodeURIComponent(`【お問い合わせ】${formData.lastName} ${formData.firstName}様より`)
    const body = encodeURIComponent(
      `お名前: ${formData.lastName} ${formData.firstName}\n` +
      `電話番号: ${formData.phone || "未入力"}\n` +
      `メールアドレス: ${formData.email}\n\n` +
      `お問い合わせ内容:\n${formData.message}`
    )

    window.location.href = `mailto:board@shokuhinkeikaku.com?subject=${subject}&body=${body}`
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-20">
        {/* Hero Section */}
        <section className="bg-[#0d1b2a] py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="mb-3 text-sm tracking-[0.3em] text-[#d4af37]">CONTACT</p>
              <h1 className="text-3xl font-medium tracking-wide text-white sm:text-4xl md:text-5xl">
                お問い合わせ
              </h1>
              <div className="mx-auto mt-6 h-px w-16 bg-[#d4af37]" />
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
            {/* Back Link */}
            <Link
              href="/"
              className="mb-12 inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-[#d4af37]"
            >
              <ArrowLeft className="h-4 w-4" />
              トップページに戻る
            </Link>

            {isSubmitted ? (
              <div className="text-center py-16">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#d4af37]">
                  <span className="text-2xl text-[#d4af37]">✓</span>
                </div>
                <h2 className="mb-4 text-xl font-medium text-[#0d1b2a]">
                  メールアプリが開きます
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  お使いのメールアプリでお問い合わせ内容をご確認の上、<br className="hidden sm:inline" />
                  送信してください。
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-sm text-[#d4af37] hover:underline"
                >
                  フォームに戻る
                </button>
              </div>
            ) : (
              <>
                <div className="mb-10">
                  <p className="text-gray-600 leading-relaxed">
                    飲食店の事業承継・M&Aに関するご相談、その他お問い合わせは下記フォームよりお送りください。
                    <span className="text-[#d4af37]">*</span> は必須項目です。
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Name Fields */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="lastName" className="mb-2 block text-sm text-[#0d1b2a]">
                        姓 <span className="text-[#d4af37]">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full border-b border-gray-300 bg-transparent py-3 text-[#0d1b2a] outline-none transition-colors focus:border-[#d4af37]"
                      />
                    </div>
                    <div>
                      <label htmlFor="firstName" className="mb-2 block text-sm text-[#0d1b2a]">
                        名 <span className="text-[#d4af37]">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full border-b border-gray-300 bg-transparent py-3 text-[#0d1b2a] outline-none transition-colors focus:border-[#d4af37]"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm text-[#0d1b2a]">
                      電話番号
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 bg-transparent py-3 text-[#0d1b2a] outline-none transition-colors focus:border-[#d4af37]"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm text-[#0d1b2a]">
                      メールアドレス <span className="text-[#d4af37]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 bg-transparent py-3 text-[#0d1b2a] outline-none transition-colors focus:border-[#d4af37]"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm text-[#0d1b2a]">
                      お問い合わせ内容 <span className="text-[#d4af37]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full resize-none border-b border-gray-300 bg-transparent py-3 text-[#0d1b2a] outline-none transition-colors focus:border-[#d4af37]"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full border border-[#0d1b2a] bg-[#0d1b2a] py-4 text-sm tracking-widest text-white transition-all hover:bg-transparent hover:text-[#0d1b2a] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto sm:px-16"
                    >
                      {isSubmitting ? "送信中..." : "確認"}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
