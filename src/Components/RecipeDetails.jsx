import React from "react";
import Navber from "./Navber";
import { Link, useLoaderData } from "react-router";

const RecipeDetails = () => {
  const details = useLoaderData();

  const {
    photo,
    title,
    ingredients,
    instructions,
    cuisineType,
    prepTime,
    category,
    categories,
  } = details;

  return (
    <div className="card lg:card-side bg-base-100 shadow-sm gap-4">
      <figure>
        <img src={photo} alt="Album" />
      </figure>
      <div className="flex items-center">
        <div className="space-y-3 p-5">
            <h2 className="card-title text-5xl">{title}</h2>
        <p className="text-xl font-bold">Ingredients: {ingredients}</p>
        <p className="text-xl font-bold">Instructions: {instructions}</p>
        <p className="text-xl font-bold">CuisineType: {cuisineType}</p>
        <p className="text-xl font-bold">PrepTime: {prepTime}</p>
        <p className="text-xl font-bold">Category: {category}</p>
        <div className="mt-2">
                        <p className="font-semibold mb-1">Categories:</p>
                        <div className="flex flex-wrap gap-2">
                            {Array.isArray(categories) && categories.map((cat, index) => (
                                <span 
                                    key={index} 
                                    className="badge badge-outline badge-primary"
                                >
                                    {cat}
                                </span>
                            ))}
                        </div>
                    </div>
        <div className="flex justify-between mt-10">
          <Link to={`/allrecipes`} className="btn btn-primary">Back to</Link>
          <button className="btn btn-primary">Like</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
