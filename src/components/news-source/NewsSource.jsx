import React from 'react';
import './NewsSource.css';

const NewsSource = ({ name, category, description, url, }) => {
    return <div className="news-source">
        <section className="news-source_details">
            <div className="news-source_details_name">
                <span> { name } </span>
            </div>
            <div className="news-source_details_description">
                <p> { description } </p>
            </div>
            <div className="news-source_details_url">
                <span> { url } </span>
            </div>
            <div className="news-source_details_category">
                <span> { category } </span>
            </div>
        </section>
    </div>
};

export default NewsSource;