import React from 'react';
import TableItem from './TableItem';

import '../styles/Table.css';

const Table = ({ list }) =>
  <div className="Table__box">
    {list.map(item =>
      <TableItem key={item.objectID} item={item} />
    )
    }
  </div>

export default Table;