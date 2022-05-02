/* import logo from './logo.svg'; */
import './App.css';
import DaisyNavBar from './components/DaisyNavBar';
import ItemDetailCointeiner from './components/Shop/ItemDetailContain';
import ShopContainer from './components/Shop/ShopContainer';


function App() {
  return (
      <div className="App">
        <DaisyNavBar/>
        <ItemDetailCointeiner id={2} />
        <ItemDetailCointeiner id={3} />
      </div>
        
  );
}

export default App;
