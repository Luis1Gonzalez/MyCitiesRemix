import Navegation from './navegation'

export default function Footer() {

    return (
        <footer className='footer'>
            <div className='container content '>
                <Navegation />
                <p className='copyright'>Todos los derechos reservados {new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}
