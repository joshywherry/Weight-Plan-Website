import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ThemeToggle from "@/components/theme-toggle"
import MobileMenu from "@/components/mobile-menu"

export default function TipsPage() {
  const weightGainTips = [
    {
      icon: "🍽️",
      title: "Eat More Frequently",
      description:
        "Aim for 5-6 meals per day instead of 3 large meals. This helps increase your total calorie intake without feeling overly full.",
    },
    {
      icon: "🥑",
      title: "Use Calorie-Dense Foods",
      description:
        "Include foods like avocado, peanut butter, omena (silver cyprinid), nuts, and seeds in your meals for healthy calories.",
    },
    {
      icon: "💪",
      title: "Strength Train Regularly",
      description: "Combine your meal plan with resistance training to build muscle mass rather than just gaining fat.",
    },
    {
      icon: "😴",
      title: "Get Quality Sleep",
      description: "Aim for 7-9 hours of sleep per night. Your body repairs and builds muscle during rest periods.",
    },
    {
      icon: "📅",
      title: "Stay Consistent",
      description:
        "Consistency is key. Stick to your meal plan and exercise routine for at least 8-12 weeks to see results.",
    },
    {
      icon: "💧",
      title: "Stay Hydrated",
      description:
        "Drink plenty of water throughout the day, but avoid drinking large amounts before meals to maintain appetite.",
    },
  ]

  const proteinRichFoods = [
    "Nyama Choma (Grilled Meat)",
    "Samaki (Fish)",
    "Mayai (Eggs)",
    "Maharagwe (Beans)",
    "Dengu (Lentils)",
    "Omena (Silver Cyprinid)",
    "Chicken",
    "Milk and Yogurt",
  ]

  const energyRichFoods = [
    "Ugali (Maize Meal)",
    "Chapati",
    "Rice",
    "Sweet Potatoes",
    "Bananas",
    "Avocado",
    "Groundnuts (Peanuts)",
    "Coconut",
    "Mandazi",
    "Arrow Roots",
  ]

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
              <Link href="/meal-plan" className="hover:text-green-200 transition-colors">
                Meal Plan
              </Link>
              <Link href="/tips" className="hover:text-green-200 transition-colors font-semibold">
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
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800 dark:text-green-200 mb-4">Weight Gain Tips & Guidelines</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Essential tips for healthy weight gain using  foods
          </p>
        </div>

        {/* Weight Gain Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            💡 Top Tips for Healthy Weight Gain
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {weightGainTips.map((tip, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-green-800 dark:text-green-200">
                    <span className="text-2xl">{tip.icon}</span>
                    {tip.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Food Categories */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-green-800 dark:text-green-200 flex items-center gap-2">
                 Protein-Rich Foods
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-2">
                {proteinRichFoods.map((food, index) => (
                  <div key={index} className="flex items-center gap-2 p-2 bg-green-50 dark:bg-green-900 rounded">
                    <span className="text-green-600 dark:text-green-400">•</span>
                    <span className="text-gray-700 dark:text-gray-300">{food}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                Aim for 1.2-1.6g of protein per kg of body weight daily for muscle building.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-yellow-800 dark:text-yellow-200 flex items-center gap-2">
                Energy-Rich Foods
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-2">
                {energyRichFoods.map((food, index) => (
                  <div key={index} className="flex items-center gap-2 p-2 bg-yellow-50 dark:bg-yellow-900 rounded">
                    <span className="text-yellow-600 dark:text-yellow-400">•</span>
                    <span className="text-gray-700 dark:text-gray-300">{food}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                These carbohydrate-rich foods provide the energy needed for daily activities and workouts.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Additional Tips */}
        <section className="mt-12">
          <Card className="bg-gradient-to-r from-green-50 to-yellow-50 dark:from-green-900 dark:to-yellow-900">
            <CardHeader>
              <CardTitle className="text-green-800 dark:text-green-200"> Important Reminders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Before Starting:</h4>
                  <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                    <li>• Consult with a healthcare provider</li>
                    <li>• Calculate your daily calorie needs</li>
                    <li>• Set realistic weight gain goals (0.5-1kg per week)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Monitor Progress:</h4>
                  <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                    <li>• Weigh yourself weekly at the same time</li>
                    <li>• Take body measurements monthly</li>
                    <li>• Track your energy levels and mood</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
