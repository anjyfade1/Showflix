import React from 'react';
import './watchButton.css'

const watchButton = (props) => {
    return(
        <>
            
                <button type = 'submit' className="Wbutton"  >
                {props.name}
                </button>
            
        </>
    );
}

export default watchButton;