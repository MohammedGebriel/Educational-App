import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/organisms/Layout"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<h1>Home</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
