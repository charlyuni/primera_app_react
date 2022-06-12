import { useEffect, useState } from "react";
import ShopDetail from "./ShopDetail";
import { useParams } from "react-router-dom";
import { getAllItems as getStartData ,getItemsByCategory  } from "../../data/BBDD.js";

const ShopList= () => {

    const [startproductos, setStartProductos] = useState([]);
    const {categoryid} = useParams();
    useEffect(() => {
        if( categoryid === undefined) {
        getStartData().then((respuestaPromise) => {
            setStartProductos(respuestaPromise);
        });
    } else {
        getItemsByCategory(categoryid).then((respuestaPromise) => {
            setStartProductos(respuestaPromise);
        });
    }
    },[categoryid]);

  return (
      <div>
                <div className="flex flex-wrap justify-center">
                {startproductos.map(p => <ShopDetail key={p.id} producto={p}/>)}
            </div>
       </div>
  )
}
export default ShopList