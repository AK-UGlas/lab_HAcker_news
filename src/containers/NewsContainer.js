import React, {useEffect, useState} from 'react';
import NewsList from '../components/NewsList';
import NewsSearch from '../components/NewsSearch';
import NewsSort from '../components/NewsSort';

const NewsContainer = () => {

    const [topStories, setTopStories] = useState([]);
    const [filteredStories, setFilteredStories] = useState([])
    const [filterOn, setFilter] = useState(false)

    useEffect(() => {
        getStoryID();
    }, [topStories]);

    const getStoryID = () => {
        fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
        .then(res => res.json())
        .then(stories => stories.slice(0, 20))
        .then(filtered => getFullStory(filtered));
    };

    const searchedNews = function(searchTerm) {
        setFilter(true);
        const stories = topStories.filter(story => story.title.toLowerCase().includes(searchTerm.toLowerCase())) 
        setFilteredStories(stories)
    };

    const changeSort = function (chosenSort) {
        const stories = topStories;
        if (chosenSort === '0') {
            function compare(a, b) {
                const titleA = a.title.toUpperCase();
                const titleB = b.title.toUpperCase();
                let comparison = 0;
                if (titleA > titleB) {
                    comparison = 1;
                } else if (titleA < titleB) {
                    comparison = -1;
                }
                return comparison;
            }
            stories.sort(compare);
        } else if (chosenSort === '1') {
            //Score
            function compare(a, b) {
                const scoreA = a.score
                const scoreB = b.score
                let comparison = 0;
                if (scoreA > scoreB) {
                    comparison = -1;
                } else if (scoreA < scoreB) {
                    comparison = 1;
                }
                return comparison;
            }
            stories.sort(compare);
        } else if (chosenSort === '2' ) {
            //Date
            function compare(a, b) {
                const dateA = a.time
                const dateB = b.time
                let comparison = 0;
                if (dateA > dateB) {
                    comparison = -1;
                } else if (dateA < dateB) {
                    comparison = 1;
                }
                return comparison;
            }
            stories.sort(compare);
        }
        setFilter(true)
        setFilteredStories(stories)

    };

    //mapping functions
    const getFullStory = (storyIDArray) => {
        const stories = storyIDArray.map(storyID => {
            return fetch(`https://hacker-news.firebaseio.com/v0/item/${storyID}.json`)
        });
        Promise.all(stories)
        .then(responses => Promise.all(responses.map( response => response.json())))
        .then(storyData => setTopStories(storyData))
    };

    const pushStories = filterOn ? filteredStories : topStories;

    return (
        <>
        <NewsSearch searchedNews = {searchedNews} />
        <NewsSort changeSort = {changeSort}/>
        <NewsList stories={pushStories}/>
        </>
    )

}


export default NewsContainer;