import React from "react";
import { RecipeContext } from "../Provider/RecipeProvider";
import AllRecipeCard from "../Components/AllRecipeCard";
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  const { recipes } = React.useContext(RecipeContext);

  return (
    <div>
      <div
        className="hero min-h-screen mb-5"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/premium-photo/cookbook-with-ingredients-tablerecipe-book_434193-6699.jpg?ga=GA1.1.949294392.1744378709&semt=ais_hybrid&w=740)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              <Typewriter
                words={[
                  'Delicious Recipes Made Simple!',
                  'Easy Cooking Guides!',
                  'Gourmet Meals at Home!',
                  'Culinary Inspiration!'
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h1>
            <p className="mb-5">
              "Transform everyday ingredients into gourmet meals. Step-by-step
              guides, quick tips, and endless inspiration for your kitchen."
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3">
        {recipes.map((recipe, index) => (
          <AllRecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Home;