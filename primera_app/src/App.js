/* import logo from './logo.svg'; */
import './App.css';
import DaisyNavBar from './components/DaisyNavBar';
import ItemListContainer from './components/ItemListContainer'; 
import StartDataJson from './components/StartDataJson';
let productosVendidos = ['Lavarropas', 'TV', 'Laptop', 'Auriculares']



function App() {
  return (
      <div className="App">
      <DaisyNavBar/>
        <h1 className="text-3xl font-bold font-mono"> Primera App en React</h1>
        <h2> Entrega2 Landing</h2>
        <ItemListContainer/>
        <StartDataJson/>
  
      </div>
        
  );
}

export default App;
