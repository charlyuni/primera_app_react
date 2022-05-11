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

 const cantInCart = (cart) => {
    let cant = 0;
    cart.forEach(element => cant += element.cant);
    return cant;
 }
    const contextFunction = () => console.log('context listo');
    return(
        <Provider value={{contextFunction, cart, addtoCart}}>
            {children}
        </Provider>
    )

}

export default useCartContext;