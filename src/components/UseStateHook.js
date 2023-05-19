import React, { useState } from "react"

const UseStateTutorial = () => {
  let [counter, setCounter] = useState(0)
  const increment = () => {
    setCounter(counter + 1)
  }

  let [inputValue, setInputValue] = useState('perdo')

  const message = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <div>
      <div>
        <input placeholder="type something..." onChange={message} />
        {inputValue}
      </div>
      {counter} <button onClick={increment}>Increment</button>
      <div> ---------end of useState----------------------------- </div>

    </div>
  )
}

export default UseStateTutorial