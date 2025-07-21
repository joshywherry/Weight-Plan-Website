import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ThemeToggle from "@/components/theme-toggle"
import MealPlanTable from "@/components/meal-plan-table"
import MobileMenu from "@/components/mobile-menu"

export default function MealPlanPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-green-600 dark:bg-green-800 text-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-xl font-bold">
              JayFit
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="hover:text-green-200 transition-colors">
                Home
              </Link>
              <Link href="/meal-plan" className="hover:text-green-200 transition-colors font-semibold">
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

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-800 dark:text-green-200 mb-4">
            7-Day  Weight Gain Meal Plan
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Complete meal plan with 2800-3000 calories per day using local foods
          </p>
          <Button className="bg-green-600 hover:bg-green-700 text-white">Fuel Up with JayFit</Button>
        </div>

        <MealPlanTable />

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-green-800 dark:text-green-200">📋 Meal Plan Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Eat every 2-3 hours to maintain energy levels</li>
                <li>• Drink plenty of water throughout the day</li>
                <li>• Adjust portion sizes based on your appetite</li>
                <li>• Include healthy fats like avocado and nuts</li>
                <li>• Combine with regular exercise for best results</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-green-800 dark:text-green-200">🥘Local Food Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>
                  • <strong>Ugali:</strong> High in carbohydrates for energy
                </li>
                <li>
                  • <strong>Githeri:</strong> Complete protein from beans and maize
                </li>
                <li>
                  • <strong>Sukuma Wiki:</strong> Rich in vitamins and minerals
                </li>
                <li>
                  • <strong>Nyama Choma:</strong> High-quality protein for muscle building
                </li>
                <li>
                  • <strong>Avocado:</strong> Healthy fats and calories
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4">Need personalized meal planning or have questions?</p>
          <Link href="/contact">
            <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent">
              Contact Us for Custom Plans
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
