import './App.css';
import DaisyNavBar from './components/DaisyNavBar';
import ItemDetailCointeiner from './components/Shop/ItemDetailContain';
import ShopContainer from './components/Shop/ShopContainer';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Carrousel from './components/Shop/Carrousel';
import {CartContextProvider} from './store/CartContext';
import CartView from './components/Shop/CartView';



function App() {
  return (
      <div className="App">
      <CartContextProvider>
        <BrowserRouter>
            <DaisyNavBar/>
            <Carrousel />
            <Routes>
                <Route path="/" element={<ShopContainer titulo={'Nuestros Productos'}/>}/>
                <Route path="/category/:categoryid" element={<ShopContainer titulo={'Producto'}/>}/>
                <Route path="/productos/:itemid" element={<ItemDetailCointeiner />}/>
                <Route path="/cart" element={<CartView/>}/>
            </Routes>
        </BrowserRouter>
        </CartContextProvider>
      </div>
        
  );
}

export default App;
