import React, { useState } from "react";
import Swal from "sweetalert2";
import UpdateRecipe from "./UpdateRecipe";

const MyRecipeCard = ({ recipe: initialRecipe, onDelete = () => {} }) => {
  const [isDeleted, setIsDeleted] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [recipe, setRecipe] = useState(initialRecipe); 

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
        fetch(`https://recipe-book-server-one.vercel.app/recipes/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setIsDeleted(true);
              onDelete(id);
              Swal.fire("Deleted!", "Your recipe has been deleted.", "success");
            }
          })
          .catch((error) => {
            Swal.fire("Error!", error.message, "error");
          });
      }
    });
  };

  const handleUpdate = (updatedData) => {
    fetch(`https://recipe-book-server-one.vercel.app/recipes/${recipe._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setRecipe(updatedData); 
          Swal.fire("Updated!", "Your recipe has been updated.", "success");
          setShowUpdateModal(false);
        } else {
          Swal.fire("No Change", "No update was made.", "info");
        }
      })
      .catch((error) => {
        Swal.fire("Error!", error.message, "error");
      });
  };

  if (isDeleted) return null;

  const { _id, photo, title, ingredients, instructions, cuisineType, prepTime, category, categories } = recipe;

  return (
    <div className="p-4 shadow-md border-2 border-gray-100 rounded-xl">
      <div className="space-y-4">
        <img src={photo} alt={title} className="w-full h-70 object-cover rounded-md" />
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="line-clamp-3"><strong>Ingredients:</strong> {ingredients}</p>
        <p><strong>Cuisine Type:</strong> {cuisineType}</p>
        <p><strong>Prep Time:</strong> {prepTime} minutes</p>
        <p className="line-clamp-3"><strong>Instructions:</strong> {instructions}</p>
        <p><strong>Category:</strong> {category}</p>

        {Array.isArray(categories) && categories.length > 0 && (
          <div>
            <p className="font-bold mb-1">Categories:</p>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat, index) => (
                <span key={index} className="badge badge-outline badge-primary">{cat}</span>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-2 mt-4">
          <button onClick={() => setShowUpdateModal(true)} className="btn btn-outline btn-primary">Update</button>
          <button onClick={() => handleDelete(_id)} className="btn btn-outline btn-error">Delete</button>
          <button className="btn btn-outline btn-secondary">Like</button>
        </div>
      </div>

      {showUpdateModal && (
        <UpdateRecipe
          recipe={recipe}
          onClose={() => setShowUpdateModal(false)}
          onSubmit={handleUpdate}
        />
      )}
    </div>
  );
};

export default MyRecipeCard;
