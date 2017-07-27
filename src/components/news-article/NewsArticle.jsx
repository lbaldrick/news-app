import React from 'react';
import './NewsArticle.css';

const NewsArticle = ({ title, source, description, pubDate, image , link, author, }) => {
    return <div className="news-article">
        <div className="news-article_image">
            <img src={ image }/>
        </div>
        <section className="news-article_details">
            <div className="news-article_details_header">
                <span className="news-article_details_header_title"> { title } </span>
                <span className="news-article_details_header_source"> { source } </span>
                <span className="news-article_details_header_published-time"> { pubDate } </span>
            </div>
            <div className="news-article_details_link">
                <a href={ link } target="_blank"> { link } </a>
            </div>
            <div className="news-article_details_description">
                <p> { description } </p>
            </div>
            <div className="news-article_details_author">
                <span> { author } </span>
            </div>
        </section>
    </div>
};

export default NewsArticle;