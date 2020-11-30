import React, { useState } from "react";
import TodoList from './components/ToDoList'
import { Route, Link, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { addTodo, clearCompletedTodos } from "./actions/todosActions";


function App(props) {

  const [inputText, setInputText] = useState("")

  const handleAddToDo = (event) => {
    if (event.which === 13) {
      props.addTodo(inputText)
      setInputText("");
    }
  };



  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <input
          onChange={(event) => setInputText(event.target.value)}
          onKeyDown={(event) => handleAddToDo(event)}
          className="new-todo"
          value={inputText}
          placeholder="What needs to be done?"
          autoFocus />
      </header>
      <Switch>
        <Route exact path="/">
          <TodoList
            todos={Object.values(props.todos)}
          />
        </Route>
        <Route path="/active" >
          <TodoList
            todos={Object.values(props.todos).filter(todo => !todo.completed)}
          />
        </Route>
        <Route path="/completed" >
          <TodoList
            todos={Object.values(props.todos).filter(todo => todo.completed)}
          />
        </Route>
      </Switch>
      <footer className="footer">
        <span className="todo-count">
          <strong>{Object.values(props.todos).filter(todo => !todo.completed).length}
          </strong> item(s) left
          </span>
        <ul className="filters">
          <li>
            <Link to="/">All</Link>
          </li>
          <li>
            <Link to="/active">Active</Link>
          </li>
          <li>
            <Link to="/completed">Completed</Link>
          </li>
        </ul>
        <button
          className="clear-completed"
          onClick={() => props.clearCompleted()}
        >
          Clear completed</button>
      </footer>
    </section >
  );
}

const mapStateToProps = (state) => ({
  todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: inputText => dispatch(addTodo(inputText)),
  clearCompleted: () => dispatch(clearCompletedTodos())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

