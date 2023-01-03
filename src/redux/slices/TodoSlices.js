import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const instance = axios.create({
  baseUrl: "http://localhost:3001/todos",
});

export const fetchTodos = createAsyncThunk("todo/fetchTodos", async () => {
  try {
    const { data } = await instance.get("");
    return data;
  } catch (error) {
    return error;
  }
});

export const saveTodos = createAsyncThunk("todo/saveTodos", async (todo, {dispatch}) => {
  try {
    await instance.post("", todo);
    await dispatch(fetchTodos());
  } catch (error) {
    return error;
  }
});

export const deleteTodos = createAsyncThunk("todo/deleteTodos", async (id, {dispatch}) => {
    try {
        await instance.delete(`/${id}`);
        await dispatch(fetchTodos());
      } catch (error) {
        return error;
      }
});

const TodoSlice = createSlice({
  name: "todo",
  initialState: {
    loading: false,
    todoList: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.loading = false;
      state.todoList = action.payload.todos;
    });
    builder.addCase(fetchTodos.rejected, (state) => {
      state.loading = false;
      state.error = "oops";
    });
  },
});

export const todoReducer = TodoSlice.reducer;
