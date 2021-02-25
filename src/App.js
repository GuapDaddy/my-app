import React, {useState} from "react";
import Axios from "axios"
import { v4 as uuidv4 } from 'uuid';
import Recipe from "./recipe"
import './App.css';


const App = () => {
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

  return (
    <div className="App">
      <h1>Home Pantry</h1>
      <form className= "search-form" onSubmit={onSubmit}>
        <input type="text" placeholder = "Search" autoComplete = "off" onChange={onChange} value={query}/>
        <input type="submit" value="search" />
      </form>
      <div className="recipes">
        {recipes !== [] && recipes.map(recipe => <Recipe key={uuidv4 ()} recipe={recipe} />)}
      </div>
      <footer className="footer">
        <div>Contact</div>
        <ol className="contact">
          <ul>Phone: (352)470-1693</ul>
          <ul>Email: <a href="mailto:kyle.miller.pokemonpro@gmail.com?subject=App Feedback">kyle.miller.pokemonpro@gmail.com</a></ul>
          <ul>Twitter: <a href=""></a>@TheOneTrueMort</ul>
        </ol>
      </footer>
    </div>
  );
}

export default App;
