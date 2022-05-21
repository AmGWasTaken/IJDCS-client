import { Link } from '@mui/material';
import React from 'react';

const Papers = ({ paper, onClick }) => {

    const { title, authors } = paper;
    const authorNames = authors.map(author => author.name);
    const length = authorNames.length;
    const id = paper._id;
    return (

        <>

            { paper ?
                <li onClick={onClick} key={id}><h2>{title}</h2>
                    {authorNames.map((author, index) => {
                        return (<h1 key={author}>{author}{index === length - 1 ? null : '، '}</h1>);
                    })}

                </li>
                :
                null}
        </>
    );

}


export default Papers;