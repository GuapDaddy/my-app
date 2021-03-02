import React from "react"
import ToDo from "./ToDo"

const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
    return (
        <div className="todolist">
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter} />
                )
            })}
            <button className="remove" onClick={handleFilter}>Clear Expired</button>
        </div>
    )
}

export default ToDoList