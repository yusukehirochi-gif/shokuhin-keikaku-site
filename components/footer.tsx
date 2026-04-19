import Link from "next/link"

const footerLinks = [
  { href: "#about", label: "私たちについて" },
  { href: "#value", label: "OUR VALUE" },
  { href: "#brands", label: "ブランド一覧" },
  { href: "#news", label: "ニュース" },
  { href: "/careers", label: "採用" },
  { href: "/privacy", label: "プライバシーポリシー" },
  { href: "#contact", label: "お問い合わせ" },
]

export function Footer() {
  return (
    <footer className="bg-[#0d1b2a] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center">
              <div>
                <p className="text-lg font-medium tracking-wider text-white">株式会社食品計画</p>
                <p className="text-[10px] tracking-widest text-gray-500">SHOKUHIN KEIKAKU CO., LTD.</p>
              </div>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-gray-400">
              飲食店M&Aを通じて、地域の食文化の維持・継承を目指します。日本の食の未来を次世代へ繋ぐために。
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-xs tracking-widest text-[#d4af37]">NAVIGATION</h3>
            <nav className="space-y-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-gray-400 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-gray-800" />

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} SHOKUHIN KEIKAKU CO., LTD. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-gray-500 transition-colors hover:text-white">
              プライバシーポリシー
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
