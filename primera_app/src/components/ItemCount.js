import { useState } from "react";
const stock = 17;

const Contador = () => {

    const [count, setCount] = useState(0);

    const addHandler = () => {
        count == stock ? setCount(count) : setCount(count + 1)
    }

    const restHandler = () => {
    count >= 1 ? setCount(count - 1) : setCount(0)
    }

    return (
    <>  
        <button onClick={restHandler} className='btn btn-accent btn-xs'> - </button>
        <strong>{count}</strong>
        <button onClick={addHandler} className='btn btn-primary btn-xs'> + </button>
    </>
    )
}
export default Contador