import { BrowserRouter, Route, Routes } from "react-router-dom"
import DarkToggle from "./components/dark-mode/DarkToggle"

function App() {
  return (
    <div className="">
      <DarkToggle />
      <Routes>
        <Route path='/' element={<h1>Home Page</h1>}/>
      </Routes>
    </div>
  )
}

export default App
