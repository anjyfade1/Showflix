import React,{Component} from 'react';

import { connect } from 'react-redux';  
import './MovieContainer.css';
import MovieCard from './MovieCard/MovieCard';



class MovieContainer extends Component {
    
    render(){

        const {movies} = this.props;
        console.log(this.props);

        let content = '';

        content = movies.Response === 'True' ? movies.Search.map((movie, index) => <MovieCard  key = {index}  movie = {movie} /> ) : console.log("Nothing!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        
        
        
        return(
            <div className = 'container'>
                {content}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    movies : state.movies.movies
});

export default connect(mapStateToProps)(MovieContainer);