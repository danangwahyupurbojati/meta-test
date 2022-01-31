import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <Link style={{ margin: '16px' }} to="/">Home</Link>
            <Link style={{ margin: '16px' }} to="product1">Product 1</Link>
            <Link style={{ margin: '16px' }} to="product2">Product 2</Link>
            <Link style={{ margin: '16px' }} to="product3">Product 3</Link>
        </div>
    );
};

export default Navbar;
