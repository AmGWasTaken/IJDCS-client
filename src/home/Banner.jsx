import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom'
import '../css/banner.css'
import bannerImg from '../img/bannertop.png';
import ijdcsLogo from '../img/ijdcs-logo.png';
import isiLogo from '../img/isi-logo.png';

const Banner = ({ name }) => {
    return (

        <div className="banner">
            <div className="top">
                <div className="left">
                    <img className="logo" src={isiLogo} alt="" />
                    <img className="logo" src={ijdcsLogo} alt="" />
                </div>


            </div>
            <img src={bannerImg} alt="IJDCS Banner" className="banner-img" />
        </div>

    );
}

export default Banner;