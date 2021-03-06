import React from 'react';
import './NewsArticleItem.css';
import NewsArticle from '../news-article/NewsArticle';

const NewsArticleItem = (props) => {
    return <li className="news-article-item">
        <NewsArticle { ...props }/>
    </li>
};

export default NewsArticleItem;