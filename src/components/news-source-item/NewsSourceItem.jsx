import React from 'react';
import './NewsSourceItem.css';
import NewsSource from '../news-source/NewsSource';

const NewsSourceItem = ({ item, onSelected, isSelected, isExpanded, onExpanded}) => {
    return <li className="news-source-item">
        <NewsSource id={ item.id }
                    name={ item.name }
                    category={ item.category }
                    description={ item.description }
                    url={ item.url }
                    isSelected={ isSelected }
                    onSelected={ onSelected }
                    isExpanded={ isExpanded }
                    onExpanded={ onExpanded }
        />
    </li>
};

export default NewsSourceItem;