import React, { createContext, useState, useContext } from 'react';

import Axios from 'axios';

const RecipesContext = createContext();

export default function RecipesProvider({ children }) {

    // const contextData = useContext(RecipesContext);
    // console.log(contextData);

    const [query, setQuery] = useState("");
    const [recipe, setRecipe] = useState("");

    const url = `https://api.edamam.com/search?q=${query}&app_id=40397336&app_key=4a94758e236039d6dc365a1f6f342eef&from=0&to=3&calories=591-722&health=alcohol-free`;

    const getData = async () => {
        const result = await Axios.get(url);

        setRecipe(result);
        // console.log(result);
        setQuery("");
    }

    return (
        <RecipesContext.Provider value={{
            query,
            setQuery,
            recipe,
            setRecipe,
            getData
        }}>
            {children}
        </RecipesContext.Provider>
    );
}

export function useRecipes() {
    const context = useContext(RecipesContext);
    if (!context) throw new Error("useCount must be used within a CountProvider");
    const { query, setQuery, recipe, setRecipe, getData } = context;
    return { query, setQuery, recipe, setRecipe, getData };
  }
  