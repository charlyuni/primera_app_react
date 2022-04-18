/* import logo from './logo.svg'; */
import './App.css';
import Card from './components/Card';
import DaisyNavBar from './components/DaisyNavBar';
import ItemListContainer from './components/ItemListContainer';
import Saludo from './components/Saludo';
let productosVendidos = ['Lavarropas', 'TV', 'Laptop', 'Auriculares']

function App() {
  return (
      <div className="App">
        <DaisyNavBar/>
        <h1 className="text-3xl font-bold font-mono"> Primera App en React</h1>
        <h2> Entrega2 Landing</h2>
        <ItemListContainer titulo={'Productos mas vendidos'} ItemsProd = {productosVendidos}>


        </ItemListContainer>
        

      </div>
        
  );
}

export default App;
