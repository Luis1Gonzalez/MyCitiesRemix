import styles from '~/styles/cart.css'
import { useOutletContext } from '@remix-run/react'
import { useEffect, useState } from 'react'
import { ClientOnly } from 'remix-utils'
import { formatCoins } from "~/utils/helpers"


export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export function meta() {
  return {
    title: 'My Cities - Carrito de Compras',
    description: 'My Cities, Blog de viajes y reseñas de ciudades'
  }
}

export default function Cart() {
  const [total, setTotal] = useState('')
  const { buyCart, updateQuantity, deleteSouvenir } = useOutletContext()

  useEffect(() => {
    const calcTotal = buyCart.reduce((total, product) => total + (product.quantity * product.precio), 0)

    setTotal(calcTotal)
  }, [buyCart])

  return (
    <ClientOnly fallback={'cargando...'}>
      {() => (
    <main className='container'>
      <h2 className='heading'>Carrito de Compras</h2>

      <div className='content'>

        <div className='cart'>
          <h2>Articulos</h2>

          {buyCart.length === 0 ? 'Carrito Vacio' : (
            buyCart.map(product => (
              <div className='product' key={product.id}>
                <div>
                  <img src={product.image} alt={`imagen del producto: ${product.titulo}`} />
                </div>

                <div>
                  <p className='title'>{product.titulo}</p>
                  <p>Cantidad:</p>
                  <select className="select" value={product.quantity} onChange={e => updateQuantity({
                    quantity: +e.target.value,
                    id: product.id
                  })}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                  <p className='price'>Precio: <span>{formatCoins(product.precio)}</span></p>
                  <p className='subtotal'>Subtotal: <span>{formatCoins(product.quantity * product.precio)}</span></p>
                </div>

                <button className='btn_delete' type='button' onClick={() => deleteSouvenir(product.id)}>X</button>

              </div>
            ))
          )}
        </div>

        <aside className='summary'>
          <h3>Resumen del Pedido</h3>
          <p>Total a pagar: <span>{formatCoins(total)}</span></p>
        </aside>
      </div>

    </main>
    )}
    </ClientOnly>
  )
}
