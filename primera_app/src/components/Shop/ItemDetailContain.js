import { useEffect, useState } from "react";
import ShopDetailItems from "./ShopDetailItems";


const ItemDetailCointeiner= ({id}) => {

    const [startproducto, setStartProducto] = useState([]);

    useEffect(() => {
        getStartData()
        
    }
    , []);

    const getStartData = () => {
        const URL = '../../json/api.json'
            fetch(URL)
                .then(res => res.json())        
                .then(data => {
                    const foundProducto = data.find(producto => producto.id == id)
                    setStartProducto(foundProducto)
                    ;   
                })

        }

  
  return (
        <ShopDetailItems producto={startproducto} />

        
        );

  }
export default ItemDetailCointeiner