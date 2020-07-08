import React from 'react'

const SearchForm = ({ search, updateSearch, getSearchResult }) => {
    return (
        <div className="search-form">
            <form onSubmit={getSearchResult}>
                <input type="text" placeholder="Recipe name" value={search} onChange={updateSearch}/>
                <button type="submit">Search</button>
            </form>
        </div>
    );
}
 
export default SearchForm;