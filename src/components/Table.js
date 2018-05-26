import React from 'react';
import { sortBy } from 'lodash';

import TableItem from './TableItem';

const SORTS = {
  NONE: list => list,
  POINTS: list => sortBy(list, 'points').reverse(),
  COMMENTS: list => sortBy(list, 'num_comments').reverse(),
};

const Table = ({ list, sortKey, onSort }) =>
  <div className="Table__box">
    <div className="Table__header">
      <div className="Table__header--label">
        Stories
      </div>
        <select onChange={onSort}>
          <option value='NONE'>Relevance</option>
          <option value='POINTS'>Most Upvotes</option>
          <option value='COMMENTS'>Most Comments</option>
        </select>
    </div>
    {SORTS[sortKey](list).map(item =>
      <TableItem key={item.objectID} item={item} />
    )
    }
  </div>

export default Table;