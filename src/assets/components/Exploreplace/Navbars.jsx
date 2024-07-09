import React from 'react';
import { Link } from 'react-router-dom';


const Navbars = () => {
    return (     
          
            <nav className="navbars " style={{ color: 'black' }}>
                <Link to='/beach' style={{ color: 'black' }}>Beach</Link>
                <Link to='/mountain' style={{ color: 'black' }}>Mountain</Link>
                <Link to='/waterfall' style={{ color: 'black' }}>Waterfall</Link>
                <Link to='/icebergs' style={{ color: 'black' }}>Icebergs</Link>
               <Link to='/' style={{ color: 'orange' }}>View All</Link>            
               
            </nav>
            
    );
};

export default Navbars;