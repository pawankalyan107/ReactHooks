import React, { useState, useEffect } from "react";
import useDebounce from "./Debounce";

export const Debounce = () => {
  const [value, setValue] = useState('')
  const debounceValue = useDebounce(value)

  useEffect(() => {
    console.log(debounceValue)
  }, [debounceValue])

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <>
      <input value={value} onChange={handleChange} />
    </>
  )
}