import React, { useRef } from "react";

const UseRefHook = () =>{
  const inputRef = useRef(null)
  const onClick = ()=>{
    inputRef.current.focus()
    console.log(inputRef.current.value)
    inputRef.current.value = ""
  }

  return(
    <div>
      <h1>Perdro</h1>
      <input type="text" placeholder="ex..." ref={inputRef}/>
      <button onClick={onClick}>Change name</button>

      <div> ---------end of useRefHook----------------------------- </div>
    </div>
  )
}

export default UseRefHook