import React from 'react';
import { useLoaderData } from 'react-router';

const UpdateRecipe = () => {

    const data = useLoaderData();

    console.log(data);

    return (
        <form  className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
      {/* Image URL */}
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
        <label className="label">Image URL</label>
        <input
          type="text"
          name="photo"
          className="input w-full"
          placeholder="Image URL"
          required
        />
      </fieldset>

      {/* Title */}
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
        <label className="label">Title</label>
        <input
          type="text"
          name="title"
          className="input w-full"
          placeholder="Recipe Title"
          required
        />
      </fieldset>

      {/* Ingredients */}
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
        <label className="label">Ingredients</label>
        <textarea
          name="ingredients"
          className="textarea w-full"
          placeholder="List ingredients separated by commas"
          required
        ></textarea>
      </fieldset>

      {/* Instructions */}
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
        <label className="label">Instructions</label>
        <textarea
          name="instructions"
          className="textarea w-full"
          placeholder="Enter cooking instructions"
          required
        ></textarea>
      </fieldset>

      {/* Cuisine Type */}
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
        <label className="label">Cuisine Type</label>
        <select
          name="cuisineType"
          className="select select-bordered w-full"
          required
        >
          <option value="">Select Cuisine Type</option>
          <option value="Italian">Italian</option>
          <option value="Bangladeshi">Bangladeshi</option>
          <option value="Mexican">Mexican</option>
          <option value="Indian">Indian</option>
          <option value="Chinese">Chinese</option>
        </select>
      </fieldset>

      {/* Preparation Time */}
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
        <label className="label">Preparation Time (minutes)</label>
        <input
          type="number"
          name="prepTime"
          className="input w-full"
          placeholder="Preparation Time"
          min="1"
          required
        />
      </fieldset>

      {/* Categories */}
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 md:col-span-2">
        <label className="label">Categories</label>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {["Breakfast", "Lunch", "Dinner", "Dessert", "Vegan"].map((category) => (
            <div key={category} className="flex items-center gap-2">
              <input
                type="checkbox"
                name="category"
                id={category.toLowerCase()}
                value={category}
                className="checkbox checkbox-primary"
              />
              <label htmlFor={category.toLowerCase()} className="cursor-pointer">
                {category}
              </label>
            </div>
          ))}
        </div>
      </fieldset>

      <div className="md:col-span-2">
        <button type="submit" className="btn btn-primary w-full">
          Update Recipe
        </button>
      </div>
    </form>
    );
};

export default UpdateRecipe;