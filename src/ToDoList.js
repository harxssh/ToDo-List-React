import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
    return (
        <div>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                    // console.log(todo);
                )
            })}
            <button type="button" className="btn btn-dark" style={{margin: '10px 0px 10px -5px'}} onClick={handleFilter}>Clear Completed Tasks</button>
        </div>
    );
};

export default ToDoList;