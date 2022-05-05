import Contador from "../ItemCount";
import { Link } from "react-router-dom";

const ShopDetailItems = ({producto}) => {
   
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
                    <Contador stock = {producto.stock} />
                    </div>
                    <div className="card-actions justify-end">
                    <Link to={`/productos/${producto.id}`} className="btn btn-primary">Comprar</Link>
                    </div>
                </div>
            </div>

    )
}
export default ShopDetailItems