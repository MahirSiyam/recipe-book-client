import React from "react";

const RecipeCard = ({ recipe }) => {
  const { photo, title } = recipe;

  return (
    <div className="card card-side bg-base-100 shadow-sm border-2 border-gray-100">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
