import React from "react";


const { useState } = React;

const AddTaskForm = ({ addTask }) => {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        value && addTask(value)
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={value}
                placeholder="Enter a title for this task…"
                onChange={e => setValue(e.target.value)}
            />
            <button type="submit"><i class="fas fa-plus"></i></button>
        </form>
    );
}

const ToDoList = () => {

    const [tasks, setTasks] = useState([{
        text: "Sample Todo",
        isCompleted: false
    }, {
        text: "Assignment Completed",
        isCompleted: false
    }, {
        text: "Thank You",
        isCompleted: false
    }]);

    const addTask = text => setTasks([...tasks, { text }]);

    const toggleTask = index => {
        const newTasks = [...tasks];
        newTasks[index].isCompleted = !newTasks[index].isCompleted;
        setTasks(newTasks);
    };

    const removeTask = index => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    return (
        <div> <h1>ToDo List</h1>
            <div className="todo-list">
                <AddTaskForm addTask={addTask} />
                {tasks.map((task, index) => (
                    <div className="todo">
                        <span className={task.isCompleted ? "todo-text todo-completed" : "todo-text"}>
                            {task.text}
                        </span>
                        <button onClick={() => toggleTask(index)} className="add"><i class="fas fa-check"></i></button>
                        <button onClick={() => removeTask(index)} className="delete"><i class="fas fa-trash-alt"></i></button>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default ToDoList;