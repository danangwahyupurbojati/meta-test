import React from 'react';
import { Helmet } from 'react-helmet-async';

const Product3 = () => {
    return (
        <div>
            <Helmet>
                <title>Product 3</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <h1>product 3</h1>
        </div>
    );
};

export default Product3;