import React, { useEffect, useState } from "react";

const useDebounce = (inputValue, delay = 500) => {
  const [value, setValue] = useState(inputValue)

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue(inputValue)
    }, delay)
    return () => {
      clearTimeout(timer)
    }
  }, [inputValue, delay])
  return value
}

export default useDebounce
