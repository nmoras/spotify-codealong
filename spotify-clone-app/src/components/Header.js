import React from 'react'
import './Header.css';
import { Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className='header'>
            <div className='header_left'>
                <SearchIcon />
                <input 
                    placeholder="Search for Artists, Songs"
                    type="text"
                />
            </div>
            <div className='header_right'>
                <Avatar src="" alt="RQ" />
                <h4></h4>
            </div>
        </div>
    )
}

export default Header
