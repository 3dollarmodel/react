import React from 'react';
import Banner from './Banner'
import Search from './Search'

import './Header.css';


const bannerSearch = () => {

    return (
        <div className="BannerSearch">
            <Banner />
            <Search />
        </div>
    );
}

export default bannerSearch;