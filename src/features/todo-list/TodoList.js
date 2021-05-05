import React from 'react';
import NewTask from './new-task/NewTask';
import TaskList from './task-list/TaskList';

export default function TodoList() {
    return (
        <React.Fragment>
            <NewTask/>
            <TaskList/>
        </React.Fragment>
    );
}
