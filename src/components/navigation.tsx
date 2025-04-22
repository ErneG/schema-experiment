"use client"

import { usePathname, useRouter } from "next/navigation"
import { Home, Calendar, Utensils, Cpu } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export function MainNav() {
  const pathname = usePathname()
  const router = useRouter()

  const navItems = [
    {
      href: "/",
      label: "Home",
      icon: Home,
    },
    {
      href: "/event",
      label: "Events",
      icon: Calendar,
    },
    {
      href: "/creamy-beetroot-soup",
      label: "Recipes",
      icon: Utensils,
    },
    {
      href: "/esp-led-controller",
      label: "Projects",
      icon: Cpu,
    },
  ]

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                active={pathname === item.href}
                onClick={() => router.push(item.href)}
              >
                <Icon className="mr-2 h-4 w-4" />
                {item.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          )
        })}
      </NavigationMenuList>
    </NavigationMenu>
  )
} 