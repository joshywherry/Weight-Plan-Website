import Link from "next/link"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import BMICalculator from "@/components/bmi-calculator"
import ThemeToggle from "@/components/theme-toggle"
import MobileMenu from "@/components/mobile-menu"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-green-600 dark:bg-green-800 text-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo with Image */}
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/mainicon.png" alt="JayFit Logo" width={40} height={40} />
              <span className="text-xl font-bold">JayFit</span>
            </Link>

            <div className="hidden md:flex space-x-6">
              <Link href="/" className="hover:text-green-200 transition-colors font-semibold">
                Home
              </Link>
              <Link href="/meal-plan" className="hover:text-green-200 transition-colors">
                Meal Plan
              </Link>
              <Link href="/tips" className="hover:text-green-200 transition-colors">
                Tips
              </Link>
              <Link href="/contact" className="hover:text-green-200 transition-colors">
                Contact
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              <MobileMenu />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-yellow-50 dark:from-green-900 dark:to-yellow-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-green-800 dark:text-green-200 mb-6">
            Weight Gain Meal Plan
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Designed for naturally lean individuals looking to gain healthy weight using locally available foods.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/meal-plan">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                View 7-Day Meal Plan 📅
              </Button>
            </Link>
            <Link href="/tips">
              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
              >
                Get Weight Gain Tips 💡
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">
            Why Choose Our Meal Plan?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-green-50 dark:bg-green-900">
              <div className="text-4xl mb-4">🇰🇪</div>
              <h3 className="text-xl font-semibold mb-3 text-green-800 dark:text-green-200">Local Foods</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Uses common foods like ugali, sukuma wiki, githeri, and nyama choma that are easily available.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-yellow-50 dark:bg-yellow-900">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-800 dark:text-yellow-200">Healthy Weight Gain</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Focuses on nutritious, calorie-dense foods to help you gain weight in a healthy way.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-blue-50 dark:bg-blue-900">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3 text-blue-800 dark:text-blue-200">Structured Plan</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Complete 7-day meal plan with 2800-3000 calories per day to support healthy weight gain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BMI Calculator Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">
            Check Your BMI Status
          </h2>
          <BMICalculator />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 dark:bg-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Weight Gain Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get started with our comprehensive 7-day meal plan featuring delicious foods.
          </p>
          <Link href="/meal-plan">
            <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
              Start Your Meal Plan Today 🚀
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 JayFit Meal Plan. Designed for healthy weight gain with local foods.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <Link href="/meal-plan" className="hover:text-green-400 transition-colors">
              Meal Plan
            </Link>
            <Link href="/tips" className="hover:text-green-400 transition-colors">
              Tips
            </Link>
            <Link href="/contact" className="hover:text-green-400 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
