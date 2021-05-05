import {createRef} from 'react';
import {useDispatch} from 'react-redux';
import {addTask} from '../todoListSlice';

export default function NewTask() {
    const dispatch = useDispatch();
    const input = createRef();

    const submit = (event) => {
        event.preventDefault();
        dispatch(addTask(input.current.value));
        input.current.value = '';
    }

    return (
        <form onSubmit={submit}>
            <input type="text"
                   ref={input}
                   required/>
            <button type="submit">Add</button>
        </form>
    );
}
