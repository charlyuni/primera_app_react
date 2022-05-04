import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShopDetailItems from "./ShopDetailItems";


const ItemDetailCointeiner= ({id}) => {

    const [startproducto, setStartProducto] = useState([]);
    const {itemid} = useParams();

    useEffect(() => {
        
        getStartData()
        
    }
    , [itemid]);

    const getStartData = () => {
        const URL = '../../json/api.json'
            fetch(URL)
                .then(res => res.json())        
                .then(data => {
                    (itemid !== undefined) ? id=itemid : id=id;
                    const foundProducto = data.find(producto => producto.id == id)
                    console.log(startproducto)
                    setStartProducto(foundProducto)
                    ;       
                })

        }

  
  return (
      
        <ShopDetailItems producto={startproducto} />

        
        );

  }
export default ItemDetailCointeiner