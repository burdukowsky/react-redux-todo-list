import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    nextId: 0,
    tasks: {},
};

export const todoListSlice = createSlice({
    name: 'todoList',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.nextId++;
            state.tasks[state.nextId] = {id: state.nextId, text: action.payload, completed: false};
        },
        setTaskCompleted: (state, action) => {
            const {id, completed} = action.payload;
            state.tasks[id].completed = completed;
        },
        deleteTask: (state, action) => {
            delete state.tasks[action.payload.id];
        },
    }
});

export const {addTask, setTaskCompleted, deleteTask} = todoListSlice.actions;

export const selectTasks = (state) => state.todoList.tasks;

export default todoListSlice.reducer;
