import styles from '~/styles/blog.css'
import { Outlet } from '@remix-run/react'

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
    title: 'My Cities',
    description: 'My Cities, Blog de viajes y reseñas de ciudades'
  }
}

export default function Blog() {
  return (
    <main className='container'>
      <Outlet />
    </main>
  )
}
