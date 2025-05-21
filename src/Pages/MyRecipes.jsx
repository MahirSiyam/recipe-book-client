import React, { use } from 'react';
import { RecipeContext } from '../Provider/RecipeProvider';
import MyRecipeCard from '../Components/MyRecipeCard';
// import RecipeCard from '../Components/RecipeCard';


const MyRecipes = () => {

    const {recipes} = use(RecipeContext);

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            {
                recipes.map(recipe => <MyRecipeCard recipe = {recipe}></MyRecipeCard>)
            }
        </div>
    );
};

export default MyRecipes;