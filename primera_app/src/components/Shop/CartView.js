
import { Link } from "react-router-dom";
import useCartContext from "../../store/CartContext";
import { createBuyOrder} from "../../data/index";

function CartView() {

    const {cart, removeFromCart, clearCart, calcPriceCart} = useCartContext();

function handleBuy(){
  const itemsToBuy = cart.map((item) => (
    { title: item.title,
      price: item.precio,
      cant: item.cant,
      id: item.id,
      }
    ))
    const buyOrder = {
    buyer:{
      name: "Carlos",
      email: "carlos@shop.com",
      phone: "5493415839183",
    },

    items: itemsToBuy,
    total: calcPriceCart(),
  }

  createBuyOrder(buyOrder)

}



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
        <button onClick={clearCart} >Vaciar Carrito</button> <br/>
        <button onClick={handleBuy} > Comprar!!!</button>
        </div>
  }
}
export default CartView