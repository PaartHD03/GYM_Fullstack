import { ClockIcon } from 'lucide-react'
import Image from "next/image"

import NotFound from '@/components/errors/not-found'
import RenderMdx from '@/components/mdx/render-mdx'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { getContentList } from '@/helpers/get-content-list'

type Props = {
  params: {
    slug: string
    type: string
  }
}


const BlogDetailPage = async ({ params: { slug, type } }: Props) => {

  const contents = await getContentList({
    category: type,
    slug,
    fields: ["content", "description", "readingTime", "title", "image"],
  })


  if (!contents || contents.length === 0 || typeof contents[0] === "string") {
    return <NotFound className=' mt-24' />
  }

  const post = contents[0]

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl mt-24">
      <Card className="overflow-hidden bg-card/20 border-border/20">
        <div className="relative h-[300px] sm:h-[400px]">
          <Image
            src={post.image ?? ""}
            priority
            alt=''
            quality={100}
            height={800}
            width={800}
            className='object-cover object-center w-full h-full'
          />
        </div>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary">
              {type}
            </Badge>
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <ClockIcon className="w-4 h-4" />
              <span>{post.readingTime} min read</span>
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4">
            {post.title}
          </h1>
          <p className="text-muted-foreground mb-6">
            {post.description}
          </p>

          <div className="w-full mt-6">
            <RenderMdx
              id={type + "-" + slug}
            >
              {post.content}
            </RenderMdx>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default BlogDetailPage