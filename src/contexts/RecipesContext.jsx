import React, { createContext, useState, useContext } from 'react';

import Axios from 'axios';

const RecipesContext = createContext();

export default function RecipesProvider({ children }) {

    const [query, setQuery] = useState("pizza");
    const [recipes, setRecipes] = useState("");

    const url = `https://api.edamam.com/search?q=${query}&app_id=40397336&app_key=4a94758e236039d6dc365a1f6f342eef&from=0&to=12`;

    const getData = async () => {
        const result = await Axios.get(url);
        setRecipes(result.data.hits);
        setQuery("");
    }

    return (
        <RecipesContext.Provider value={{
            query,
            setQuery,
            recipes,
            setRecipes,
            getData
        }}>
            {children}
        </RecipesContext.Provider>
    );
}

export function useRecipes() {
    const context = useContext(RecipesContext);
    if (!context) throw new Error("useCount must be used within a CountProvider");
    const { query, setQuery, recipes, setRecipes, getData } = context;
    return { query, setQuery, recipes, setRecipes, getData };
  }
  