import { Separator } from "@radix-ui/react-separator"

import ContentCard from "@/components/globals/content-card"
import CTASection from "@/components/globals/cta-section"
import { BlurFade } from "@/components/ui/blur-fade"
import { ContentReturn, getContentList } from "@/helpers/get-content-list"

import HeroSection from "./_components/hero-section"

const fields = ["slug", "title", "description", "image", "readingTime"] as (keyof ContentReturn)[]

const Page = async () => {
  const dietPlans = (await getContentList({ category: "diet-plans", fields })).map((plan) => {
    if (typeof plan !== "string") {
      return {
        label: plan.title ?? "",
        href: `/contents/diet-plans/${plan.slug}`,
        description: plan.description ?? "",
        image: plan.image ?? "",
        readingTime: plan.readingTime ?? 0,
      }
    }
  })

  const workoutPlans = (await getContentList({ category: "workout-plans", fields, })).map((plan) => {
    if (typeof plan !== "string") {
      return {
        label: plan.title ?? "",
        href: `/contents/workout-plans/${plan.slug}`,
        description: plan.description ?? "",
        readingTime: plan.readingTime ?? 0,
        image: plan.image ?? "",
      }
    }
  })

  const blogs = (await getContentList({ category: "blogs", fields, })).map((plan) => {
    if (typeof plan !== "string") {
      return {
        label: plan.title ?? "",
        href: `/contents/workout-plans/${plan.slug}`,
        description: plan.description ?? "",
        image: plan.image ?? "",
        readingTime: plan.readingTime ?? 0,
      }
    }
  })

  const sections = [
    {
      title: "Select Your Workout Plan",
      plans: workoutPlans,
    },
    {
      title: "Select Your Diet Plan",
      plans: dietPlans,
    },
    {
      title: "Read Our Latest Blogs",
      plans: blogs,
    },
  ]
  return (
    <div className="sm:space-y-52 space-y-32">
      <HeroSection />
      {
        sections.map((section, index) => (
          <div className="container" key={index}>
            <h1 className="text-4xl font-bold text-center mb-4">
              {section.title}
            </h1>
            <Separator className="w-32 h-1 bg-primary mx-auto mb-12" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.plans.map((post, index) => (
                typeof post !== "string" &&
                <BlurFade
                  key={index}
                  inView
                  delay={index * 0.1}
                  once={false}
                >
                  <ContentCard
                    description={post?.description ?? ""}
                    image={post?.image ?? ""}
                    readTime={post?.readingTime ?? 0}
                    title={post?.label ?? ""}
                    href={post?.href ?? ""}
                  />
                </BlurFade>

              ))}
            </div>
          </div>
        ))
      }
      <CTASection />
    </div>
  )
}

export default Page