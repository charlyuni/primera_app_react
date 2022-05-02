import { useEffect, useState } from "react";
import ShopDetail from "./ShopDetail";

const ShopList= () => {

    const [startproductos, setStartProductos] = useState([]);

    useEffect(() => {
        getStartData()
        
    }
    , []);

    const getStartData = () => {
        const URL = '../../json/api.json'
            fetch(URL)
                .then(res => res.json())        
                .then(data => setStartProductos(data))
        }
  return (
      <div>
            <div className="text-4xl text-left text-white bg-accent border-solid border-gray-200 p-2 m-2"></div>
                <div className="flex flex-wrap justify-center">
                {startproductos.map(p => <ShopDetail key={p.id} producto={p}/>)}
            </div>
       </div>
  )
}
export default ShopList