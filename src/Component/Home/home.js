import React,{Component} from 'react';
import { connect } from 'react-redux';
import Input from '../Input/input';
import Spinner from '../../UI/Spinner/spinner';
import MovieContainer from '../MovieContainer/MovieContainer';
import './home.css';


class Home extends Component{

    render(){
        
        const {loading} = this.props; 

        return(
            <div className='home'>
            <Input/>
            {loading ? <Spinner/> : <MovieContainer/>}
            </div>
        );
    }    
}


const mapStateToProps = state => ({
    loading: state.movies.loading
})

export default connect(mapStateToProps)(Home);