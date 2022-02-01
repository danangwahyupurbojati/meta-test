import React from 'react';
import logo from '../logo.svg';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>

            <h1>Ini adalah halaman home</h1>
            <p>coba menggunakan ubuntu</p>
            <img src={logo} alt="logo" className="App-logo" />
        </div>
    );
};

export default Home;
