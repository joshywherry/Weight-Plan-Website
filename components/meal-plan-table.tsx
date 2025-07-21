import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const mealPlan = [
  {
    day: "Monday",
    meals: {
      breakfast: "Mandazi (2 pieces) + Tea with milk + Banana ",
      snack1: "Groundnuts (handful) + Orange ",
      lunch: "Ugali + Sukuma Wiki + Nyama Choma + Avocado ",
      snack2: "Sweet potato + Milk ",
      dinner: "Rice + Beans + Vegetables + Fish ",
      beforeBed: "Milk + Biscuits ",
    },
    calories: "~2900 kcal",
  },
  {
    day: "Tuesday",
    meals: {
      breakfast: "Chapati (2 pieces) + Scrambled eggs + Tea ",
      snack1: "Banana + Peanut butter ",
      lunch: "Githeri + Meat stew + Cabbage + Avocado ",
      snack2: "Arrow roots + Milk ",
      dinner: "Ugali + Chicken + Spinach + Tomatoes ",
      beforeBed: "Yogurt + Honey ",
    },
    calories: "~2850 kcal",
  },
  {
    day: "Wednesday",
    meals: {
      breakfast: "Porridge (millet/maize) + Milk + Banana ",
      snack1: "Samosa + Fruit juice ",
      lunch: "Rice + Fish curry + Vegetables + Coconut ",
      snack2: "Roasted maize + Milk ",
      dinner: "Chapati + Beef stew + Kales + Avocado ",
      beforeBed: "Milk + Dates",
    },
    calories: "~2950 kcal",
  },
  {
    day: "Thursday",
    meals: {
      breakfast: "Bread + Eggs + Sausage + Tea ",
      snack1: "Mixed nuts + Apple ",
      lunch: "Ugali + Omena + Sukuma wiki + Tomatoes ",
      snack2: "Sweet potato + Butter ",
      dinner: "Rice + Chicken + Cabbage + Carrots ",
      beforeBed: "Milk + Biscuits ",
    },
    calories: "~2800 kcal",
  },
  {
    day: "Friday",
    meals: {
      breakfast: "Mandazi + Tea + Boiled eggs ",
      snack1: "Banana + Groundnuts ",
      lunch: "Githeri + Meat + Spinach + Avocado ",
      snack2: "Arrow roots + Milk ",
      dinner: "Ugali + Fish + Vegetables + Coconut ",
      beforeBed: "Yogurt + Fruit",
    },
    calories: "~2900 kcal",
  },
  {
    day: "Saturday",
    meals: {
      breakfast: "Chapati + Beans + Tea ",
      snack1: "Fruit salad + Nuts ",
      lunch: "Rice + Chicken curry + Vegetables + Avocado ",
      snack2: "Roasted groundnuts + Milk ",
      dinner: "Ugali + Beef + Kales + Tomatoes ",
      beforeBed: "Milk + Honey ",
    },
    calories: "~3000 kcal",
  },
  {
    day: "Sunday",
    meals: {
      breakfast: "Porridge + Milk + Banana + Nuts ",
      snack1: "Mandazi + Fruit juice ",
      lunch: "Pilau + Chicken + Salad + Avocado ",
      snack2: "Sweet potato + Milk ",
      dinner: "Chapati + Fish + Vegetables + Coconut ",
      beforeBed: "Milk + Biscuits ",
    },
    calories: "~2950 kcal",
  },
]

export default function MealPlanTable() {
  return (
    <div className="space-y-6">
      {mealPlan.map((day, index) => (
        <Card key={index} className="overflow-hidden">
          <CardHeader className="bg-green-50 dark:bg-green-900">
            <CardTitle className="flex justify-between items-center text-green-800 dark:text-green-200">
              <span className="text-xl">{day.day}</span>
              <span className="text-sm font-normal bg-green-600 text-white px-3 py-1 rounded-full">{day.calories}</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
              <div className="p-4 border-b md:border-r border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-orange-600 dark:text-orange-400 mb-2"> Breakfast</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{day.meals.breakfast}</p>
              </div>
              <div className="p-4 border-b md:border-r lg:border-r-0 border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-yellow-600 dark:text-yellow-400 mb-2"> Morning Snack</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{day.meals.snack1}</p>
              </div>
              <div className="p-4 border-b lg:border-r border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2"> Lunch</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{day.meals.lunch}</p>
              </div>
              <div className="p-4 border-b md:border-r border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2"> Afternoon Snack</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{day.meals.snack2}</p>
              </div>
              <div className="p-4 border-b md:border-r lg:border-r-0 border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2"> Dinner</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{day.meals.dinner}</p>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-2"> Before Bed</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{day.meals.beforeBed}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
