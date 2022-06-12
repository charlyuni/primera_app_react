import { useEffect, useState } from "react";
import Itemslist from "./Itemslist";


const StartDataJson = () => {

    const [startproductos, setStartProductos] = useState([]);

    useEffect(() => {
        getStartData()
        
    }
    , []);

    const getStartData = () => {
        const URL = '../json/api.json'
            fetch(URL)
                .then(res => res.json())        
                .then(data => setStartProductos(data))
        }

        return (
            <>
            <div>
                <div className="text-4xl text-left text-white bg-accent border-solid border-gray-200 p-2 m-2"></div>
                <div className="flex flex-wrap justify-center">
                <Itemslist productos={startproductos}/>
                </div>
                </div>
            </>
            )
        }
        export default StartDataJson
