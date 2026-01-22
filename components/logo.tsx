import Link from "next/link"
import Image from "next/image"

export function Logo() {
  return (
    <Link href="/" className="group">
      <Image
        src="/raymapu2.png"
        alt="Raymapu"
        width={120}
        height={48}
        className="group-hover:scale-105 transition-transform"
      />
    </Link>
  )
}
