import {createContext, useContext, useState} from 'react';

const CartContext = createContext();
const useCartContext = () => useContext(CartContext); 
const {Provider} = CartContext;

    

export function CartContextProvider({children}) {
    const [cart, setCart] = useState([]); 
    const addtoCart = (item, cant) => {
        if (isInCart(item.id)){       
            const newCart = cart.map(cartItem => {
                if (cartItem.id === item.id){
                    const copyItem = {...cartItem}
                    copyItem.cant += cant
                    return copyItem

                }else{
                    return cartItem
            }
            })
            setCart(newCart)

        }else{
        const newItems = {...item,cant}
        setCart([...cart, newItems]);
        }
    }

    const removeFromCart = (id) => {
        const newCart = [...cart]
        const cartFilter = newCart.filter(item => {
            return item.id !== id
        
        });
        setCart(cartFilter);
    }

    const clearCart = () => {
        setCart([]);
     }
    

    const isInCart = (id) => {
        if(cart.some(item => item === id)){ 
            return true 
        }else{
            return false;
        }
 }

 const cantInCart = () => {
    let cant = 0;
    cart.forEach(element => cant += element.cant)
    return cant;
 }

const calcPriceCart = () => {
    let total = 0;
    cart.forEach(element => total += element.precio * element.cant);
    return total; 
}

const contextFunction = () => console.log('context listo');
    return(
        <Provider value={{contextFunction,
                            cart, 
                            addtoCart, 
                            removeFromCart, 
                            clearCart, 
                            cantInCart, 
                            calcPriceCart}}>
            {children}
        </Provider>
    )

}

export default useCartContext;