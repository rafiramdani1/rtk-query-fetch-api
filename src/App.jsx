import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layouts from './components/Layouts'
import Products from "./components/Products"
import ShowProduct from "./components/ShowProduct"
import AddProduct from "./components/AddProduct"
import EditProduct from "./components/EditProduct"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Products />} />
          <Route path="/products/:id" element={<ShowProduct />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/products/edit/:id" element={<EditProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
