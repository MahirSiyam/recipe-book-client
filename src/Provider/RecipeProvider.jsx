import React, { createContext } from 'react';
import { useLoaderData } from 'react-router';

export const RecipeContext = createContext();

const RecipeProvider = ({children}) => {

    const recipes = useLoaderData();

    const recipeAPI = {
recipes
    }


    return <RecipeContext value={recipeAPI}>
{children}
    </RecipeContext>
};

export default RecipeProvider;