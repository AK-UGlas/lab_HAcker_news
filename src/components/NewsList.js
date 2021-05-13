import React from 'react';
import NewsItem from './NewsItem';



const NewsList = ({stories}) => {

    const storyNodes = stories.map((story, index) => {
        return <NewsItem story={story} key={index} />
    });
    
    return (
        <>
        <h3>
            This is the news list
        </h3>
            {storyNodes}
        </>
    );
};

export default NewsList;