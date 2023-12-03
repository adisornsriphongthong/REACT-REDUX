import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { setValue } from "./store";
import { increment, decrement } from "./store";
import $ from 'jquery';

function App() {
  const [inputData, setInputData] = useState(null);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.ToDoList.value)
  
  const count = useSelector((state) => state.CountSlice.value)

  function myButton() {
    const newText = 'Adisorn'
    dispatch(setValue(inputData))
  }

  useEffect(() => {
    $('input').on('input', (e) => {
      setInputData(e.target.value)
    })
  })

  return (
    <div>
        <div>
          {data}
          <input id="input" type="text" />
          <button onClick={myButton}>submit</button>
          <label htmlFor="">{inputData}</label>
        </div>

        <br />

        <div>
          {count}
          <button onClick={() => {
            dispatch(increment())
          }}>increment</button>
          <button onClick={() => {
            dispatch(decrement())
          }}>decrement</button>
        </div>
    </div>
  )
}

export default App;