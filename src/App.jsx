import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Recipes from "./pages/Recipes";
import Contact from "./pages/Contact";
import AppLayout from "./components/layout/AppLayout";
import DietaryPlan from "./pages/DietaryPlan"
import RecipeDetails from "./components/RecipeDetails";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";


const App = () => {
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "recipes",
        element: <Recipes />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path:"dietary-plan",
        element: <DietaryPlan/>
      },
      { path: 'recipe/:id',
       element: <RecipeDetails />
       },
      
    ] 
    
    
  },
  {
    path: "login",
    element: <Login/>
  },
  {
    path: "signup",
    element: <Signup/>
  }
  
  
])

return (
  <RouterProvider router={router}></RouterProvider>
  
)}


export default App;
