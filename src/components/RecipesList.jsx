import React from 'react';
import styles from '../styles/components/RecipesList.module.css';
import { useRecipes } from "../contexts/RecipesContext";

export function RecipesList() {
    const { recipes } = useRecipes();

    console.log(recipes);
  
    return (
        <div>
            { recipes ? (
                
                <h1> { recipes.data.hits[0].recipe.label } </h1>

            ) : (
                <h1>Nenhum resultado disponível</h1>
            )}

        </div>
    )
}
