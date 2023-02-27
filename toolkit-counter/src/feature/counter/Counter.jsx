import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,incrementByAmount } from './counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div >
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          style={{margin:'20px'}}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
        style={{margin:'20px'}}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button><br/>
        <button
          style={{margin:'20px'}}
          onClick={() => dispatch(incrementByAmount(100))}
        >
          incrementBYAmount
        </button>
      </div>
    </div>
  )
}