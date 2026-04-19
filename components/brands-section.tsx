import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const brands = [
  {
    id: "yokoyama-shokudo",
    name: "横山食堂",
    description: "八王子ラーメンの伝統を守り続ける",
    category: "八王子ラーメン",
    image: "/images/yokoyama-ramen.jpeg",
  },
]

export function BrandsSection() {
  return (
    <section id="brands" className="bg-[#0d1b2a] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm tracking-[0.3em] text-[#d4af37]">OUR BRANDS</p>
          <h2 className="text-2xl font-medium tracking-wide text-white sm:text-3xl md:text-4xl">
            ブランド一覧
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-[#d4af37]" />
        </div>

        {/* Brand Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {brands.map((brand) => (
            <Link
              key={brand.id}
              href={`/brands/${brand.id}`}
              className="group relative overflow-hidden border border-gray-700 bg-[#0d1b2a] transition-all duration-300 hover:border-[#d4af37]"
            >
              {/* Brand Image */}
              <div className="aspect-[3/2] overflow-hidden">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="mb-1 text-xs tracking-widest text-[#d4af37]">{brand.category}</p>
                <h3 className="mb-2 text-lg font-medium text-white">{brand.name}</h3>
                <p className="mb-4 text-sm text-gray-400">{brand.description}</p>
                <span className="inline-flex items-center gap-2 text-sm text-[#d4af37] transition-colors group-hover:text-white">
                  詳細を見る
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}

          {/* Coming Soon Card */}
          <div className="flex items-center justify-center border border-dashed border-gray-700 p-8">
            <div className="text-center">
              <p className="text-sm tracking-widest text-gray-500">COMING SOON</p>
              <p className="mt-2 text-xs text-gray-600">新ブランド準備中</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
