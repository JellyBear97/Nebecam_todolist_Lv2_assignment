import shortid from 'shortid';

const ADD_TODO = 'todos/ADD_TODO';
const DELETE_TODO = 'todos/DELETE_TODO';
const SWITCH_TODO = 'todos/SWITCH_TODO';

// {안에 return 다음에 객체반환할거면 JS 전체 객체형태쓰는 거 까먹지 말기}
export const addTodo = payload => {
  return {
    type: ADD_TODO,
    payload: payload,
  };
};
export const deleteTodo = payload => {
  return {
    type: ADD_TODO,
    payload: payload,
  };
};

// ???
export const switchTodo = payload => {
  return {
    type: ADD_TODO,
    payload: payload,
  };
};

const initialState = [
  {
    id: shortid.generate(),
    title: '리액트1',
    body: '리액트 공부하기',
    isDone: false,
  },
  {
    id: shortid.generate(),
    title: '리액트1',
    body: '리액트 공부하기',
    isDone: true,
  },
  {
    id: shortid.generate(),
    title: '리액트1',
    body: '리액트 공부하기',
    isDone: true,
  },
];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return;
    case SWITCH_TODO:
      return;
    default:
      return state;
  }
};

export default todos;
