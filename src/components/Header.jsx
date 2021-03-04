import React from 'react';
import styles from '../styles/components/Header.module.css';
import { useRecipes } from "../contexts/RecipesContext";

export function Header() {
    const { query, setQuery, getData } = useRecipes();

    const onChange = (e) => {
        setQuery(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        getData();
    }

    return (
        <div className={styles.headerContainer}>
            <h1>that.meal</h1>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Search here"
                    onChange={onChange}
                    value={query}
                />
                <button
                    type="submit"
                    value="search"
                >
                    <img src="icons/search.svg" alt="Pesquisar"></img>
                </button>
            </form>
        </div>
    )
}