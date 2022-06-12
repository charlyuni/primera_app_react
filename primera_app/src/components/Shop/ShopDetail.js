import { useState } from "react";
import { Link } from "react-router-dom";
import Contador from "./ItemCount";
import ShopDetailItems from "./ShopDetailItems";
import useCartContext from "../../store/CartContext";


const ShopDetail = ({producto}) => {

    const [isInCart, setIsInCart] = useState(false); 

    const {addtoCart} = useCartContext();

    function hanleonAdd(count){
        setIsInCart(true);
        addtoCart(producto, count);
    };



    return (
        <div className="card w-96 bg-base-100 shadow-xl ">
                <figure><img src={producto.thumbnailUrl} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{producto.title}</h2>
                        <p>{producto.description}</p>
                        <div className="card-actions justify-start " >
                        <h3>Cantidad:</h3>
                        {isInCart? <Link to='/cart' className="btn btn-warning btn-block btn-sm " >Ir al Carrito </Link> : <Contador  onAdd={hanleonAdd} stock = {producto.stock}/>  }
                        </div>
                        <div className="card-actions justify-end w-full">
                        <Link to={`/productos/${producto.id}`} className="btn btn-primary btn-block btn-sm 	">Ver detalle</Link>
                        </div>
                    </div>
        </div>
    )
}
export default ShopDetail