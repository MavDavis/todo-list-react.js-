import React, { useState, useEffect } from 'react';
import { Adding } from './components/Adding';
import { Filters } from './components/Filters';
import { List } from './components/List';
function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const oldTodos = JSON.parse(localStorage.getItem('todos'));
    if (oldTodos) {
      setTodos(oldTodos);
    } else {
      setTodos([]);
    }
  }, []);

  return (
    <section class='vh-100'>
      <div class='container py-5 h-100'>
        <div class='row d-flex justify-content-center align-items-center h-100'>
          <div class='col'>
            <div
              class='card'
              id='list1'
              style={{ borderRadius: '.75rem', backgroundColor: '#eff1f2' }}
            >
              <div class='card-body py-4 px-4 px-md-5'>
                <p class='h1 text-center mt-3 mb-4 pb-3 text-primary'>
                  <i class='fas fa-check-square me-1'></i>
                  <u>My Todos</u>
                </p>

                <div class='pb-2'>
                  <div class='card'>
                    <div class='card-body'>
                      <Adding
                        handleClick={(value) => {
                          if (value.length > 0) {
                            let obj = {
                              name: value,
                              id: todos.length + 1,
                              date: new Date().toLocaleDateString('en-us', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric',
                              }),
                              done: false,
                            };
                            setTodos((oldValue) => {
                              localStorage.setItem(
                                'todos',
                                JSON.stringify([...oldValue, obj])
                              );

                              return [...oldValue, obj];
                            });
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
                <hr class='my-4' />
                <Filters />
                {todos?.map((todo) => (
                  <List
                    name={todo.name}
                    date={todo.date}
                    done={todo.done}
                    key={todo.id}
                    handleDone ={()=>{
                      setTodos((oldValue)=>oldValue.map(item=>{
                        if(item.id === todo.id){
                          return {...item, done:!item.done}
                        }
                        return item;
                      }))
                    }}
                    handleDelete={() => {
                      setTodos((oldValue) => {
                        let newValue = oldValue.filter(
                          (item) => item.id !== todo.id
                        );
                        localStorage.setItem('todos', JSON.stringify(newValue));
                        return newValue;
                      });
                    }}
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
