import { Meta, Links, Outlet, Scripts, LiveReload, useCatch, Link } from '@remix-run/react'
import styles from './styles/index.css'
import Header from '~/components/header'
import Footer from './components/footer'
import { useEffect, useState } from 'react'


export function meta() {
    return (
        {
            charset: 'utf-8',
            title: 'My-Cities',
            viewport: 'width=device-width,initial-scale=1'
        }
    )
}

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },
        {
            rel: "preconnect",
            href: "https://fonts.googleapis.com"
        },
        {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
            crossOrigin: "true"
        },
        {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap"
        },
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

export default function App() {

    const buyCartLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('buyCart')) ?? [] : null
    
    const [buyCart, setBuyCart] = useState(buyCartLS)

    useEffect(() => {
        localStorage.setItem('buyCart', JSON.stringify(buyCart))
    }, [buyCart])

    const addCart = souvenir => {
        if (buyCart.some(souvenirState => souvenirState.id === souvenir.id)) {// souvenirState nacio aqui

            const updatedCart = buyCart.map(souvenirState => {
                if (souvenirState.id === souvenir.id) {
                    // Reescribir la cantidad
                    souvenirState.quantity = souvenir.quantity
                }
                return souvenirState
            })
            //Añadiendo al carrito
            setBuyCart(updatedCart)
        } else {
            //Registro Nuevo.
            setBuyCart([...buyCart, souvenir])
        }
    }
    
const updateQuantity = souvenir => {
const updatedCart = buyCart.map(souvenirState => {
    if(souvenirState.id === souvenir.id) {
        souvenirState.quantity = souvenir.quantity
    }
    return souvenirState
})
setBuyCart(updatedCart)
}

const deleteSouvenir = id => {
const updatedCar =buyCart.filter(souvenirState => souvenirState.id !== id)

setBuyCart(updatedCar)
}

    return (
        <Document>
            <Outlet
                context={{
                    addCart,
                    buyCart,
                    updateQuantity,
                    deleteSouvenir
                }}
            />
        </Document>
    )
}

function Document({ children }) {
    return (
        <html lang="es">
            <head>
                <Meta />
                <Links />
            </head>

            <body>
                <Header />
                {children}
                <Footer />

                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}

// Manejo de Errores
//Esto es para hacer la pagina de error
export function CatchBoundary() {
    const error = useCatch()
    return (
        <Document>
            <p className='error'>{error.status} {error.statusText}</p>
            <Link className='error-enlace' to='/'>Tal vez quieras volver a la pagina principal</Link>
        </Document>
    )
}

export function ErrorBoundary(error) {
    return (
        <document>
            <p className='error'>{error.status} {error.statusText}</p>
            <Link className='error-enlace' to='/'>Tal vez quieras volver a la pagina principal</Link>
        </document>
    )
}