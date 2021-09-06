import React,{Component} from 'react';
import './movi.css';
import { connect } from 'react-redux';
import Spinner from '../../UI/Spinner/spinner';
import { fetchMovi, setLoading } from '../../Actions/search';
import WatchButton from '../../UI/WatchButton/watchButton';
import {BiTimeFive} from 'react-icons/bi';
import {AiOutlineStar} from 'react-icons/ai';
import {BsPlay} from 'react-icons/bs';
import MovieCard from '../MovieContainer/MovieCard/MovieCard';

class Movi extends Component {
    
    componentDidMount() {
        this.props.fetchMovi(this.props.match.params.id);
        this.props.setLoading();
    }

    
    render(){

        const {loading, movie, movies} = this.props;

          let cont = '';

        cont = movies.Response === 'True' ? movies.Search.map((movie, index) => <MovieCard  key = {index}  movie = {movie} /> ) : console.log("Nothing!");   

        let movieInfo = (
            <>
                <div className = 'mov'>
                    
                    <div className = 'mov-image' >
                        <img src={movie.Poster} alt={movie.Title} />
                    </div>
                    <div className='mov-details'>
                    <h2>{movie.Title}</h2>
                    <p className='plot'>{movie.Plot}</p>
                    <div className='mov-icons'>
                        <p>
                            <div className='ico'>
                            <BiTimeFive/>
                            </div> 
                            <p className='rate'>
                            {movie.Released}

                            </p>
                        </p>
                        <p>
                            <div className='ico'>
                            <AiOutlineStar/>
                            </div>
                            <p className='rate'>
                            {movie.imdbRating}

                            </p>
                        </p>
                        <p>
                            <div className='ico'>
                            <BsPlay/>
                            </div>
                            <p className='rate'>
                            {movie.Runtime}

                            </p>
                        </p>
                    </div>
                    <div className='watch'>
                    <WatchButton name = 'Watch'/>
                    </div>
                    </div>

                             
                </div>

                    <div className='similar'>
                        <h2>Similar Movies</h2>
                        <div className='cont'>

                        {cont}
                        </div>
                        
                    </div>
            </>    
        );

        let content = loading ? <Spinner/> : movieInfo;

      

        return(
            <>
            {content}
            </>
        );
    }
};

const mapStateToProps = state => ({
    movie: state.movies.movie,
    loading: state.movies.loading,
    movies : state.movies.movies
});


export default connect(mapStateToProps, {fetchMovi,setLoading})(Movi); 