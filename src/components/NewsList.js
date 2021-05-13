import React from 'react';
import NewsItem from './NewsItem';
import './NewsList.css';



const NewsList = ({stories}) => {

    const storyNodes = stories.map((story, index) => {
        return <NewsItem story={story} key={index} />
    });
    
    return (
        <>
        <h2 className='latest-news'>
            Latest News
        </h2>
        <div className="news-list">
            {storyNodes}
        </div>
        </>
    );
};

export default NewsList;