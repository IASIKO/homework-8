import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodos } from './redux/slices/TodoSlices'

const TodoList = () => {
    const todos = useSelector((state) => state.todo.todoList)
    const dispatch = useDispatch()
  return (
    <div>{todos.map((item) => {
        return
        <div key={item._id}>
            <h1>{item.title}</h1>
            <button onClick={()=> {
                dispatch(deleteTodos(item._id))
            }}>delete</button>
        </div>
    })}</div>
  )
}

export default TodoList