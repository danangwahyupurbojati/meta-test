import React from 'react';
import { Helmet } from 'react-helmet-async';

const Product2 = () => {
    return (
        <div>
            <Helmet>
                <title>Product 2</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <h1>product 2</h1>
        </div>
    );
};

export default Product2;