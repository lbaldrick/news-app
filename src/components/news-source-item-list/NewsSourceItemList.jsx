import React from 'react';
import './NewsSourceItemList.css';
import NewsSourceItem from '../news-source-item/NewsSourceItem';

const NewsSourceItemList = ({ sources, onSourceSelected, onSourceExpanded, selectedSources, expandedSources }) => {

    return <div className="news-source-item-list">
        <ul>
            {
                sources.map((source) => {
                    return <li>
                        <NewsSourceItem item={ source }
                                        onExpanded={ onSourceExpanded }
                                        onSelected={ onSourceSelected }
                                        isExpanded={ expandedSources.indexOf(source.id) > -1 }
                                        isSelected={ selectedSources.indexOf(source.id) > -1 }
                        />
                    </li>
                })
            }
        </ul>
    </div>
};

export default NewsSourceItemList;