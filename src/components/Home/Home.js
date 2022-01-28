import React from 'react';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Blog />
        </div>
    );
};

export default Home;