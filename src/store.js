import { configureStore, createSlice } from '@reduxjs/toolkit';

const toDoList = createSlice({
    name: 'list',
    initialState: { value: 'hello'},
    reducers: {
        setValue: (state, action) => {
            state.value = action.payload
        }
    }
})

const countSlice = createSlice({
    name: 'counter',
    initialState: { value: 0 },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
            if(state.value < 0) {
                state.value = 0
            }
        }
    }
})

const store = configureStore({
    reducer: {
        ToDoList: toDoList.reducer,
        CountSlice: countSlice.reducer
    }
})

export const {
    increment,
    decrement
} = countSlice.actions;

export const { setValue } = toDoList.actions
export default store;