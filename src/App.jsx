import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/organisms/Layout"
import Home from "./components/pages/home/Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
