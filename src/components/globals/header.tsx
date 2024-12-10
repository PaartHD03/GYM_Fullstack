import React from "react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/helpers/cn"
import { getContentList } from "@/helpers/get-content-list"

import MobileNav, { MobileNavProps } from "./mobile-nav"

const Header = async () => {

  const dietPlans = (await getContentList({ category: "diet-plans", fields: ["slug", "title", "description"] })).map((plan, i) => {
    if (i < 3 && typeof plan !== "string") {
      return {
        label: plan.title,
        href: `/contents/diet-plans/${plan.slug}`,
        description: plan.description,
      }
    }
  })

  const workoutPlans = (await getContentList({ category: "workout-plans", fields: ["slug", "title", "description"] })).map((plan, i) => {
    if (i < 3 && typeof plan !== "string") {
      return {
        label: plan.title,
        href: `/contents/workout-plans/${plan.slug}`,
        description: plan.description,
      }
    }
  })



  const navLinks = [
    {
      label: "Features",
      href: "/#key-features",
    },
    {
      label: "Diet Plans",
      children: [
        ...dietPlans,
        {
          label: "Explore all",
          href: "/contents/diet-plans",
          description: "View all diet plans",
        }
      ],
    },
    {
      label: "Workout Plans",
      children: [
        ...workoutPlans,
        {
          label: "Explore all",
          href: "/contents/workout-plans",
          description: "View all workout plans",
        }
      ],
    },
    {
      label: "Blogs",
      href: "/contents/blogs",
    },
    {
      label: "FAQs",
      href: "/#faqs",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ]

  return (
    <header className="fixed inset-0 w-full h-fit z-50 bg-background/40 backdrop-blur-[2px]">
      <div className="flex items-center justify-between container py-4">
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

        <NavigationMenu className="max-lg:hidden">
          <NavigationMenuList>
            {
              navLinks.map((navLink, i) => {
                if (navLink.children) {
                  return (
                    <NavigationMenuItem key={i}>
                      <NavigationMenuTrigger>
                        {navLink.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] h-full">
                          {navLink.children.map((component) => (
                            <ListItem
                              key={component?.href}
                              title={component?.label}
                              href={component?.href}
                              className="h-full"
                            >
                              {component?.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  )
                }

                return (
                  <NavigationMenuItem key={i}>
                    <Link href={navLink.href} className={navigationMenuTriggerStyle()}>
                      {navLink.label}
                    </Link>
                  </NavigationMenuItem>
                )

              })
            }
          </NavigationMenuList>
        </NavigationMenu>

        <div
          className="flex items-center justify-center gap-4"
        >
          <Button className="min-w-32 max-sm:hidden" variant={"outline"}>
            Login
          </Button>
          <MobileNav items={navLinks as MobileNavProps["items"]} />
        </div>
      </div>
    </header >
  )
}

export default Header

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href = "", ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none truncate">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
