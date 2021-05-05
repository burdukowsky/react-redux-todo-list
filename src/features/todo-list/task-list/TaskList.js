import React from 'react';
import {useSelector} from 'react-redux';
import {selectTasks} from '../todoListSlice';
import Task from './task/Task';

export default function TaskList() {
    const tasks = useSelector(selectTasks);

    return (
        <React.Fragment>
            {Object.values(tasks).map((task, index) =>
                <Task key={index} task={task}/>
            )}
        </React.Fragment>
    );
}
