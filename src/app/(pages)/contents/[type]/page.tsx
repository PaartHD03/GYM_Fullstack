import NotFound from "@/components/errors/not-found"
import ContentCard from "@/components/globals/content-card"
import { Separator } from "@/components/ui/separator"
import { getContentList } from "@/helpers/get-content-list"


type Props = {
  params: {
    type: string
  }
}

const Page = async ({ params: { type } }: Props) => {
  const contents = await getContentList({
    category: type,
    fields: ['title', 'slug', "description", "image", "readingTime"],
  })

  if (!contents || contents.length === 0) {
    return <NotFound />
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="container">
        <h1 className="text-4xl font-bold text-center mb-4">
          Our {type.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
        </h1>
        <Separator className="w-16 h-1 bg-primary mx-auto mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contents.map((post, index) => (
            typeof post !== "string" && <ContentCard
              key={index}
              description={post.description ?? ""}
              image={post.image ?? ""}
              readTime={post.readingTime ?? 0}
              title={post.title ?? ""}
              href={`/contents/${type}/${post.slug}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page