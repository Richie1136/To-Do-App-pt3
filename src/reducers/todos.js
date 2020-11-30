import { todos as initialTodos } from "../todos"
import { ADDTODO, CLEARCOMPLETEDTODOS, DELETETODO, TOGGLETODO } from "../actions/todosActions"
import { v4 as uuid } from "uuid"

export const todos = (state = initialTodos, action) => {
  switch (action.type) {
    case ADDTODO: {
      const newId = uuid();
      const newTodo = {
        "userId": 1,
        "id": newId,
        "title": action.payload.inputText,
        "completed": false
      }

      return {
        ...state,
        [newId]: newTodo
      };
    }
    case TOGGLETODO: {
      const newTodos = { ...state };
      const { id } = action.payload
      newTodos[id].completed = !newTodos[id].completed;
      return newTodos
    }

    case DELETETODO: {
      const newTodos = { ...state }
      delete newTodos[action.payload.id]
      return newTodos
    }

    case CLEARCOMPLETEDTODOS: {
      const newTodos = { ...state }
      for (const todo in newTodos) {
        if (newTodos[todo].completed) {
          delete newTodos[todo]
        }
      }
      return newTodos
    }


    default:
      return state;
  }
};