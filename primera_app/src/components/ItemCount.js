import { useState } from "react";

const Contador = ({stock, onAdd}) => {

    const [count, setCount] = useState(0);

    const addHandler = () => {
        count >= stock ? setCount(count) : setCount(count + 1)
    }

    const restHandler = () => {
    count >= 1 ? setCount(count - 1) : setCount(0)
    }

    return (
    <>  
        <button onClick={restHandler} className='btn btn-accent btn-xs'> - </button>
        <strong>{count}</strong>
        <button  onClick={addHandler} className='btn btn-primary btn-xs'> + </button>
        <button onClick={()=> onAdd(count)} className='btn btn-primary btn-xs'> Agregar a Carrito </button>
    </>
    )
}
export default Contador