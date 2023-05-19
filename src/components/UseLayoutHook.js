import React, { useEffect, useLayoutEffect, useRef } from "react";

const UseLayoutHook = () => {
  const inputRef = useRef(null)
  
  useEffect(()=>{
    inputRef.current.value = "HELLO"
    console.log('useEffect')
  }, [])
  
  useLayoutEffect(()=>{
    console.log(inputRef.current.value)
  }, [])

  return (
    <div>
      <input ref={inputRef} value="Perdo" style={{ width: 400, height: 60 }}/>
    </div>
  )
}

export default UseLayoutHook