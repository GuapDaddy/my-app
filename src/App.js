import React, {useState} from "react";
import Axios from "axios"
import { v4 as uuidv4 } from 'uuid';
import Recipe from "./recipe"
import './App.css';
import ToDoList from './ToDoList'
import ToDoForm from './ToDoForm'



const App = () => {
  const [toDoList, setToDoList] = useState([])
  const [query,setQuery] = useState ("")
  const [recipes, setRecipe] = useState ([])

  const APP_ID = "be7902ac"
  const APP_KEY = "3131aac89bf05b7fb981d6867d222f93"
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=10&calories=591-722&health=alcohol-free`

  const getData = async () => {
    const result = await Axios.get(url)
    setRecipe(result.data.hits)
    console.log(result)
    setQuery("")
  }

  const onChange = (e) => {
    setQuery(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    getData()
  }
  
  const handleToggle = (id) => {
    let mapped = toDoList.map (task=> {
      return task.id == id ? { ...task, complete: !task.complete} : {...task}
    })
    setToDoList(mapped)
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task =>{
      return !task.complete
    })
    setToDoList(filtered)
  }

  const addTask = (userinput) => {
    let copy = [...toDoList]
    copy = [...copy, {id: toDoList.length +1, task: userinput, complete:false}]
    setToDoList(copy)
  }

  return (
    <div className="App">
      <h1>Home Pantry</h1>
      <form className= "search-form" onSubmit={onSubmit}>
        <input type="text" placeholder = "Search" autoComplete = "off" onChange={onChange} value={query}/>
        <input type="submit" value="search" />
      </form>
      <ToDoForm addTask={addTask}/>
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
      <div className="recipes">
        {recipes !== [] && recipes.map(recipe => <Recipe key={uuidv4 ()} recipe={recipe} />)}
      </div>
      <footer className="footer">
        <div>Contact</div>
        <ol className="contact">
          <ul>Phone: (352)470-1693</ul>
          <ul>Email: <a href="mailto:kyle.miller.pokemonpro@gmail.com?subject=App Feedback">kyle.miller.pokemonpro@gmail.com</a></ul>
          <ul>Twitter: <a href="https://twitter.com/TheOneTrueMort">@TheOneTrueMort</a></ul>
        </ol>
      </footer>
    </div>
  );
}

export default App;
