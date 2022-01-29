import React from 'react';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import ExtraPart from '../ExtraPart/ExtraPart';
import TopTrending from '../TopTrending/TopTrending';

const Home = () => {
    return (
        <div>
            <Banner />
            <Blog />
            <TopTrending />
            <ExtraPart />
        </div>
    );
};

export default Home;