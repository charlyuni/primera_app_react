import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShopDetailItems from "./ShopDetailItems";
import {getItem as getStartData} from "../../data/BBDD.js";


const ItemDetailCointeiner= ({id}) => {

    const [startproducto, setStartProducto] = useState([]);
    const {itemid} = useParams();
    
    useEffect(() => {
        getStartData(itemid).then(respuestaPromise => {
            setStartProducto(respuestaPromise);
        })
    }, [itemid]);

return (
        <ShopDetailItems producto={startproducto} /> 
        );

}

export default ItemDetailCointeiner   