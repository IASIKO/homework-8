import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveTodos } from './redux/slices/TodoSlices'

const AddTodo = () => {
const dispatch = useDispatch()

const todoLists = useSelector((state) => state.todos.data)

const [values, setValues] = useState({title:"", completed: false})

const onInputChange = (event) => {
    const {value, name} = event.target
    setValues({...values, [name]: value})
}

const onSubmit = async (event) => {
    event.preventDefault()
    dispatch(saveTodos(values))
}


  return (
    <form onSubmit={onSubmit}>
        <input onChange={onInputChange} value={values.title} name="title"/>
        <button>save todo</button>
    </form>
  )
}

export default AddTodo