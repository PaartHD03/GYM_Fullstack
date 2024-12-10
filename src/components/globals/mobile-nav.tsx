import { AlignJustifyIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Button } from "../ui/button"

export type MobileNavProps = {
  items: ({
    label: string
    href: string
  } | {
    label: string
    children: {
      label: string
      href: string
      description: string
    }[]
  })[]
}

const MobileNav = ({ items }: MobileNavProps) => {
  return (
    <Sheet >
      <SheetTrigger asChild className="lg:hidden">
        <AlignJustifyIcon className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="space-y-32 w-full">
            <Link href="/" className="flex items-center justify-center gap-2.5 font-semibold text-foreground">
              <Image
                src="/logo.png"
                alt="gym-fluencer"
                width={40}
                height={40}
                className="object-contain object-center"
              />
              <span>
                Gym-Fluencer
              </span>
            </Link>
            <Accordion type="single" collapsible className="w-full">
              <div
                className="flex flex-col gap-2.5 mt-2.5 w-full"
              >
                {
                  items.map((navLink, i) => {
                    if ("children" in navLink) {
                      return (
                        <AccordionItem key={i} value={i.toString()} className="w-full border-0">
                          <AccordionTrigger>
                            {navLink.label}
                          </AccordionTrigger>
                          <AccordionContent className="grid gap-3 w-full">
                            {navLink.children.map((component) => (
                              <Link
                                href={component.href}
                                key={component.href}
                                className="w-full border rounded-sm py-2 px-4"
                              >
                                <span >
                                  {component.label}
                                </span>
                                <p>{component.description}</p>
                              </Link>
                            ))}
                          </AccordionContent>
                        </AccordionItem>
                      )
                    }

                    return (
                      <Link href={navLink.href} key={i} className="py-4">
                        {navLink.label}
                      </Link>
                    )
                  })
                }
              </div>
            </Accordion>
          </div>
          <Button className="min-w-32 mt-auto w-full" variant={"default"}>
            Login
          </Button>
        </div>
      </SheetContent>
    </Sheet >
  )
}

export default MobileNav