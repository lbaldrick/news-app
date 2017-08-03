import React from 'react';
import NewsContainer from '../news-container/NewsContainer';
import NewsSearchContainer from '../news-search-container/NewsSearchContainer';
import './NewsLayout.css';

const NewsLayout = () => {
    return <section className="news-layout">
        <NewsSearchContainer/>
        <NewsContainer/>
    </section>
};

export default NewsLayout;