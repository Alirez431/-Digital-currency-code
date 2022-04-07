import React from 'react';
//gif
import spinner from '../gif/Spinner-1.1s-204px.svg'

const Loader = () => {
    return (
        <div>
            <img src={spinner} alt="Loading" />
            <h1>Loading...</h1>
        </div>
    );
};

export default Loader;