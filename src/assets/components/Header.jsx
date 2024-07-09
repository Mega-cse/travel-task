import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    return (
        <div className="header">
            <div className="header-content">
                <div className="header-text">
                    <h1 className='header-title'>
                        <p>Explore</p>
                        <p>Beautiful <FontAwesomeIcon icon={faStar} style={{ fontSize: '0.5em' }} /></p>
                        <p>World!</p>
                    </h1>

                    <div class="search-container">
                        <select class="search-dropdown">
                            <option value="located-by">Located by</option>
                            <option value="newyork">Lakshadweep</option>
                            <option value="goa">Goa</option>
                            <option value="paris">Greenland</option>
                        </select>
                        <input type="date" class="search-input" />
                        <div class="price-dropdown">
                            <select class="search-dropdown">
                                <option value="">Price Range</option>
                                <option value="0-50">$0 - $50</option>
                                <option value="51-100">$51 - $100</option>
                                <option value="101-200">$101 - $200</option>

                            </select>
                        </div>

                        <button type="submit" class="search-button">Search</button>
                    </div>
                </div>




                <div className="header-image">
                    <img
                        src="https://trueme.in/wp-content/uploads/2024/04/Traveller-1.svg"
                        alt="Beautiful World"
                        style={{ width: '600px', height: '600px' }}
                    />
                </div>
            </div>

        </div>

    );
};

export default Header;
