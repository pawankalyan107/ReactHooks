import React, { useState, createContext } from "react";
import Login from "./Login";
import User from "./User";

export const AppContext = createContext(null)

const UseContextHook = () => {
  const [userName, setUserName] = useState("")

  return (
    <AppContext.Provider value={{ userName, setUserName }}>
      <Login /> <User />
    </AppContext.Provider>
  )
}

export default UseContextHook