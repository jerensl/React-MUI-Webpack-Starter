import { createContext } from "react"

export const initialState = {
  username: "",
  password: "",
  isLoading: false,
  error: "",
  isLoggedIn: false,
}

export const stateContext = createContext()
export const dispatchContext = createContext()
