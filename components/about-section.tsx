export function AboutSection() {
  return (
    <section id="about" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm tracking-[0.3em] text-[#d4af37]">ABOUT US</p>
          <h2 className="text-2xl font-medium tracking-wide text-[#0d1b2a] sm:text-3xl md:text-4xl">
            私たちについて
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-[#d4af37]" />
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <h3 className="mb-6 text-xl font-medium leading-relaxed text-[#0d1b2a] sm:text-2xl md:text-3xl">
              私たちは地方に眠る
              <br />
              <span className="text-[#d4af37]">飲食店を次世代に繋ぎます</span>
            </h3>
            <p className="mb-6 leading-relaxed text-gray-600">
              日本では多くの飲食店を含む多くの中小企業が後継者不足の問題を抱えています。
            </p>
            <p className="mb-6 leading-relaxed text-gray-600">
              私たちは優良な飲食店の廃業が余儀なくされる事態を防ぐため、それを譲受し、その味を未来へと繋ぎます。
            </p>
            <p className="leading-relaxed text-gray-600">
              また継承したノウハウを基に新たな飲食店の開発を行い、長期的な成長を目指しています。
            </p>
          </div>


        </div>
      </div>
    </section>
  )
}
