import React, { useState } from "react";
import Swal from "sweetalert2";
import UpdateRecipe from "./UpdateRecipe";
import { Link } from "react-router";

const MyRecipeCard = ({ recipe, onDelete = () => {} }) => {
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/recipes/${id}`, {
          method: "DELETE",
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error("Failed to delete recipe");
            }
            return res.json();
          })
          .then((data) => {
            if (data.deletedCount > 0) {
              setIsDeleted(true);
              onDelete(id);
              Swal.fire({
                title: "Deleted!",
                text: "Your recipe has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((error) => {
            Swal.fire({
              title: "Error!",
              text: error.message,
              icon: "error",
            });
          });
      }
    });
  };

  if (isDeleted) {
    return null;
  }

  const {
    _id,
    photo,
    title,
    ingredients,
    instructions,
    cuisineType,
    prepTime,
    category,
    categories,
  } = recipe;


  return (
    <div className="p-4 shadow-md border-2 border-gray-100 rounded-xl">
      <div className="space-y-4">
        <div className="space-y-2">
          <img
            src={photo}
            alt={title}
            className="block object-cover object-center w-full rounded-md h-70"
          />
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="leading-snug">
            <span className="font-bold">Ingredients:</span> {ingredients}
          </p>
          <p className="leading-snug">
            <span className="font-bold">Cuisine Type:</span> {cuisineType}
          </p>
          <p className="leading-snug">
            <span className="font-bold">Prep Time:</span> {prepTime} minutes
          </p>
          <p className="leading-snug">
            <span className="font-bold">Instructions:</span> {instructions}
          </p>
          <p className="leading-snug">
            <span className="font-bold">Category:</span> {category}
          </p>

          {Array.isArray(categories) && categories.length > 0 && (
            <div className="mt-2">
              <p className="font-bold mb-1">Categories:</p>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat, index) => (
                  <span
                    key={index}
                    className="badge badge-outline badge-primary"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-2 mt-4">
            <Link to={`/update-recipes/${_id}`} className="btn btn-outline btn-primary">Update</Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-outline btn-error"
            >
              Delete
            </button>
            <button className="btn btn-outline btn-secondary">Like</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyRecipeCard;
