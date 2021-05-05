import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import todoListReducer from '../features/todo-list/todoListSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todoList: todoListReducer,
    },
});
