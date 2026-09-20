import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaUtensils, FaList, FaShoppingBasket, FaAngleDown, FaAngleUp } from "react-icons/fa";

const RecipeDetails = () => {
  const { id } = useParams(); 
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showInstructions, setShowInstructions] = useState(false);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const apiKey = '6d23145ba16144caa653e0a97dbf6b50'; 
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`
        );
        setRecipe(response.data);
      } catch (err) {
        setError('Failed to fetch recipe details.');
      } finally {
        setLoading(false);
      }
    };

    fetchRecipeDetails();
  }, [id]);

  if (loading) return <p className="text-center text-xl text-white">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="bg-gray-900 mt-16 text-white min-h-screen flex justify-center items-center">
      <div className="max-w-5xl mt-10 mx-auto p-6 bg-gray-800 rounded-lg shadow-lg transition-all">
        
        {/* Title */}
        <h1 className="text-4xl font-bold  text-center mb-6 flex items-center justify-center gap-2">
          <FaUtensils className="text-yellow-400" /> {recipe.title}
        </h1>

        {/* Recipe Image */}
        <div className="flex justify-center">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full max-w-lg h-80 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Recipe Summary */}
        <div dangerouslySetInnerHTML={{ __html: recipe.summary }} className="text-lg mt-4"></div>

        {/* Ingredients Section */}
        <div className="mt-6 bg-gray-700 p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
            <FaShoppingBasket className="text-green-400" /> Ingredients:
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            {recipe.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id} className="text-lg text-gray-200">
                {ingredient.original}
              </li>
            ))}
          </ul>
        </div>

        {/* View Process Button */}
        <div className="mt-6 text-center">
          <button 
            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md flex items-center justify-center gap-2 mx-auto
                      hover:bg-blue-600 transition duration-300" 
            onClick={() => setShowInstructions(!showInstructions)}
          >
            {showInstructions ? 'Hide Process' : 'View Process'} 
            {showInstructions ? <FaAngleUp /> : <FaAngleDown />}
          </button>
        </div>

        {/* Step-by-Step Instructions (Hidden by Default) */}
        {showInstructions && (
          <div className="mt-6 bg-gray-700 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
              <FaList className="text-red-400" /> Cooking Steps:
            </h2>
            {recipe.analyzedInstructions.length > 0 ? (
              <ol className="list-decimal pl-6 space-y-3">
                {recipe.analyzedInstructions[0].steps.map((step) => (
                  <li key={step.number} className="text-lg">
                    <span className="font-semibold text-yellow-300">Step {step.number}:</span> {step.step}
                  </li>
                ))}
              </ol>
            ) : (
              <p className="text-lg italic">No instructions available for this recipe.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeDetails;


