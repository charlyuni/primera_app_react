import Contador from "./ItemCount";
import { Link } from "react-router-dom";
import { useState } from "react";
import useCartContext from "../../store/CartContext";

const ShopDetailItems = ({producto}) => {

    const [isInCart, setIsInCart] = useState(false); 

    const {addtoCart} = useCartContext();

    function hanleonAdd(count){
        setIsInCart(true);
        addtoCart(producto, count);
    };

    if (producto === undefined){
        return <h4>Cargando ...</h4>
    }
   else{
    return (

        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={producto.thumbnailUrl} alt="Album"/></figure>
            <div className="card-body">
                    <h2 className="card-title">{producto.title} </h2>
                    <p>{producto.description}</p>
                    <div className="card-actions justify-start ">
                    <div >$ {producto.precio}</div>
                    </div>
                    <div className="card-actions justify-start ">
                        { isInCart? <Link to='/cart' className="btn btn-primary 	" >Ir al Carrito</Link> : <Contador onAdd={hanleonAdd} stock = {producto.stock}/>  }
                    </div>
                    
            
                </div>
            </div>

    )
}
}
export default ShopDetailItems