import Contador from "./ItemCount";

function Itemslist({productos}) {

  return (

    <>
    {productos.map(element => {
        return (
            <div classNameName="card w-96 bg-base-100 shadow-xl ">
            <figure><img src={element.thumbnailUrl} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 classNameName="card-title">{element.title}</h2>
                    <p>{element.description}</p>
                    <div className="card-actions justify-start">
                    <h3>Cantidad:</h3>
                    <Contador stock = {element.stock}   />
                    </div>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Ver detalle</button>
                    </div>
            </div>
            </div>
      )
    })}
    </>
    )
}

export default Itemslist