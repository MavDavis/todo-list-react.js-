import React from 'react'

export const Filters = ({ filterFunction, filter, sorter, sorterFunction }) => {
  return (
    <div>
      <div
        className={
          'd-flex justify-content-end align-items-center mb-4 pt-2 pb-3'
        }
      >
        <p className={'small mb-0 me-2 text-muted'}>Filter</p>
        <select
          className={'select'}
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
        <p className={'small mb-0 ms-4 me-2 text-muted'}>Sort</p>
        <select className={'select'}
        value={sorter}
        onChange = {(e)=>sorterFunction(e.target.value)}
        >
          <option value='date'>Date</option>
          <option value='alphabetically'>Alphabetically</option>
        </select>
       
      </div>
    </div>
  );
};
