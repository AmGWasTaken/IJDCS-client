import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css'
import Modal from '@mui/material/Modal';
import ToggleButton from '../auth/ToggleButton';

const Navbar = ({ loggedIn }) => {
    const [open, setOpen] = useState(false);
    const handleClose = (e) => {
        setOpen(false);
    };
    const handleToggle = (e) => {
        e.preventDefault();
        setOpen(!open);
    };

    return (
        <>
            <div className='navbar'>
                <Link to='/' className='navitem'>صفحه اصلی</Link>
                <Link to='/' className='navitem'>درباره ما</Link>
                <Link to='/' className='navitem'>اعضای هیئت تحریریه</Link>
                <Link to='/' className='navitem'>ارسال مقاله</Link>
                {loggedIn ? null : <Link to='/' onClick={handleToggle} className='navitem'>ورود</Link>}


            </div >

            <Modal
                hideBackdrop
                disableScrollLock
                onDoubleClick={handleClose}
                sx={{
                    bgcolor: '#272d2daf'

                }}
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <>

                    <ToggleButton />
                </>
            </Modal>
        </>
    );
}

export default Navbar;

