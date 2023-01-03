import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AddTodo from './AddTodo';
import './App.css';
import { fetchTodos } from './redux/slices/TodoSlices';
import TodoList from './TodoList';

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchTodos())
  },[])
  return (
    <div className="App">
      <AddTodo/>
      <TodoList/>
      
    </div>
  );
}

export default App;
