import { useEffect, useState } from "react";
import ShopDetail from "./ShopDetail";
import { useParams } from "react-router-dom";



const ShopList= () => {

    const [startproductos, setStartProductos] = useState([]);
    const {categoryid} = useParams();

   
        

    useEffect(() => {
        getStartData()

   
  
  
    }
    , [categoryid]);

    const getStartData = () => {
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
                
        }
  return (
      <div>
                <div className="flex flex-wrap justify-center">
                {startproductos.map(p => <ShopDetail key={p.id} producto={p}/>)}
            </div>
       </div>
  )
}
export default ShopList