import React from 'react';
import { Helmet } from 'react-helmet-async';

const Product2 = () => {
    const location = window.location.href;
    return (
        <div>
            <Helmet>
                <title>Product 2</title>
                
                <meta name="title" content="Product 2 Mie Ayam" />
                <meta name="description" content="Mi ayam, mie ayam atau bakmi ayam adalah hidangan Indonesia yang terbuat dari mie "/>

                <meta property="og:type" content="website" />
                <meta property="og:url" content={location} />
                <meta property="og:title" content="Product 2 Mie Ayam" />
                <meta property="og:description" content="Mi ayam, mie ayam atau bakmi ayam adalah hidangan Indonesia yang terbuat dari mie " />
                <meta name="og:image" content="https://cdn.okemom.com/wp-content/uploads/2021/05/17131641/Desain-tanpa-judul-2021-05-10T135131.448.jpg" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={location}/>
                <meta property="twitter:title" content="Product 2 Mie Ayam"/>
                <meta property="twitter:description" content="Mi ayam, mie ayam atau bakmi ayam adalah hidangan Indonesia yang terbuat dari mie "/>
                <meta name="twitter:image" content="https://cdn.okemom.com/wp-content/uploads/2021/05/17131641/Desain-tanpa-judul-2021-05-10T135131.448.jpg" />

            </Helmet>
            <h1>product 2</h1>
            <p>
                Mi ayam, mie ayam atau bakmi ayam adalah hidangan Indonesia yang terbuat dari mie
            </p>
            <img src="https://cdn.okemom.com/wp-content/uploads/2021/05/17131641/Desain-tanpa-judul-2021-05-10T135131.448.jpg" alt="mie" />
        </div>
    );
};

export default Product2;