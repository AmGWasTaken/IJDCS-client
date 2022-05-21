import React, { useState, useEffect, createContext, useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ToggleButton from './auth/ToggleButton';
import Home from './home/HomePage';
import Banner from './home/Banner';
import Navbar from './home/Navbar';

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    console.log(loggedIn);
    return (

        <BrowserRouter>
            <Banner />
            <Navbar loggedIn={loggedIn} />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/auth" element={<ToggleButton />} />
            </Routes>
        </BrowserRouter>

    );

}
export default App;