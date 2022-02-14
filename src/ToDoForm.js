import React, { useState } from 'react';

const ToDoForm = ({ addTask }) => {

    const [userInput, setUserInput] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-lg-6 m-0 p-0">
                    <input className="form-control" value={userInput} type="text" onChange={handleChange} placeholder="Enter Task..." />
                </div>
                <div className="col-lg-6 m-0 p-0">
                    <button type="button" className="btn btn-outline-primary">+</button>
                </div>
            </div>
        </form>
    );
};

export default ToDoForm;