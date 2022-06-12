import { useState } from "react";

const Contador = ({stock, cantidad ,onAdd}) => {

    let inicial = 0;
    cantidad > 0 ? inicial = cantidad : inicial = 1;

    const [count, setCount] =  useState(inicial);

    const addHandler = () => {
        count >= stock ? setCount(count) : setCount(count + 1)
    }

    const restHandler = () => {
    count > 1 ? setCount(count - 1) : setCount(1)
    }


    return (
    <>  
    <div className=" card-actions justify-start">
    <button onClick={restHandler} className='btn btn-accent btn-xs '> - </button>
    <span className="text-center text-black">{count}</span>
    <button  onClick={addHandler} className='btn btn-primary btn-xs'> + </button>
    </div>
        <div className="card-actions justify-end">
            <button onClick ={()=> onAdd(count)} className='btn btn-success btn-block btn-sm'> Comprar </button> 
        </div>
    </>
    )
}
export default Contador