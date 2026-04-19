import { ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-[#0d1b2a] pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Gold accent lines */}
      <div className="absolute left-0 top-1/4 h-px w-32 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
      <div className="absolute right-0 top-3/4 h-px w-32 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        {/* Tagline */}
        <p className="mb-6 text-sm tracking-[0.3em] text-[#d4af37] sm:text-base">
          日本の地域を支える、飲食店運営業界
        </p>

        {/* Main Heading */}
        <h1 className="mb-8 text-3xl font-medium leading-relaxed tracking-wide text-white sm:text-4xl md:text-5xl lg:text-6xl">
          <span className="block">食品業界へのM&Aを通じて</span>
          <span className="mt-2 block text-[#d4af37]">社会課題の解決</span>
        </h1>

        {/* Divider */}
        <div className="mx-auto mb-8 flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-gray-600 sm:w-20" />
          <div className="h-2 w-2 rotate-45 border border-[#d4af37]" />
          <div className="h-px w-12 bg-gray-600 sm:w-20" />
        </div>

        {/* Sub Heading */}
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg md:text-xl">
          地域の食文化の維持・継承を目指す。
        </p>

        {/* CTA Button */}
        <div className="mt-12">
          <a
            href="#about"
            className="group inline-flex items-center gap-2 border border-[#d4af37] bg-transparent px-8 py-4 text-sm tracking-widest text-[#d4af37] transition-all hover:bg-[#d4af37] hover:text-[#0d1b2a]"
          >
            詳しく見る
            <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
