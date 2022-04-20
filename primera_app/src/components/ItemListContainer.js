import Contador from './ItemCount';

function ItemListContainer(props) {

  const listItems = props.ItemsProd.map((element) =>

  <div classNameName="card w-96 bg-base-100 shadow-xl ">
  <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
      <div className="card-body">
          <h2 classNameName="card-title">{element}</h2>
          <p>poner descripcion mas adelante</p>
          <div className="card-actions justify-start">
            <h3>Cantidad:</h3>
            <Contador />
            </div>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Comprar</button>
            </div>
      </div>
</div>
  );


  return (
    <div>
    <div className="text-4xl text-left text-white bg-accent border-solid border-gray-200 p-2 m-2"> {props.titulo} </div>
    <div className="flex flex-wrap justify-center">
      {listItems}
    </div>
    </div>
    )
}
export default ItemListContainer