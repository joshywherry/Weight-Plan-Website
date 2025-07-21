"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function BMICalculator() {
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [bmi, setBmi] = useState<number | null>(null)
  const [category, setCategory] = useState("")

  const calculateBMI = () => {
    const heightInMeters = Number.parseFloat(height) / 100
    const weightInKg = Number.parseFloat(weight)

    if (heightInMeters > 0 && weightInKg > 0) {
      const bmiValue = weightInKg / (heightInMeters * heightInMeters)
      setBmi(Number.parseFloat(bmiValue.toFixed(1)))

      if (bmiValue < 18.5) {
        setCategory("Underweight - Perfect for our weight gain plan! 💪")
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setCategory("Normal weight - You can still benefit from healthy weight gain")
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setCategory("Overweight - Consider a balanced approach to nutrition")
      } else {
        setCategory("Obese - Consult with a healthcare provider for guidance")
      }
    }
  }

  const getBMIColor = () => {
    if (!bmi) return "text-gray-600"
    if (bmi < 18.5) return "text-blue-600 dark:text-blue-400"
    if (bmi < 25) return "text-green-600 dark:text-green-400"
    if (bmi < 30) return "text-yellow-600 dark:text-yellow-400"
    return "text-red-600 dark:text-red-400"
  }

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center text-green-800 dark:text-green-200">📊 BMI Calculator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="height">Height (cm)</Label>
          <Input
            id="height"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter your height in cm"
          />
        </div>
        <div>
          <Label htmlFor="weight">Weight (kg)</Label>
          <Input
            id="weight"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter your weight in kg"
          />
        </div>
        <Button
          onClick={calculateBMI}
          className="w-full bg-green-600 hover:bg-green-700 text-white"
          disabled={!height || !weight}
        >
          Calculate BMI
        </Button>

        {bmi && (
          <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p className="text-2xl font-bold mb-2">
              Your BMI: <span className={getBMIColor()}>{bmi}</span>
            </p>
            <p className={`text-sm ${getBMIColor()}`}>{category}</p>
          </div>
        )}

        <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
          <p>BMI Categories:</p>
          <p>Underweight: {"<"} 18.5 | Normal: 18.5-24.9 | Overweight: 25-29.9 | Obese: ≥ 30</p>
        </div>
      </CardContent>
    </Card>
  )
}
