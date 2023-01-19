import React, { useState, useEffect } from 'react';
import { Adding } from './components/Adding';
import { Filters } from './components/Filters';
import { List } from './components/List';
import generatedPassword from './components/passwordGen';
function App() {
  const [todos, setTodos] = useState([]);
  const [filterByCompletion, setFilterByCompletion] = useState('');
  const [sortByValue, sortByValueFunction] = useState('');
  useEffect(() => {
    const oldTodos = JSON.parse(localStorage.getItem('todos'));
    
    if (oldTodos) {
      setTodos(oldTodos);
         setTodos((oldValue) =>
     oldValue.map((item) => {
      return { ...item, show: true };
     
     })
   ); 
    } else {
      setTodos([]);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  function AddList(value) {
    if (value.length > 0) {
      let obj = {
        name: value,
        id: generatedPassword(10),
        date: new Date().toLocaleDateString('en-us', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        }),
        show: true,
        done: false,
      };
      setTodos((oldValue) => {
        return [...oldValue, obj];
      });
    }
  }
  function filterList(value) {
    setFilterByCompletion(value);
    if (value === 'Completed') {
      setTodos((oldValue) =>
        oldValue.map((item) => {
          if (item.done === true) {
            return { ...item, show: true };
          } else {
            return { ...item, show: false };
          }
        })
      );
    } else if (value === 'All') {
   setTodos((oldValue) =>
     oldValue.map((item) => {
      return { ...item, show: true };
     
     })
   );    } else if (value === 'Active') {
      setTodos((oldValue) =>
        oldValue.map((item) => {
          if (item.done !== true) {
            return { ...item, show: true };
          } else {
            return { ...item, show: false };
          }
        })
      );
    } else if (value === 'Has due date') {
       setTodos((oldValue) =>
         oldValue.map((item) => {
           if (
             item.date ===
             new Date().toLocaleDateString('en-us', {
               month: 'short',
               day: 'numeric',
               year: 'numeric',
             })
           ) {
             return { ...item, show: true };
           } else {
             return { ...item, show: false };
           }
         })
       );
    }
  }
  function DoneList(todo) {
    setTodos((oldValue) =>
      oldValue.map((item) => {
        if (item.id === todo.id) {
          return { ...item, done: !item.done };
        }
        return item;
      })
    );
  }
  function DeleteList(todo) {
    setTodos((oldValue) => {
      let newValue = oldValue.filter((item) => item.id !== todo.id);
      return newValue;
    });
  }
  function sort(value) {
    sortByValueFunction(value);
    if (value === 'alphabetically') {
      setTodos((todo) =>
        todo.sort(function (a, b) {
          let x = a.name.toLowerCase();
          let y = b.name.toLowerCase();
          if (x < y) {
            return -1;
          }
          if (x > y) {
            return 1;
          }
          return 0;
        })
      );
    } else if (value === 'date') {
      console.log(
        todos.sort(function (a, b) {
          return a.date - b.date;
        })
      );
    }
  }
  return (
    <section className={'vh-100'}>
      <div className={'container py-5 h-100'}>
        <div
          className={
            'row d-flex justify-content-center align-items-center h-100'
          }
        >
          <div className={'col'}>
            <div
              className={'card'}
              id='list1'
              style={{ borderRadius: '.75rem', backgroundColor: '#eff1f2' }}
            >
              <div className={'card-body py-4 px-4 px-md-5'}>
                <p className={'h1 text-center mt-3 mb-4 pb-3 text-primary'}>
                  <i className={'fas fa-check-square me-1'}></i>
                  <u>My Todos</u>
                </p>

                <div className={'pb-2'}>
                  <div className={'card'}>
                    <div className={'card-body'}>
                      <Adding handleClick={(value) => AddList(value)} />
                    </div>
                  </div>
                </div>
                <hr className={'my-4'} />
                <Filters
                  filterFunction={filterByCompletion}
                  filter={(value) => filterList(value)}
                  sorter={sortByValue}
                  sorterFunction={(value) => sort(value)}
                />
                {todos?.map((todo) => (
                  <List
                    name={todo.name}
                    show={todo.show}
                    date={todo.date}
                    done={todo.done}
                    key={todo.id}
                    handleDone={() => DoneList(todo)}
                    handleDelete={() => DeleteList(todo)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
