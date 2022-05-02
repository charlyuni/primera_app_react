import Contador from '../../components/ItemCount'

function MovieCard({movies}) {

    const {id, title, director, year, duration} = movies

  return (
    
    <div>

    <div className="card card-side bg-base-100 shadow-xl">
    <figure><img src="https://api.lorem.space/image/movie?w=200&h=280" alt="Movie"/></figure>
    <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div>{director}</div>
        <div>{year}</div>
        <div>{duration}</div>
        <Contador/>
        <div className="card-actions justify-end">
        <button className="btn btn-primary">Comprar</button>
        </div>
    </div>
    </div>
    </div>
  )
}
export default MovieCard