import React, { useRef } from 'react';

const PaperDetails = ({ paper }) => {
    const { title, authors, abstract, keywords, address, corresponding } = paper;

    return (

        <>

            {paper ? <div className="paper-details">
                <h1 className="paper-details-title">{title}</h1>
                <div className="paper-details-authors" >
                    {authors.map((author, index) => {
                        return (
                            <p key={author.name}>{author.name}{index == corresponding ? <sup>{index + 1}*   </sup> : <sup>{index + 1} </sup>}</p>
                        );
                    })}
                    {authors.map((author, index) => {
                        return (

                            <h2 key={author.name}>{index == corresponding ? <sup>{index + 1}*</sup> : <sup>{index + 1}</sup>}{author.affiliation}</h2>

                        );
                    })}

                </div>

                <div className="abstract">
                    <div className="divider"></div>چکیده:
                <p>{abstract}.</p>
                    <div className="divider"></div>
                </div>
                <div className="keywords">کلیدواژه ها:
                     {keywords.map((keyword, index) => {
                    return (
                        <p key={keyword}>{keyword}{index === keywords.length - 1 ? '.' : '، '} </p>

                    );
                })}
                    <div className="divider"></div>
                </div>

            </div> : null}
        </>
    );

}


export default PaperDetails;