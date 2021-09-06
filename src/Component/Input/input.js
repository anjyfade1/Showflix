import React,{Component} from 'react';
import {connect} from 'react-redux';
import './input.css';
import Button from '../../UI/Button/button';
import {searchMovie,fetchMovie,setLoading} from '../../Actions/search';


class Input extends Component {
    
    onChange = e => {
        this.props.searchMovie(e.target.value);
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.fetchMovie(this.props.text);
        this.props.setLoading();
        // console.log(this.onSubmit);
    };

    
    render(){
        return(
        <>
        <div >

            <form className='explore' onSubmit = {this.onSubmit}>
                <input 
                className='input' 
                 placeholder='Search'   
                 type='text'
                 onChange = {this.onChange}
                />
        
                <Button   name = 'Search' />

            </form>
        </div>
            
        </>

        );
    }
}


  
   const mapStateToProps = state => ({
       text: state.movies.text
   }); 

export default connect(mapStateToProps, {searchMovie,fetchMovie,setLoading} )(Input);