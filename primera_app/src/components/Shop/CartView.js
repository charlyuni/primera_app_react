
import { Link } from "react-router-dom";
import useCartContext from "../../store/CartContext";

function CartView() {

    const {cart, removeFromCart, clearCart} = useCartContext();
 
if (cart.length === 0){
  return <div>
    <h4>No hay items en en el carrito</h4>
    <Link to='/'> Volver para comprar</Link>
      </div>

}else{
    return <div>
              {cart.map(itemCart => {
                      return <div key={itemCart.id}>
                          <h4>{itemCart.title}</h4>
                          <p>{itemCart.description}</p>
                          <p>{itemCart.precio}</p>
                          <p>{itemCart.cant}</p>
                          <button onClick ={() => removeFromCart(itemCart.id)} style={{color: 'red'}} >Eliminar</button>
                          </div>
                })}
        <button onClick={clearCart} >Vaciar Carrito</button>
        </div>
  }
}
export default CartView