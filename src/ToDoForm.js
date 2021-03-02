import React , {useState} from "react"

const ToDoForm =({addTask}) => {

    const [userInput, setUserInput] = useState('')

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput("")
    }
    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Add Ingredient..."/>
            <input type="submit" value="Submit"></input>
        </form>
    )
}

export default ToDoForm