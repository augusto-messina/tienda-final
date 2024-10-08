import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CartContextProvider } from "./context/cartContext";
import BaseLayout from "./layout/BaseLayout";
import Home from './pages/Home';
import Store from './pages/Store';
import Detail from './pages/Detail';
import Carrito from "./pages/carrito";
import Update from './pages/Update';
import Error404 from './pages/404';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <BaseLayout>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/tienda" element={<Store />}/>
            <Route path="/tienda/:category" element={<Store />}/>
            <Route path="/detalle/:id" element={<Detail />}/>
            <Route path="/Carrito" element={<Carrito />}/>
            <Route path="/Update" element={<Update />}/>
            <Route path="*" element={<Error404 />}/>
          </Routes>
        </BaseLayout>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
