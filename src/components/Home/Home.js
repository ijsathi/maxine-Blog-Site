import React from 'react';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import TopTrending from '../TopTrending/TopTrending';

const Home = () => {
    return (
        <div>
            <Banner />
            <Blog />
            <TopTrending />
        </div>
    );
};

export default Home;