import { Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface TeamMemberProps {
  name: string
  position: string
  imageUrl: string
  linkedinUrl: string
  className?: string
}

export function TeamMemberCard({ name, position, imageUrl, linkedinUrl, className }: TeamMemberProps) {
  return (
    <div
      className={cn(
        " group relative overflow-hidden rounded-xl bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]",
        className,
      )}
    >
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-6 h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-md transition-transform duration-300 group-hover:scale-105">
          <Image src={imageUrl || "/placeholder.svg"} alt={`${name}'s profile picture`} fill className="object-cover" />
        </div>

        <h3 className="mb-1 text-xl font-bold tracking-tight">{name}</h3>

        <div className="mb-4 inline-flex items-center justify-center rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-800">
          {position}
        </div>

        <Link
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0077B5] px-4 py-2 text-sm font-medium text-white transition-all hover:bg-[#0077B5]/90"
        >
          <Linkedin className="h-4 w-4" />
          <span>LinkedIn Profile</span>
        </Link>
      </div>

      <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-slate-100 opacity-70"></div>
      <div className="absolute -bottom-12 -left-12 h-24 w-24 rounded-full bg-slate-100 opacity-70"></div>
    </div>
  )
}

