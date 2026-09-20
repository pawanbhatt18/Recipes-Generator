import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const Recipes = () => {
  const [ingredients, setIngredients] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

  const searchRecipes = async () => {
    if (!ingredients) return; 
    setLoading(true);
    setError(null);

    try {
      const apiKey = '6d23145ba16144caa653e0a97dbf6b50'; 
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=${apiKey}`
      );
      setRecipes(response.data);
    } catch (err) {
      setError('Failed to fetch recipes. Please try again.',err);
      console.log(err);
      
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-full text-white mt-16 min-h-screen mx-auto p-6 bg-gray-900">
      <h1 className="text-5xl font-bold text-white text-center mb-6">Recipe Search</h1>
      
      <div className="flex flex-col sm:flex-row justify-center items-center mb-6 gap-3">
        <input
          type="text"
          placeholder="Enter ingredients (e.g. tomato, potato, pasta)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        
          className="px-4 py-3 border border-gray-500 rounded-md w-full sm:w-2/3 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-lg"
        />
        <button
          onClick={searchRecipes}
          disabled={loading}
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-500 transition duration-300 shadow-md"
        >
          {loading ? 'Searching...' : 'Search Recipes'}
        </button>
      </div>

      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      {recipes.length > 0 && (
        <div className='flex justify-center items-center mt-6'>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
             items-center justify-items-center place-content-center  w-full ">
  {recipes.map((recipe) => (
    <div key={recipe.id} className="border mb-7 border-gray-700 rounded-lg w-[16rem] mx-auto overflow-hidden shadow-lg bg-gray-800 hover:shadow-2xl transition duration-300">
      <img
        src={`https://spoonacular.com/recipeImages/${recipe.id}-312x231.jpg`}
        alt={recipe.title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4 text-center">
        <h2 className="text-xl font-semibold mb-2 text-white">{recipe.title.length >20? recipe.title.slice(0,20) +  ".." : recipe.title}</h2>
        <button
          onClick={() => navigate(`/recipe/${recipe.id}`)}
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-500 transition duration-300"
        >
          View Recipe
        </button>
      </div>
    </div>
  ))}
</div>

        </div>
      )}
    </div>
  );
};

export default Recipes;

