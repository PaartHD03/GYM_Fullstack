'use client'

import { Fragment } from 'react'
import { usePathname } from 'next/navigation'

import { BlurFade } from '@/components/ui/blur-fade'
import useScrollProgress from '@/hooks/use-scroll-progress'


type Props = {
  children: React.ReactNode
}

const Template = ({ children }: Props) => {
  const pathname = usePathname()
  const completion = useScrollProgress();
  return (
    <Fragment key={pathname}>
      <BlurFade delay={0.2}>
        {children}
      </BlurFade>
      {/* {scroll bar} */}
      <span
        style={{ transform: `translateY(${completion - 100}%)` }}
        className='fixed z-50 bg-muted-foreground/20 w-1 top-0 right-0 bottom-0 transition-all duration-700'
      />
    </Fragment>
  )
}

export default Template