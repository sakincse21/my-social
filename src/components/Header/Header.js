import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Header.css';

const Header = () => {
    
    return (
        <div style={{margin: '10px',paddingTop:'5px', paddingBottom:'20px'}} className='d-flex justify-content-between align-items-baseline'>
            <a href="/"><h1>Sakin Blog</h1></a>
            <a href="/about"><p>About</p></a>
        </div>
    );
};

export default Header;