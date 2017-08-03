import React from 'react';
import './NewsSourceItemList.css';
import List from '../list/List';
import NewsSourceItem from '../news-source-item/NewsSourceItem';

const ListComponent = List(NewsSourceItem);

const NewsSourceItemList = ({ sources }) => {

    return <div className="news-source-item-list">
        <ListComponent items={ sources }/>
    </div>
};

export default NewsSourceItemList;