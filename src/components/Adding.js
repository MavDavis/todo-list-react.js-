import React, { useState } from 'react';

export const Adding = ({ handleClick }) => {
  let [value, setValue] = useState('');
  return (
    <div>
      <div className={'d-flex flex-row align-items-center'}>
        <input
          type='text'
          value={value}
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              handleClick(value);
              setValue('');
            }
          }}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          className={'form-control form-control-lg'}
          id='exampleFormControlInput1'
          placeholder='Add new...'
        />
        {/* <a href="#!" data-mdb-toggle="tooltip" title="Set due date"><i
                        class="fas fa-calendar-alt fa-lg me-3"></i></a> */}
        <div>
          <button
            type='button'
            className={'btn btn-primary'}
            onClick={() => {
              handleClick(value);
              setValue('');
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
