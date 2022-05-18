import { useEffect, useState } from "react";
import ShopDetail from "./ShopDetail";
import { useParams } from "react-router-dom";
import { getAllItems as getStartData, getItemsByCategory  } from "../../data/index";

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


    /* const getStartData = () => {
        const URL = '../../json/api.json'
            fetch(URL)
                .then(res => res.json())        
                .then(data => {
                    if(categoryid !== undefined){
                        setStartProductos(data.filter(producto => producto.Categoria === categoryid))
                    }else{
                    setStartProductos(data)
                }
                })
                
        } */
  return (
      <div>
                <div className="flex flex-wrap justify-center">
                {startproductos.map(p => <ShopDetail key={p.id} producto={p}/>)}
            </div>
       </div>
  )
}
export default ShopList