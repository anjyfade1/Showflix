import React,{Component} from 'react';
import {Link} from 'react-router-dom'; 
import './MovieCard.css';


class MovieCard extends Component {
    render(){
        
        const {movie} = this.props;

        return(
            <>
                <div className = 'movie-card'> 
                    <Link className = 'image-card' to = {'/movie/' + movie.imdbID} >

                        <img src = {movie.Poster} alt = {movie.Title} />
                        <p className='view'>View</p>
                    </Link>
                </div>
            </>
        );
    }
}

export default MovieCard;
