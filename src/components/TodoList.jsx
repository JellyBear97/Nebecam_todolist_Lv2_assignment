import React from 'react';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { switchTodo } from '../redux/modules/todos';
import { useDispatch } from 'react-redux';

function TodoList({ $isDone }) {
  const todos = useSelector(state => {
    return state.todos;
  });

  const dispatch = useDispatch();
  // CHECKLIST 하다 말았...
  const onClick = todoId => {
    const switchedTodos = todos.map(todo => {
      if (todo.id === todoId) {
        return { ...todo, isDone: !todo.isDone };
      }
      return todo;
    });
    console.log(switchedTodos);
    dispatch(switchTodo(switchedTodos));
  };
  return (
    <UlTodo>
      {todos
        .filter(todo => {
          return todo.isDone === $isDone;
        })
        .map(todo => {
          return (
            <LiTodo key={todo.id}>
              <p>{todo.id}</p>
              <p>{todo.title}</p>
              <p>{todo.body}</p>
              <p>{todo.isDone.toString()}</p>
              <button onClick={() => onClick(todo.id)}>{$isDone ? '취소' : '완료'}</button>
            </LiTodo>
          );
        })}
    </UlTodo>
  );
}

export default TodoList;

const UlTodo = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const LiTodo = styled.li`
  border: 1px solid #000000;
  margin: 10px;
`;
