import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from "./components/navbar";
import {Shop} from "./pages/shop/shop";
import {Cart} from "./pages/cart/cart";
import {Login} from "./pages/login/login";
import {StoreContextProvider} from "./context/storeContext";

function App() {
  return (
    <div className="App">
      <StoreContextProvider>
      <Router>
      
      <Navbar />
        <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router>
      </StoreContextProvider>
    </div>
  );
}

export default App;
