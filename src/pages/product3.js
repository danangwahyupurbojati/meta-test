import React from 'react';
import { Helmet } from 'react-helmet-async';

const Product3 = () => {
    const location = window.location.href;
    return (
        <div>
            <Helmet>
                <title>Product 3</title>
                <meta name="title" content="Product 3 Bakso" />
                <meta name="description" content="Bakso atau baso adalah jenis bola daging yang lazim ditemukan pada masakan Indonesia "/>

                <meta property="og:type" content="website" />
                <meta property="og:url" content={location} />
                <meta property="og:title" content="Product 3 Bakso" />
                <meta property="og:description" content="Bakso atau baso adalah jenis bola daging yang lazim ditemukan pada masakan Indonesia " />
                <meta property="og:image" content="https://upload.wikimedia.org/wikipedia/commons/1/14/Bakso_ayam.jpg" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={location}/>
                <meta property="twitter:title" content="Product 3 Bakso"/>
                <meta property="twitter:description" content="Bakso atau baso adalah jenis bola daging yang lazim ditemukan pada masakan Indonesia "/>
                <meta property="twitter:image" content="https://upload.wikimedia.org/wikipedia/commons/1/14/Bakso_ayam.jpg" />
            </Helmet>
            <h1>product 3 Bakso</h1>
            <p>
                Bakso atau baso adalah jenis bola daging yang lazim ditemukan pada masakan Indonesia
            </p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/14/Bakso_ayam.jpg" alt="bakso" />
        </div>
    );
};

export default Product3;