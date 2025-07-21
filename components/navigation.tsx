import Link from "next/link"
import ThemeToggle from "@/components/theme-toggle"
import MobileMenu from "@/components/mobile-menu"

interface NavigationProps {
  currentPage?: string
}

export default function Navigation({ currentPage }: NavigationProps) {
  return (
    <nav className="bg-green-600 dark:bg-green-800 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-bold hover:text-green-200 transition-colors">
            🇰🇪 Kenyan Weight Gain
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <Link
              href="/"
              className={`hover:text-green-200 transition-colors ${currentPage === "home" ? "font-semibold" : ""}`}
            >
              Home
            </Link>
            <Link
              href="/meal-plan"
              className={`hover:text-green-200 transition-colors ${currentPage === "meal-plan" ? "font-semibold" : ""}`}
            >
              Meal Plan
            </Link>
            <Link
              href="/tips"
              className={`hover:text-green-200 transition-colors ${currentPage === "tips" ? "font-semibold" : ""}`}
            >
              Tips
            </Link>
            <Link
              href="/contact"
              className={`hover:text-green-200 transition-colors ${currentPage === "contact" ? "font-semibold" : ""}`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Navigation & Theme Toggle */}
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  )
}
