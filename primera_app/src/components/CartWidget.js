import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import useCartContext from "../store/CartContext";

function CartWidget() {
  const {cantInCart, calcPriceCart} = useCartContext();
    return (

        <div className="flex-none">
    <div className="dropdown dropdown-end">
      <label tabindex="0" className="btn btn-ghost btn-circle">
        <div className="indicator">
        <div className="h-6 "><HiOutlineShoppingCart size={32}/></div>
          <span className="badge badge-sm indicator-item">{cantInCart()} </span>
        </div>
      </label>
      <div tabindex="0" className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body"> 
          <span className="font-bold text-lg">{cantInCart()} Items</span>
          <span className="text-info">Subtotal: {calcPriceCart()}</span>
          <div className="card-actions">
            <Link to='/cart' className="btn btn-primary btn-block" >Ir al Carrito</Link>
          </div>
        </div>
      </div>
    </div>
    </div>

    
    )
}
export default CartWidget