import { ArrowRightIcon } from 'lucide-react'

import { Button } from "@/components/ui/button"

const CTASection = () => {
  return (
    <section className="container border border-border/40 shadow-inner rounded-md py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
          Ready to get started?
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Join thousands of gym warriors and take your fitness journey to beast mode. It&apos;s time to grind harder, push limits, and achieve results like never before.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <Button size="lg">
            Get Started <ArrowRightIcon className="size-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default CTASection