import { Shield, TrendingUp, Lightbulb } from "lucide-react"

const values = [
  {
    icon: Shield,
    titleEn: "BRAND SUCCESSION",
    titleJa: "ブランド継承",
    description:
      "飲食店を譲受を行っても、ブランド変更や商品の大幅な変更は行わない方針です。長年培われた味とブランドの価値を守り、次世代へと繋ぎます。",
  },
  {
    icon: TrendingUp,
    titleEn: "VALUE UP",
    titleJa: "バリューアップ",
    description:
      "集客、商品開発、人手不足、経営管理など、飲食店の抱える経営課題の解決に取り組みます。事業価値の最大化を支援します。",
  },
  {
    icon: Lightbulb,
    titleEn: "NEW BRAND DEVELOPMENT",
    titleJa: "新ブランド開発",
    description:
      "継承したノウハウを活用することで新たな商品、飲食店の開発を目指します。伝統と革新を融合した新たな価値を創造します。",
  },
]

export function ValueSection() {
  return (
    <section id="value" className="bg-[#f8f8f8] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm tracking-[0.3em] text-[#d4af37]">OUR VALUE</p>
          <h2 className="text-2xl font-medium tracking-wide text-[#0d1b2a] sm:text-3xl md:text-4xl">
            私たちの提供価値
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-[#d4af37]" />
        </div>

        {/* Value Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg sm:p-10"
            >
              {/* Top Accent Line */}
              <div className="absolute left-0 top-0 h-1 w-0 bg-[#d4af37] transition-all duration-300 group-hover:w-full" />

              {/* Icon */}
              <div className="mb-6 flex h-16 w-16 items-center justify-center border border-[#0d1b2a]">
                <value.icon className="h-8 w-8 text-[#d4af37]" />
              </div>

              {/* Number */}
              <span className="absolute right-8 top-8 text-5xl font-light text-gray-100 sm:right-10 sm:top-10">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Content */}
              <p className="mb-2 text-xs tracking-[0.2em] text-gray-400">{value.titleEn}</p>
              <h3 className="mb-4 text-xl font-medium text-[#0d1b2a]">{value.titleJa}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
