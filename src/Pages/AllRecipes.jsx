import React from 'react';
// import RecipeCard from '../Components/RecipeCard';
import { RecipeContext } from '../Provider/RecipeProvider';
import { use } from 'react';
import AllRecipeCard from '../Components/AllRecipeCard';

const AllRecipes = () => {

    const {recipes} = use(RecipeContext)

    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-3 p-3'>
            {
                recipes.map(recipe => <AllRecipeCard recipe = {recipe}></AllRecipeCard>)
            }
        </div>
    );
};

export default AllRecipes;