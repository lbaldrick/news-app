import React from 'react';
import './List.css';

const List = (ListComponent) => ({ items }) => {
        return <ul className="list">
            {
                items.map((item) =>{
                    return <ListComponent { ...item  } />
                })
            }
        </ul>
};

export default List;