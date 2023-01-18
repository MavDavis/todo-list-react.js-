import React, {useState} from 'react'

export const Filters = ({ filterFunction, filter }) => {
  return (
    <div>
      {' '}
      <div class='d-flex justify-content-end align-items-center mb-4 pt-2 pb-3'>
        <p class='small mb-0 me-2 text-muted'>Filter</p>
        <select
          class='select'
          value={filterFunction}
          onChange={(e) => {
            filter(e.target.value);
          }}
        >
          <option value='All'>All</option>
          <option value='Completed'>Completed</option>
          <option value='Active'>Active</option>
          <option value='Has due date'>Has due date</option>
        </select>
        <p class='small mb-0 ms-4 me-2 text-muted'>Sort</p>
        <select class='select'>
          <option value='1'>Added date</option>
          <option value='2'>Due date</option>
        </select>
        <a
          href='#!'
          style={{ color: '#23af89' }}
          data-mdb-toggle='tooltip'
          title='Ascending'
        >
          <i class='fas fa-sort-amount-down-alt ms-2'></i>
        </a>
      </div>
    </div>
  );
};
