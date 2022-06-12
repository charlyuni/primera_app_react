import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"
import useCartContext from "../store/CartContext"

const DaisyNavBar = () => {

  const {contextFunction} = useCartContext();
  contextFunction()

  return (
<>   
<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabindex="0" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <Link to='/'>Productos</Link>
      <li tabindex="0">
      <Link to='/'>
          Categoria
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
          </Link>
        <ul className="p-2 bg-base-100">
        <Link to='/category/Hogar'>Hogar</Link>
        <Link to='/category/Tecno'>Tecno</Link>
        <Link to='/category/Electro'>Electro</Link>
        <Link to='/category/Indumentaria'>Indumentaria</Link>
        <Link to='/category/Calzados'>Calzados</Link>
        </ul>
      </li>
      <Link to='/cart' className="start" >Carrito</Link>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
<Link to='/' className="btn btn-ghost normal-case text-xl">E-Shop with React</Link>
  </div>
  <div className="navbar-end">

        <CartWidget/>
    <button className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
  </div>
</div>
</> 

    )
}
export default DaisyNavBar