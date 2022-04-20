import { useEffect, useState } from "react";
import Contador from './ItemCount';
    
    
function ImportData(){
    
        const [productos, setProductos] = useState([]);
        useEffect(() => {
            fetch("./components/api.json")
            .then(res => res.json())
            .then(data => setProductos(data))
        }
        , []);
        return productos;
    }
    
    export default function Productos() {
    
        const productos = ImportData();
        
        const listItems = productos.ItemsProd.map((element) =>
           
            <div classNameName="card w-96 bg-base-100 shadow-xl ">
              <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                  <div className="card-body">
                      <h2 classNameName="card-title">{element.name}</h2>
                      <p>{element.Categoria}</p>
                      <div className="card-actions justify-start">
                        <h3>Cantidad:</h3>
                        <Contador />
                        </div>
                        <div className="card-actions justify-end">
                        <button className="btn btn-primary">Comprar</button>
                        </div>
                  </div>
            </div>
            );
        
        return (
            <div>
                <p>llega</p>
            {listItems}
            </div>
            );
    }
    