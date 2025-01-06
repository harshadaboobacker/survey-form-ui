import React from 'react'
import logo from '../gig.png';

const header = () => {
    return (
        
        <header className='header'> <span><img style={{ width: '80px', maxHeight: '60px',position:'absolute',left:'10px' }} src={logo} alt="Logo" className="gig-png" />

          <h1 className='text-light text-center'> <strong>Survey Form </strong> </h1></span>
        </header>
      );
    };

export default header