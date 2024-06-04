import React, { useState } from "react";

function ToDo({ task = "default todo", id = "1", remove, update}) {
    const [editTask, setEditTask] = useState(task);
    
    const handleChange = evt => {
        setEditTask(evt.target.value);
    }

    const handleDelete = () => remove(id);

    const handleUpdate = evt => {
        evt.preventDefault();
        update(id, editTask);
    }

    let defaultView = (
        <div>
            <li>{task}</li>
            <button onClick={handleDelete}>X</button>
        </div>
    );

    return defaultView;
}

export default ToDo;