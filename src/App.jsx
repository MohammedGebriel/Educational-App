import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<h1>Home Page</h1>}/>
      </Routes>
    </div>
  )
}

export default App
