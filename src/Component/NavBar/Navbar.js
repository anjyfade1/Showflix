import React from 'react';
import './Navbar.css';
import Logo from '../../Assets/Logo.svg';
import {Link} from 'react-router-dom';
import {FiSearch} from 'react-icons/fi';
import {AiOutlineHeart} from 'react-icons/ai';

const Navbar =()=>{
    return(
        <>
        <div className='Navbar'>
            <Link to='/' className='Logo'>
                <img src={Logo} alt='Logo'/>
            </Link>
            <div className='nav-info'>
                <div className='search'>
                    <p className ='search-icon'>
                    <FiSearch/>   
                    </p>   
                    <p className = 'search-wrd'>
                    Search
                    </p>   
                </div>
                <div className='heart'>
                    <p className='heart-icon'>
                        <AiOutlineHeart/>
                    </p> 
                    <p className='heart-wrd'>
                        Watchlist
                    </p>
                </div>
            </div>
        </div>
        </>
    );
}


export default Navbar;
