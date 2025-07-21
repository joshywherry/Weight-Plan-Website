"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/meal-plan", label: "Meal Plan" },
    { href: "/tips", label: "Tips" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <div className="md:hidden relative" ref={menuRef}>
      {/* Menu Toggle Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleMenu}
        className="text-white hover:bg-green-700 dark:hover:bg-green-600 p-2"
        aria-label="Toggle mobile menu"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden">
          <div className="fixed top-0 right-0 h-full w-64 bg-green-600 dark:bg-green-800 shadow-lg transform transition-transform duration-300 ease-in-out">
            {/* Menu Header */}
            <div className="flex justify-between items-center p-4 border-b border-green-500">
              <span className="text-white font-semibold">Menu</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMenu}
                className="text-white hover:bg-green-700 dark:hover:bg-green-600 p-1"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Menu Items */}
            <nav className="p-4">
              <ul className="space-y-4">
                {menuItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block py-3 px-4 rounded-lg text-white transition-colors ${
                        pathname === item.href
                          ? "bg-green-700 dark:bg-green-900 font-semibold"
                          : "hover:bg-green-700 dark:hover:bg-green-700"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Menu Footer */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="text-center text-green-200 text-sm">
                <p>JayNexus Technologies</p>
                <p className="text-xs mt-1">Healthy weight gain with local foods</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
