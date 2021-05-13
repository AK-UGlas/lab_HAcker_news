import React from 'react';
import './NewsItem.css'

const NewsItem = ({story}) => {

    const unixTime = story.time * 1000;
    const date = new Date(unixTime).toISOString().split('T')[0];
    
    return (
        <div className="list-item">
            <a href={story.url} target="_blank" rel="noreferrer">
                <div>
                    <h4>{story.title}</h4>
                        <div className="text-items">
                            <p><b>by:</b> {story.by}</p>
                            <p><b>date:</b> {date}</p>
                            <p><b>score:</b> {story.score}</p>
                        </div>
                </div>
            </a> 
        </div>
    );
};

export default NewsItem;