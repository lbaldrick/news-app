import React from 'react';
import './NewsSource.css';

const NewsSource = ({ id, name, category, description, url, isSelected, onSelected, isExpanded, onExpanded}) => {
    return <div className="news-source">
        <div className="news-source_details_input">
            <input type="checkbox" id="sourceName" className="news-source_details_input_checkbox" value={ id } checked={isSelected ? 'checked' : ''} onClick={() => onSelected(id)}/>
            <label for="sourceName">{ name } </label>
            <button className="news-source_details_input_button" onClick={() => onExpanded(id) }>{ isExpanded ? ' - ' : ' + '}</button>
        </div>
        <section className={ isExpanded ? "news-source_details" : "news-source_details --hidden" }>
            <div className="news-source_details_description">
                <p> { description } </p>
            </div>
            <div className="news-source_details_url">
                <span> { `Link:` } </span> <a href={ url } target="_blank">{ url }</a>
            </div>
            <div className="news-source_details_category">
                <span> { `Category: ${category}` } </span>
            </div>
        </section>
    </div>
};

export default NewsSource;