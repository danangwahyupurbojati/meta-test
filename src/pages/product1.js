import React from 'react';
import { Helmet } from 'react-helmet-async';

const Product1 = () => {
    const location = window.location.href;
    return (
        <div>
            <Helmet>
                <title>Product 1 Hamburger</title>
                <meta name="title" content="Product 1 Hamburger" />
                <meta name="description" content="Hamburger adalah sejenis makanan berupa roti berbentuk bundar yang diiris dua dan di tengahnya diisi dengan patty yang biasanya diambil dari daging"/>

                <meta property="og:type" content="website" />
                <meta property="og:url" content={location} />
                <meta property="og:title" content="Product 1 Hamburger" />
                <meta property="og:description" content="Hamburger adalah sejenis makanan berupa roti berbentuk bundar yang diiris dua dan di tengahnya diisi dengan patty yang biasanya diambil dari daging" />
                <meta property="og:image" content="https://asset.kompas.com/crops/AnzPGqRxpoD-26G__5fPh6ooZSk=/0x28:640x455/750x500/data/photo/2020/12/12/5fd44cf8e94b1.jpg" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={location}/>
                <meta property="twitter:title" content="Product 1 Hamburger"/>
                <meta property="twitter:description" content="Hamburger adalah sejenis makanan berupa roti berbentuk bundar yang diiris dua dan di tengahnya diisi dengan patty yang biasanya diambil dari daging"/>
                <meta property="twitter:image" content="https://asset.kompas.com/crops/AnzPGqRxpoD-26G__5fPh6ooZSk=/0x28:640x455/750x500/data/photo/2020/12/12/5fd44cf8e94b1.jpg" />
            </Helmet>
            <h1>product 1 new update</h1>
            <p>
                Hamburger adalah sejenis makanan berupa roti berbentuk bundar yang diiris dua dan di tengahnya diisi dengan patty yang biasanya diambil dari daging
            </p>
            <img src="https://asset.kompas.com/crops/AnzPGqRxpoD-26G__5fPh6ooZSk=/0x28:640x455/750x500/data/photo/2020/12/12/5fd44cf8e94b1.jpg" alt="hamburger" />
        </div>
    );
};

export default Product1;
