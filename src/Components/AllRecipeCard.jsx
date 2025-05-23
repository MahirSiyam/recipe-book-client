import React from "react";
import { Link } from "react-router"; 

const AllRecipeCard = ({ recipe }) => {
  const { _id, photo, title, ingredients, cuisineType, prepTime } = recipe;

  return (
    <div className="p-4 shadow-md border border-gray-200 rounded-xl w-full mx-auto overflow-hidden">
      <div className="space-y-4">
        {/* Image */}
        <img
          src={photo}
          alt={title}
          className="w-full h-48 object-cover rounded-md"
        />

        {/* Content */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold truncate">{title}</h3>

          <p className="text-sm text-gray-700 line-clamp-3">
            <span className="font-semibold">Ingredients:</span> {ingredients}
          </p>

          <p className="text-sm text-gray-700 truncate">
            <span className="font-semibold">Cuisine Type:</span> {cuisineType}
          </p>

          <p className="text-sm text-gray-700">
            <span className="font-semibold">Prep Time:</span> {prepTime} mins
          </p>
        </div>

        {/* Button */}
        <div className="flex justify-end mt-3">
          <Link to={`/recipe-details/${_id}`} className="btn btn-sm btn-primary">
            More Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllRecipeCard;
