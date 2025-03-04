"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link
        href="/"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/" ? "text-primary" : "text-muted-foreground",
        )}
      >
        Home
      </Link>
      <Link
        href="/features"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/features" ? "text-primary" : "text-muted-foreground",
        )}
      >
        Features
      </Link>
      <Link
        href="/pricing"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/pricing" ? "text-primary" : "text-muted-foreground",
        )}
      >
        Pricing
      </Link>
      <Link
        href="/about"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/about" ? "text-primary" : "text-muted-foreground",
        )}
      >
        About
      </Link>
      <Link
        href="/contact"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/contact" ? "text-primary" : "text-muted-foreground",
        )}
      >
        Contact
      </Link>
    </nav>
  )
}

