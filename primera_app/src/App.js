/* import logo from './logo.svg'; */
import './App.css';
import DaisyNavBar from './components/DaisyNavBar';
import ItemListContainer from './components/ItemListContainer'; 
let productosVendidos = ['Lavarropas', 'TV', 'Laptop', 'Auriculares']

let productosVendidos2 = [{
  name: 'Lavarropas',
  description: '45 litros',
  stock: '2',
}, {
  name: 'TV',
  description: '55 pulgadas',
  stock: '5',
}, {
  name: 'Laptop',
  description: '12 pulgas 16 gb',
  stock: '6',
}, {
  name: 'Auriculares',
  description: 'Bluetooh',
  stock: '8',
}];


function App() {
  return (
      <div className="App">
      <DaisyNavBar/>
        <h1 className="text-3xl font-bold font-mono"> Primera App en React</h1>
        <h2> Entrega2 Landing</h2>
        <ItemListContainer titulo={'Productos mas vendidos'} ItemsProd = {productosVendidos} />

      </div>
        
  );
}

export default App;
