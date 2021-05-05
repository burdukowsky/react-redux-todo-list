import React, {createRef} from 'react';
import {deleteTask, setTaskCompleted} from '../../todoListSlice';
import {useDispatch} from 'react-redux';

export default function Task({task}) {
    const dispatch = useDispatch();
    const completedCheckbox = createRef();

    const onCompletedChange = (event) => {
        dispatch(setTaskCompleted({id: task.id, completed: event.target.checked}));
    };

    const onDelete = () => {
        dispatch(deleteTask({id: task.id}));
    }

    return (
        <div>
            <span className={task.completed ? 'strike' : ''}>{task.text}</span>
            <input type="checkbox"
                   checked={task.completed}
                   ref={completedCheckbox}
                   onChange={onCompletedChange}/>
            <button type="button" onClick={onDelete}>Del</button>
        </div>
    );
}
