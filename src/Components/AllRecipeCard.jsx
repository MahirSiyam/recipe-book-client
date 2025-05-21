import React from 'react';
import { Link } from 'react-router';

const AllRecipeCard = ({recipe}) => {
      const { _id , photo, title, ingredients, cuisineType, prepTime } = recipe;
    return (
        <div>
            <div className=" p-4 shadow-md border-2 border-gray-100 rounded-xl">
	<div className="flex justify-between pb-4 border-bottom">
	</div>
	<div className="space-y-4">
		<div className="space-y-2">
			<img src={photo} alt="" className="block object-cover object-center w-full rounded-md h-70 " />
		</div>
		<div>
      <div className="space-y-3">
			<a rel="noopener noreferrer" href="#" className="block">
				<h3 className="text-xl font-semibold ">{title}</h3>
			</a>
			<p className="leading-snug font-semibold">Ingredients: {ingredients}</p>
			<p className="leading-snug font-semibold">CuisineType: {cuisineType}</p>
			<p className="leading-snug font-semibold">PrepTime: {prepTime}</p>
		</div>
    <div className="flex justify-between mt-3">
      <Link to={`/recipe-details/${_id}`} className="btn">More Details</Link>
    </div>
    </div>
	</div>
</div>
        </div>
    );
};

export default AllRecipeCard;