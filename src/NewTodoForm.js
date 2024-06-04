import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

function NewTodoForm({ createTodo }) {
    const [task, setTask] = useState("");

    const handleChange = evt => {
        setTask(evt.target.value);
    }

    const makeTask = evt => {
        evt.preventDefault();
        createTodo({ task, id: uuid() });
        setTask("");
    };

    return (
        <div>
            <form onSubmit={makeTask}>
                <label htmlFor="task">Task:</label>
                <input 
                    id="task"
                    name="task"
                    type="text"
                    onChange={handleChange}
                    value={task}
                />
            </form>
            <button>Add ToDo</button>
        </div>
    );
}

export default NewTodoForm;