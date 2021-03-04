import React from 'react';
import styles from '../styles/components/RecipesList.module.css';
import { useRecipes } from "../contexts/RecipesContext";

export function RecipesList() {
    const { recipes } = useRecipes();

    console.log(recipes);

    return (
        <div
            className={styles.recipesContainer}
        >
            <div className={styles.cardsList}>
                {recipes ? (

                    recipes.map(recipes => (
                        <div className={styles.recipeCard}>
                            <div key={recipes.calories}>
                                <img src={recipes.recipe.image} alt="recipe image" />
                                <p>{recipes.recipe.label}</p>
                                <div className={styles.cardInfo}>

                                    {recipes.recipe.mealType ? (
                                        <div className={styles.mealType}>{recipes.recipe.mealType}</div>
                                    ) : (
                                            <span></span>
                                        )}


                                    <a href={recipes.recipe.url}>See Recipe</a>
                                </div>
                            </div>
                        </div>
                    ))

                ) : (
                        <div className={styles.noResults}>
                            <img src="cookinghat.png" alt="cookinghat" />
                        </div>
                    )}
            </div>
        </div>
    )
}
