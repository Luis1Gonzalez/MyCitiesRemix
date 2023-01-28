import { Outlet, useOutletContext } from '@remix-run/react'
import styles from '~/styles/souvenirs.css'


export function links(){
    return [
        {
            rel: 'stylesheet',
      href: styles
        }
    ]
}

export function meta() {
  return {
    title: 'My Cities - Souvenirs',
    description: 'My Cities, Blog de viajes y reseñas de ciudades'
  }
}

function Souvenirs() {

 
  return (
    <main className='container'>
        <Outlet
        context={useOutletContext()}
        />
    </main>
  )
}

export default Souvenirs