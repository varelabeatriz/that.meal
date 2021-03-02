import React from 'react';
import styles from '../styles/components/Header.module.css';
import { useRecipes } from "../contexts/RecipesContext";

export function Header() {
    const { query, setQuery, getData } = useRecipes();

    // const contextData = useContext(RecipesContext);
    // console.log(contextData);

    // const url = `https://api.edamam.com/search?q=${query}&app_id=40397336&app_key=4a94758e236039d6dc365a1f6f342eef&from=0&to=3&calories=591-722&health=alcohol-free`;

    // const getData = async () => {
    //     const result = await Axios.get(url);

    //     console.log(result);
    //     setQuery("");
    // }

    const onChange = (e) => {
        setQuery(e.target.value);
        console.log(query)
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
                    placeholder="Pesquise Aqui"
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