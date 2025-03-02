"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
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
import { ModeToggle } from "@/components/mode-toggle"
import { StatusIndicator } from "@/components/status-indicator"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="flex justify-between items-center py-4 px-6 bg-black/80 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
      <div className="flex items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <div className="bg-teal-600 rounded p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-white"
            >
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
          </div>
          <span className="font-bold text-xl text-white">
            <span className="text-teal-400">Lnk</span>
            <span className="text-orange-500">shop</span>
          </span>
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-gray-300 hover:text-white hover:bg-gray-800">
                Features
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-teal-900 to-teal-950 p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium text-white">Lnkshop</div>
                        <p className="text-sm leading-tight text-gray-300">
                          Turn your social bio into a sleek, shoppable hub with Lnkshop.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/features/smart-links" title="Smart Links">
                    Auto-generate rich previews of your products
                  </ListItem>
                  <ListItem href="/features/analytics" title="Analytics">
                    Track clicks and optimize your storefront
                  </ListItem>
                  <ListItem href="/features/custom-design" title="Custom Design">
                    Choose from multiple layouts and color schemes
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/pricing" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent text-gray-300 hover:text-white hover:bg-gray-800",
                    pathname === "/pricing" && "text-white bg-gray-800",
                  )}
                >
                  Pricing
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent text-gray-300 hover:text-white hover:bg-gray-800",
                    pathname === "/about" && "text-white bg-gray-800",
                  )}
                >
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent text-gray-300 hover:text-white hover:bg-gray-800",
                    pathname === "/contact" && "text-white bg-gray-800",
                  )}
                >
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/support" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent text-gray-300 hover:text-white hover:bg-gray-800",
                    pathname === "/support" && "text-white bg-gray-800",
                  )}
                >
                  Support
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:block">
          <StatusIndicator />
        </div>
        <ModeToggle />
        <div className="hidden sm:flex gap-2">
          <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800">
            Log in
          </Button>
          <Button className="bg-teal-600 hover:bg-teal-700 text-white">Sign up</Button>
        </div>
      </div>
    </div>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-gray-400">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

