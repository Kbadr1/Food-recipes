import React, { useState, useEffect } from 'react';
import axios from "axios";
import SearchForm from "./components/SearchForm";
import Recipes from "./components/Recipe";
import './App.css';

function App() {
    const [recipeName, setRecipeName] = useState("noodles");
    const [search, setSearch] = useState("");
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        if (recipeName === "") return;
        getRecipe();
    }, [recipeName]);

    const getRecipe = () => {
        axios.get(`https://api.edamam.com/search?q=${recipeName}&app_id=f466e26e&app_key=aeb50f5952d2078033b4cf6a13f91d11&from=0&to=30&calories=591-722&health=alcohol-free`)
            .then(res => {
                setRecipes(res.data.hits)
            })
    }

    const updateSearch = e => {
        setSearch(e.target.value);
    }

    const getSearchResult = e => {
        e.preventDefault();
        setRecipeName(search);
        setSearch("");
    }

    return (
        <div className="App">
            <div className="container">
                <SearchForm getSearchResult={getSearchResult} search={search} updateSearch={updateSearch} />
                <div className="recipes row">
                    {recipes.map(recipe => <Recipes recipe={recipe} key={Math.random()} />)}
                </div>
            </div>
        </div>
    );
}

export default App;
