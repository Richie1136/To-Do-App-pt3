export const ADDTODO = "ADDTODO"
export const TOGGLETODO = "TOGGLETODO"
export const DELETETODO = "DELETETODO"
export const CLEARCOMPLETEDTODOS = "CLEARCOMPLETEDTODOS"

export const addTodo = (inputText) => ({
  type: ADDTODO, payload: { inputText }
})


export const toggleTodo = (id) => ({ type: TOGGLETODO, payload: { id } })

export const deleteTodo = (id) => ({ type: DELETETODO, payload: { id } })

export const clearCompletedTodos = () => ({ type: CLEARCOMPLETEDTODOS })