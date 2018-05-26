import React from 'react';

import '../styles/Table.css';

const TableItem = ({ item }) =>
  <div className="Item__box">
    <div className="Item__box--info">
      <div>
        <span className="Item__box--upvotes">
          <i className="fas fa-caret-up fa-lg"></i>
        </span>
        <span>{item.points}</span>
      </div>
      <div>
        <span className="Item__box--comments">
          <i className="fas fa-comment fa-xs"></i>
        </span>
        <span>{item.num_comments}</span>
      </div>
    </div>
    <div className="Item__box--preview">
      <p className="Item__box--title">
        <a href={item.url}>{item.title}</a>
      </p>
      <span>@{item.author}</span>
    </div>
  </div>

export default TableItem;