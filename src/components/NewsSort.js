import React from 'react';

const NewsSort = ({changeSort}) => {

    const handleChange = (event) => {
        const chosenSort = event.target.value;
        changeSort(chosenSort)
    }

    return (
        <>
            <p>Sort By:</p>
            <select defaultValue = '' onChange = {handleChange}>
                <option value='3'>None</option>
                <option value="0">Title</option>
                <option value="1">Score</option>
                <option value="2">Date</option>
            </select>
        </>
    )
}

export default NewsSort