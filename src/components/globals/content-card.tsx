import { ArrowRightIcon, Clock } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'

interface ContentCardProps {
  image: string
  title: string
  description: string
  readTime: number
  href: string
}

const ContentCard = ({ image, title, description, readTime, href }: ContentCardProps) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-card transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
      <div className="relative">
        <Image
          src={image}
          alt={title}
          width={400}
          height={250}
          className="w-full h-[250px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h2 className="text-2xl font-bold  mb-2">{title}</h2>
          <div className="flex items-center text-muted-foreground text-sm">
            <Clock className="w-4 h-4 mr-1" />
            <span>{readTime} min read</span>
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className="text-foreground/80 text-base mb-4">
          {
            description.substring(0, 120)
          }
          {
            description.length > 120 && "..."
          }
        </p>
        <Link href={href} className={buttonVariants({ className: "w-full transition-colors duration-300 ease-in-out" })}>
          Read More <ArrowRightIcon className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </div>
  )
}

export default ContentCard