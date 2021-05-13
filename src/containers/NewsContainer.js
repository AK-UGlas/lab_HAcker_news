import React, {useEffect, useState} from 'react';
import NewsList from '../components/NewsList'

const NewsContainer = () => {

    const [topStories, setTopStories] = useState([]);

    useEffect(() => {
        getStoryID();
    }, []);

    const getStoryID = () => {
        fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
        .then(res => res.json())
        .then(stories => stories.slice(0, 20))
        .then(filtered => getFullStory(filtered));
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

    return (
        <>
        <h2>This is the NewsContainer</h2>
            <NewsList stories={topStories}/>
        </>
    )

}


export default NewsContainer;