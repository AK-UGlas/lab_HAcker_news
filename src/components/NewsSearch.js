import React from 'react';

const NewsSearch = ({searchedNews}) => {

    const handleSearch = function(event){
        event.preventDefault();
        const searchTerm = event.target.form[0].value
        searchedNews(searchTerm)
    }

    return (
        <div className='news-search'>
        <form>
            <input type ='text' name='search'></input>
            <button type='submit' onClick={handleSearch}>Search News</button>
            </form>
        </div>
    )

}

export default NewsSearch;