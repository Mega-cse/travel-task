import React from 'react';
import './FourBoxes.css'; 

const FourBoxes = () => {
    return (
        <div className="grid-container">
            <div className="box">
                <h2>24+</h2>
                <h4>Cities</h4>
            </div>
            <div className="box">
                <h2>700+</h2>
                 <h4>Place</h4>
            </div>
            <div className="box">
                <h2>200+</h2>
                <h4>Hotel</h4>
            </div>
            <div className="box">
                <h2>2K+</h2>
                <h4>Review</h4>
            </div>
        </div>

        
    );
};

export default FourBoxes;
