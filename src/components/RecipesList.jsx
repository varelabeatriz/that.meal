import React from 'react';
import styles from '../styles/components/RecipesList.module.css';
import { useRecipes } from "../contexts/RecipesContext";

export function RecipesList() {
    const { recipes } = useRecipes();

    console.log(recipes);

    // if ( recipes != undefined | recipes != null) {

    // }

    return (
        <div className={styles.recipesListContainer}>
            { recipes ? (

                recipes.map((recipes) => (
                    <div className={styles.recipeCard}>
                        <h1>{recipes.recipe.label}</h1>
                        <img src={recipes.recipe.image} alt="recipe image" />
                    </div>
                ))

            ) : (
                    <h1>Nenhum resultado disponível</h1>
                )}

        </div>
    )
}
