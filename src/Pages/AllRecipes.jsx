import React from 'react';
import RecipeCard from '../Components/RecipeCard';
import { RecipeContext } from '../Provider/RecipeProvider';
import { use } from 'react';

const AllRecipes = () => {

    const {recipes} = use(RecipeContext)

    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-5 p-5'>
            {
                recipes.map(recipe => <RecipeCard recipe = {recipe}></RecipeCard>)
            }
        </div>
    );
};

export default AllRecipes;