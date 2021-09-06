import React from 'react';
import {Link,Route} from 'react-router-dom';
import Logo from '../../Assets/Logo.svg';
import './showflix.css';
import Navbar from '../../Component/NavBar/Navbar';
import Home from '../../Component/Home/home';
import Movie from '../../Component/Movie/Movie';
import Movi from '../../Component/Movi/movi';

const Showflix = () => {
    return(
        <>
            <div className='showflix'>
                <div className='left-view'>
                <Navbar/>
                </div>
                <div className='right-view'>

                <Link to='/' className='Log'>
                <img src={Logo} alt='Logo'/>
                </Link>

                    <h2>
                        Explore
                    </h2>
                    <Route exact path = '/' component={Home} />
                    <Route exact path = '/movie/:id' component={Movie} />
                    <Route exact path = '/movi/:id' component={Movi} />

                </div>
            </div>
        </>
    );
}


export default Showflix;