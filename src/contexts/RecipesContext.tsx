import React, { createContext, useState } from 'react';

export const RecipesContext = createContext();

export default function RecipesProvider({ children }) {
    return (
        <RecipesContext.Provider value={'teste'}>
            {children}
        </RecipesContext.Provider>
    )
}