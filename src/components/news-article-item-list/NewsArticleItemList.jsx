import React from 'react';
import './NewsArticleItemList.css';
import List from '../list/List';
import NewsArticleItem from '../news-article-item/NewsArticleItem';

const ListComponent = List(NewsArticleItem);

const NewsArticleItemList = ({ articles }) => {

    return <div className="news-article-item-list">
        <ListComponent items={ articles }/>
    </div>
};

export default NewsArticleItemList;