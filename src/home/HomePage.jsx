import React, { useState, useEffect, useRef } from 'react';
import '../css/homepage.css'
import PaperDetails from './PaperDetails';
import Papers from './Papers';
import IndexSidebar from '../home/sidebars/IndexSidebar';
import { Button } from '@mui/material';
import axios from 'axios';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Footer from '../home/Footer';
const instance = axios.create({
    baseURL: 'http://127.0.0.1:4000'
});

const HomePage = () => {
    const papers = [];
    const [paperValue, setPaperValue] = useState(papers);
    const [anchorEl, setAnchorEl] = useState(null);
    const [paperDetails, setPaperDetails] = useState('');
    const open = Boolean(anchorEl);
    async function getByNumber(number) {
        const papers = [];
        const response = await instance({
            'method': 'POST',
            'url': '/api/papers/getByNumber',
            'data': {
                'number': number
            }

        });

        response.data.map((paper) => {

            papers.push(paper)

        });
        setPaperValue(papers);

    }

    const showThisPaper = (paper) => {
        setPaperDetails(paper);

        window.scrollTo({
            top: 750,
            behavior: 'smooth'
        });
    }
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);

    };
    const handleClose = (event) => {
        setAnchorEl(null);
        getByNumber(event.target.value);
    };
    return (

        <div className="home-page">

            <div className='right-side'><IndexSidebar /></div>
            <div className='main'>
                <div className="paper-menu">
                    <Button sx={{
                        backgroundColor: '#745393',
                        color: ' #F7F7FF',
                        borderRadius: 0,
                        fontWeight: 800,
                        fontSize: '1rem',
                        '&:hover': {
                            backgroundColor: ' #F7F7FF',
                            color: '#745393',
                            outline: '1px solid rgba(41, 41, 41, 0.21)'
                        }

                    }} onClick={(e) => getByNumber(6)} >
                        ???????????? ????????</Button>
                    <Button
                        id="basic-button"
                        sx={{
                            backgroundColor: '#745393',
                            color: ' #F7F7FF',
                            borderRadius: 0,
                            fontWeight: 800,
                            fontSize: '1rem',
                            '&:hover': {
                                backgroundColor: ' #F7F7FF',
                                color: '#745393',
                                outline: '1px solid rgba(41, 41, 41, 0.21)'
                            }

                        }} onClick={handleClick} > ?????? ????????????</Button>

                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose} value={1}>?????????? 1</MenuItem>
                        <MenuItem onClick={handleClose} value={2}>?????????? 2</MenuItem>
                        <MenuItem onClick={handleClose} value={3}>?????????? 3</MenuItem>
                        <MenuItem onClick={handleClose} value={4}>?????????? 4</MenuItem>
                        <MenuItem onClick={handleClose} value={5}>?????????? 5</MenuItem>
                        <MenuItem onClick={handleClose} value={6}>?????????? 6</MenuItem>
                    </Menu>

                    <Button sx={{
                        backgroundColor: '#745393',
                        color: ' #F7F7FF',
                        borderRadius: 0,
                        fontWeight: 800,
                        fontSize: '1rem',
                        '&:hover': {
                            backgroundColor: ' #F7F7FF',
                            color: '#745393',
                            outline: '1px solid rgba(41, 41, 41, 0.21)'
                        }



                    }} onClick={e => setPaperValue('')}>???????????? ??????????</Button>
                </div>
                <div className="paper-menu-items">
                    <ul>
                        {paperValue ? paperValue.map(paper => <Papers onClick={(e) => showThisPaper(paper)} key={paper._id} paper={paper} />) : null}
                    </ul>
                </div>
                <PaperDetails id="details" paper={paperDetails} />
            </div>

            <div className='left-side'>left</div>
            <Footer />
        </div >

    );
}

export default HomePage;