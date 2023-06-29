import React, { useState } from 'react';

import TodoList from '../components/TodoList';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';
import { addTodo } from '../redux/modules/todos';

function Home() {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const dispatch = useDispatch();

  const onChange = ({ target: { name, value } }) => {
    if (name === 'title') {
      setTitle(value);
    } else if (name === 'body') {
      setBody(value);
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    const newTodo = {
      id: shortid.generate(),
      title,
      body,
      isDone: false,
    };
    dispatch(addTodo(newTodo));
    setTitle('');
    setBody('');
  };
  return (
    <div>
      <header style={{ backgroundColor: '#C9DCF5' }}>z</header>
      <form onSubmit={onSubmit}>
        <div>
          <label>제목</label>
          <input type="text" name="title" value={title} onChange={onChange} required />
        </div>
        <div>
          <label>내용</label>

          <input type="text" name="body" value={body} onChange={onChange} required />
        </div>
        <button>등록</button>
      </form>
      <main style={{ backgroundColor: '#d7ebab' }}>
        <section>
          <h3>Working</h3>
          <TodoList $isDone={false}></TodoList>
        </section>
        <section>
          <h3>Done</h3>
          <TodoList $isDone={true}></TodoList>
        </section>
      </main>
      <footer style={{ backgroundColor: '#ffb5b3' }}>z</footer>
    </div>
  );
}

export default Home;
