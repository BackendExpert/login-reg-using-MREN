import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignUp from "./loginSignUp/SignUp"
import Login from "./loginSignUp/Login"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/SignUp" element={<SignUp />} ></Route>
        <Route path="/Login" element={<Login />} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
