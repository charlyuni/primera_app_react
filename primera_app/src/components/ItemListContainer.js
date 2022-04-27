import productos from "./api";
import { useEffect, useState } from "react";
import Itemslist from "./Itemslist";

function getProductos(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
    },500);
  });
}

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    getProductos().then(data => setProductos(data));
  }, []);

  
  return (
    <div>
    <div className="text-4xl text-left text-white bg-accent border-solid border-gray-200 p-2 m-2"></div>
    <div className="flex flex-wrap justify-center">
    <Itemslist productos={productos}/>
    </div>
    </div>
    )
}
export default ItemListContainer