import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import InputTodo from './InputTodo';
import Indi from './todolist';


function App() {
const [todos, setTodos] = useState([]);

const addTodo = (text) => {       
  const newTodo = {id : Date.now(), text, completed: false};
   setTodos([...todos, newTodo]); 
};
  
const checkComplete = (id) => {
  setTodos(todos.map(todo => todo.id  ? {...todo, completed: !todo.completed} : todo));
};

const deleteTodo = (id) => {
  setTodos(todos.filter(todo => todo.id !== id));
};

  return (
    <div className="App">
      <h1>WELCOME! PLEASE ADD YOUR TASKS</h1>
        
      
      
    <InputTodo addTodo={addTodo} />
    <Indi todos={todos} checkComplete={checkComplete} deleteTodo={deleteTodo} />
    
    </div>
  );
}

export default App;

