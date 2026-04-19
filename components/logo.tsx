import Image from "next/image"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-start ${className}`}>
      <div className="h-10 overflow-hidden sm:h-12">
        <Image
          src="/images/logo-white.png"
          alt="食品計画"
          width={500}
          height={125}
          className="h-[88px] w-auto max-w-none -translate-y-[30%] mix-blend-lighten sm:h-28"
          priority
        />
      </div>
      <p className="text-[7px] tracking-widest text-gray-400 sm:text-[8px]">Shokuhin Keikaku Co. Ltd.</p>
    </div>
  )
}
