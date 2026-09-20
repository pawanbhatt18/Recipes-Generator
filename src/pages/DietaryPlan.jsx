import React, { useState } from 'react';
import { motion } from 'framer-motion';

const DietaryPlan = () => {
  const [age, setAge] = useState(25);
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(170);
  const [goal, setGoal] = useState('Maintain Weight');
  const [dietType, setDietType] = useState('Vegetarian');
  const [gender, setGender] = useState('Male');
  const [planGenerated, setPlanGenerated] = useState(false);
  const [dietPlan, setDietPlan] = useState([]);
  const [bmr, setBmr] = useState(0);

  const calculateBMR = () => {
    let bmrValue = 0;
    if (gender === 'Male') {
      bmrValue = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
    } else {
      bmrValue = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
    }
    setBmr(bmrValue.toFixed(2));
    return bmrValue;
  };

  const generateDietPlan = () => {
    const baseCalories = calculateBMR();
    const calories = goal === 'Lose Weight' ? baseCalories - 500 : goal === 'Gain Weight' ? baseCalories + 500 : baseCalories;
    const protein = (weight * 1.5).toFixed(1);
    const carbs = (calories * 0.5 / 4).toFixed(1);
    const fat = (calories * 0.25 / 9).toFixed(1);

    const foodSuggestions = dietType === 'Vegetarian'
      ? ['Lentils', 'Tofu', 'Quinoa', 'Almonds', 'Vegetables']
      : ['Chicken Breast', 'Salmon', 'Eggs', 'Greek Yogurt', 'Brown Rice'];

    setDietPlan([
      { nutrient: 'Calories', value: `${calories.toFixed(2)} kcal` },
      { nutrient: 'Protein', value: `${protein} g` },
      { nutrient: 'Carbs', value: `${carbs} g` },
      { nutrient: 'Fats', value: `${fat} g` },
      { nutrient: 'Suggested Foods', value: foodSuggestions.join(', ') }
    ]);
    setPlanGenerated(true);
  };

  return (
    <div className="min-h-screen bg-gray-800 mt-16 text-white flex flex-col items-center p-6">
     <div className='mt-10'> <h1 className="text-4xl font-bold mb-8">Personalized BMR & Diet Plan</h1></div>

      <div className="bg-gray-900 p-6 mt-10 rounded-lg shadow-lg w-full max-w-2xl grid grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-bold">Gender:</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)} className="w-full p-2 rounded text-gray-500 font-bold">
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div>
          <label className="block mb-1 font-bold">Age:</label>
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} className="w-full p-2 rounded text-gray-500 font-bold" min="10" max="80" />
        </div>
        <div>
          <label className="block mb-1 font-bold">Weight (kg):</label>
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} className="w-full p-2 rounded text-gray-500 font-bold" min="30" max="150" />
        </div>
        <div>
          <label className="block mb-1 font-bold">Height (cm):</label>
          <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} className="w-full p-2 rounded text-gray-500 font-bold" min="130" max="220" />
        </div>
        <div>
          <label className="block mb-1 font-bold">Select Goal:</label>
          <select value={goal} onChange={(e) => setGoal(e.target.value)} className="w-full p-2 rounded text-gray-500 font-bold">
            <option>Lose Weight</option>
            <option>Maintain Weight</option>
            <option>Gain Weight</option>
          </select>
        </div>
        <div>
          <label className="block mb-1 font-bold">Diet Type:</label>
          <select value={dietType} onChange={(e) => setDietType(e.target.value)} className="w-full p-2 rounded text-gray-500 font-bold">
            <option>Vegetarian</option>
            <option>Non-Vegetarian</option>
          </select>
        </div>
        <button onClick={generateDietPlan} className="col-span-2 p-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-xl font-bold">
          Create My Diet Plan
        </button>
      </div>

      {planGenerated && (
        <motion.div 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          className="fixed inset-0 bg-gray-900 bg-opacity-95 flex justify-center items-center p-6"
        >
          <div className="w-full max-w-6xl bg-gray-900 p-8 rounded-lg shadow-lg overflow-auto relative">
            <button onClick={() => setPlanGenerated(false)} className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 p-2 rounded text-white">Close</button>
            <h2 className="text-3xl font-bold mb-4 text-center">Your Diet Plan</h2>
            <p className="text-xl text-center font-semibold mb-4">Estimated BMR: {bmr} kcal</p>
            <table className="w-full text-left border-collapse text-lg">
              <thead>
                <tr className="bg-gray-700">
                  <th className="p-4">Nutrients</th>
                  <th className="p-4">Amount</th>
                </tr>
              </thead>
              <tbody>
                {dietPlan.map((item, index) => (
                  <tr key={index} className="border-b border-gray-600">
                    <td className="p-4">{item.nutrient}</td>
                    <td className="p-4">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default DietaryPlan;