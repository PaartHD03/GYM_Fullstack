import { ArrowRightIcon } from 'lucide-react'
import Image from 'next/image'

import { Badge } from '@/components/ui/badge'
import { BlurFade } from '@/components/ui/blur-fade'
import { Button } from '@/components/ui/button'
import DotPattern from '@/components/ui/dot-pattern'
import { cn } from '@/helpers/cn'

const OurPropose = () => {
  return (
    <BlurFade inView inViewMargin='60px' once={false} delay={0.2}>
      <section
        id="our-propose"
        className="container"
      >
        <div className=' bg-card rounded-3xl grid grid-cols-1 sm:grid-cols-2 overflow-hidden relative'>
          <DotPattern
            className={cn(
              "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)] opacity-50",
            )}
          />
          <div
            className='overflow-visible relative max-sm:hidden'
          >
            <Image
              src={'/images/mobile-stats.png'}
              alt='mobile-preview'
              width={500}
              height={500}
              quality={100}
              className='object-cover h-full scale-125 w-auto absolute top-0 -left-[100px]'
            />
            <Image
              src={'/images/mobile-preview.png'}
              alt='mobile-preview'
              width={500}
              height={500}
              quality={100}
              className='object-cover h-full scale-125 w-auto absolute top-[60px] left-[100px]'
            />
          </div>
          <div className='px-6 py-12 space-y-6 relative z-10'>
            <Badge variant={"outline"}>
              Our Propose
            </Badge>
            <p className='text-lg sm:text-xl lg:text-3xl font-medium text-muted-foreground max-w-md'>
              Our mission is to supercharge your fitness with AI-powered plans and precision tracking, giving you the tools to crush your goals faster and stronger than ever!
            </p>
            <Button className="min-w-32">
              Learn More <ArrowRightIcon className="size-5" />
            </Button>
          </div>
        </div>
      </section>
    </BlurFade>

  )
}

export default OurPropose