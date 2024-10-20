import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./pages/client/Layout"
import Home from "./pages/client/Home"


function App() {

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout/>} >
        <Route index  element={<Home/>} />
           
        </Route>

    </Routes>
    </BrowserRouter>
  )
}

export default App
