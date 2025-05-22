import React, { useState } from "react";

const UpdateRecipe = ({ recipe, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({ ...recipe });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Handle category arrays as comma-separated input
    if (name === "categories") {
      setFormData((prev) => ({
        ...prev,
        [name]: value.split(",").map((item) => item.trim()),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl max-w-lg w-full">
        <h2 className="text-xl font-bold mb-4">Update Recipe</h2>
        <form onSubmit={handleFormSubmit} className="space-y-3">

          <label className="form-control">
            <span className="label-text">Title</span>
            <input type="text" name="title" value={formData.title} onChange={handleChange} className="input input-bordered w-full" />
          </label>

          <label className="form-control">
            <span className="label-text">Photo URL</span>
            <input type="text" name="photo" value={formData.photo} onChange={handleChange} className="input input-bordered w-full" />
          </label>

          <label className="form-control">
            <span className="label-text">Ingredients</span>
            <input type="text" name="ingredients" value={formData.ingredients} onChange={handleChange} className="input input-bordered w-full" />
          </label>

          <label className="form-control">
            <span className="label-text">Instructions</span>
            <input type="text" name="instructions" value={formData.instructions} onChange={handleChange} className="input input-bordered w-full" />
          </label>

          <label className="form-control">
            <span className="label-text">Cuisine Type</span>
            <input type="text" name="cuisineType" value={formData.cuisineType} onChange={handleChange} className="input input-bordered w-full" />
          </label>

          <label className="form-control">
            <span className="label-text">Prep Time (minutes)</span>
            <input type="number" name="prepTime" value={formData.prepTime} onChange={handleChange} className="input input-bordered w-full" />
          </label>

          <label className="form-control">
            <span className="label-text">Category</span>
            <input type="text" name="category" value={formData.category} onChange={handleChange} className="input input-bordered w-full" />
          </label>

          <label className="form-control">
            <span className="label-text">Categories (comma-separated)</span>
            <input
              type="text"
              name="categories"
              value={Array.isArray(formData.categories) ? formData.categories.join(", ") : ""}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </label>

          <div className="flex gap-2 mt-4">
            <button type="submit" className="btn btn-primary">Save</button>
            <button type="button" onClick={onClose} className="btn btn-ghost">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateRecipe;
