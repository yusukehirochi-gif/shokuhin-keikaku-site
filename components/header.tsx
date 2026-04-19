"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Logo } from "./logo"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "/#about", label: "私たちについて" },
    { href: "/#value", label: "OUR VALUE" },
    { href: "/#brands", label: "ブランド一覧" },
    { href: "/#news", label: "ニュース" },
    { href: "/careers", label: "採用" },
    { href: "/privacy", label: "プライバシーポリシー" },
    { href: "/legal", label: "特定商取引法に基づく表記" },
    { href: "/#contact", label: "お問い合わせ" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0d1b2a]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-wide text-gray-300 transition-colors hover:text-[#d4af37]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="メニューを開く"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="lg:hidden bg-[#0d1b2a] border-t border-gray-800">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-sm tracking-wide text-gray-300 transition-colors hover:text-[#d4af37]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
