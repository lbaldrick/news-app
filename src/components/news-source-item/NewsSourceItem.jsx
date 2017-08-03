import React from 'react';
import './NewsSourceItem.css';
import NewsSource from '../news-source/NewsSource';

const NewsSourceItem = (props) => {
    return <li className="news-source-item">
        <NewsSource { ...props }/>
    </li>
};

export default NewsSourceItem;