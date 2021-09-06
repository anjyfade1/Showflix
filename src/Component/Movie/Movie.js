import React,{Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMovi, setLoading } from '../../Actions/search';
import WatchButton from '../../UI/WatchButton/watchButton';
import {BiArrowBack} from 'react-icons/bi'; 
import './Movie.css';
import Spinner from '../../UI/Spinner/spinner';



class Movie extends Component {
    
    componentDidMount() {
        this.props.fetchMovi(this.props.match.params.id);
        this.props.setLoading();
    }

    
    render(){

        const {loading, movie} = this.props;

        let movieInfo = (

                <div className = 'movi'>
                    <Link to='/' className = 'arrow'>
                    <BiArrowBack/>
                    </Link>
                    <div className = 'movi-image' >
                        <img src={movie.Poster} alt={movie.Title} />
                    </div>
                    <h2>{movie.Title}</h2>
                    <p>{movie.Plot}</p>

                    <Link  to = {'/movi/' + movie.imdbID}>
                    
                    <WatchButton name = 'Watch'/>
                    </Link>
                        
                </div>
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
    loading: state.movies.loading
});


export default connect(mapStateToProps, {fetchMovi,setLoading})(Movie); 