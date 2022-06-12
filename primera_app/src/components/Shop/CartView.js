
import { Link } from "react-router-dom";
import useCartContext from "../../store/CartContext";
import { createBuyOrder} from "../../data/BBDD.js";
import Swal from "sweetalert2";




function CartView() {

    const {cart, removeFromCart, clearCart,restaItems, calcPriceCart , agregaItems,  } = useCartContext();

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
      name: document.getElementById("nombre").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("tel").value,
    },

    items: itemsToBuy,
    total: calcPriceCart(),
  }
  createBuyOrder(buyOrder)
}

const infoBuyer = () => {
  if (document.getElementById("nombre").value === "" || document.getElementById("email").value === "" || document.getElementById("tel").value === "") {
    Swal.fire({
      title: `Por favor complete todos los campos`,
      icon: 'error',
      showCancelButton: false,
      })
  }
  else {
    handleBuy()
  }
}



if (cart.length === 0){
  return <div>
    <h4>No hay items en en el carrito</h4>
    <Link to='/' className="btn gap-2" > Volver para comprar     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>    </Link>




      </div>

}else{

    return <div>
    <div className="bg-gray-100">
    <div className="container mx-auto mt-10">
      <div className="flex shadow-md my-10">
        <div className="w-3/4 bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">{cart.length} Items</h2>
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Productos</h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Cantidad</h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Precio unidad</h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
          </div>
          
              {cart.map(itemCart => {
                      return <div key={itemCart.id}>
<div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            <div className="flex w-2/5">
              <div className="w-20">

                
                <img className="h-24" src={itemCart.thumbnailUrl} alt={itemCart.title} />
              </div>
              <div className="flex flex-col justify-between ml-4 flex-grow">
                <span className="font-bold text-sm">{itemCart.title}</span>
                <span className="text-red-500 text-xs">{itemCart.description}</span>
                <button onClick ={() => removeFromCart(itemCart.id)} className="font-semibold hover:text-red-500 text-gray-500 text-xs" >Eliminar</button>

              </div>
            </div>
            <div className="flex justify-center w-1/5">
    
              <button onClick={() => restaItems(itemCart.id)} className='btn btn-accent btn-xs'> - </button>
              <strong>{itemCart.cant}</strong>
              <button onClick={() => agregaItems(itemCart.id)} className='btn btn-primary btn-xs'> + </button>
            </div>
            <span className="text-center w-1/5 font-semibold text-sm">$ {itemCart.precio}</span>
            <span className="text-center w-1/5 font-semibold text-sm"> $ {itemCart.precio * itemCart.cant} </span>
          </div>
        </div>
            })}
        <div className="">
        <button onClick={clearCart} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Vaciar Carrito</button>
        </div>
        
        </div>

        <div id="summary" className="w-1/4 px-8 py-10">
          <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">Items {cart.length}</span>
            <span className="font-semibold text-sm">Total compra ${calcPriceCart()}</span>
          </div>
          <div>
          </div>
          <div className="py-10">
          <input id = "nombre" type="text" placeholder="Nombre y Apellido" class="input input-bordered w-full max-w-xs" required />
          <input id = "email" type="email" placeholder="Email" class="input input-bordered w-full max-w-xs" required />
          <input id = "tel" type="tel" placeholder="Telefono" class="input input-bordered w-full max-w-xs" required />
          <input id = "direccion" type="text" placeholder="direccion" class="input input-bordered w-full max-w-xs" required />

            
          </div>
          

          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total Compra</span>
              <span>$ {calcPriceCart() }</span>
            </div>
            <div>    
            <bottom onClick={() => infoBuyer()} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg  btn-error">
              Finalizar compra
            </bottom>
            </div>       
          </div>
        </div>
        </div>
        </div>
        </div>
        </div>
      
  }
}
export default CartView