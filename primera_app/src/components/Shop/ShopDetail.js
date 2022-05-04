import { Link } from "react-router-dom";
import Contador from "../ItemCount";


const ShopDetail = ({producto}) => {
    return (
        <div classNameName="card w-96 bg-base-100 shadow-xl ">
                <figure><img src={producto.thumbnailUrl} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 classNameName="card-title">{producto.title}</h2>
                        <p>{producto.description}</p>
                        <div className="card-actions justify-start">
                        <h3>Cantidad:</h3>
                        <Contador stock = {producto.stock} />
                        </div>
                        <div className="card-actions justify-end">
                        <Link to={`/productos/${producto.id}`} className="btn btn-primary">Comprar</Link>
                        </div>
                    </div>
        </div>
    )
}
export default ShopDetail