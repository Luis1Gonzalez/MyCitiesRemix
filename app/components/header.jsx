import { Link } from '@remix-run/react'
import logo from '../../public/img/logo.png'
import Navegation from './navegation'


export default function Header() {
    return (
        <header className='header'>
            <div className="container wrap">
                <Link to='/' className='logo'>
                    <img className='logo' src={logo} alt='imagen de mapa mundial' />
                    <div className='wrap-tittle'>
                    <p className='tittle'>My</p>
                    <p className='tittle'>Cities</p>
                    </div>
                </Link>
                <Navegation />
            </div>
        </header>
    )
}
