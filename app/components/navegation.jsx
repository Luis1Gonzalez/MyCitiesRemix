import { Link, useLocation } from '@remix-run/react'
import imagen from '../../public/img/carrito.png'

export default function Navegation() {
    const location = useLocation()
  return (
    <nav className='nav'>
        <Link to='/' className={location.pathname === '/' ? 'active' : ''}>Inicio</Link>
        <Link to='/abautUs' className={location.pathname === '/abautUs' ? 'active' : ''}>Nosotros</Link>
        <Link to='/blog' className={location.pathname === '/blog' ? 'active' : ''}>Blog</Link>
        <Link to='/souvenirs' className={location.pathname === '/souvenirs' ? 'active' : ''}>Souvenirs</Link>
        <Link to='/cart' className='cart'><img src={imagen} alt="carrito de compras" /></Link>
    </nav>
  )
}
