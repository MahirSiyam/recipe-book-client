import React from 'react';

const MyRecipeCard = ({ recipe }) => {
    const { photo, title, ingredients, instructions, cuisineType, prepTime, category, categories } = recipe;
    
    return (
        <div className="p-4 shadow-md border-2 border-gray-100 rounded-xl">
            <div className="flex justify-between pb-4 border-bottom"></div>
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
                    <p className="leading-snug">Ingredients: {ingredients}</p>
                    <p className="leading-snug">Cuisine Type: {cuisineType}</p>
                    <p className="leading-snug">Prep Time: {prepTime} minutes</p>
                    <p className="leading-snug">Instructions: {instructions}</p>
                    <p className="leading-snug">Category: {category}</p>
                    
                    {/* Mapped Categories Section */}
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
                </div>
                <div className="flex justify-between mt-3">
                    {/* <Link to={`/recipe-details/${_id}`} className="btn">More Details</Link> */}
                </div>
            </div>
        </div>
    );
};

export default MyRecipeCard;