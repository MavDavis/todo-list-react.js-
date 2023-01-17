import React from 'react';

export const List = ({ name, date, done, handleDelete, handleDone }) => {
  return (
    <div>
      <ul class='list-group list-group-horizontal rounded-0 mb-2'>
        <li class='list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent'>
          <div class='form-check'>
            <input
              class='form-check-input me-0'
              type='checkbox'
              value=''
              checked={done}
              onChange={handleDone}
              id='flexCheckChecked3'
              aria-label='...'
            />
          </div>
        </li>
        <li class='list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent'>
          <p class='lead fw-normal mb-0 bg-light w-100 ms-n2 ps-2 py-1 rounded'>
            {name}
          </p>
        </li>
        <li class='list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent'>
          <div class='d-flex flex-row justify-content-end mb-1'>
            <a
              href='#!'
              class='text-danger'
              data-mdb-toggle='tooltip'
              title='Delete todo'
            >
              <i class='fas fa-trash-alt' onClick={handleDelete}></i>
            </a>
          </div>
          <div class='text-end text-muted'>
            <a
              href='#!'
              class='text-muted'
              data-mdb-toggle='tooltip'
              title='Created date'
            >
              <p class='small mb-0'>
                <i class='fas fa-info-circle me-2'></i>
                {date}
              </p>
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};
