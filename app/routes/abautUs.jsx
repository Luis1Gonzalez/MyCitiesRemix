
import construction from '../../public/img/construccion.jpg'

export function meta() {
  return {
    title: 'My Cities -Abaut Us',
    description: 'My Cities, Blog de viajes y reseñas de ciudades'
  }
}

export default function Nosotros() {
  return (
    <div className='container'>
      <img src={construction} alt="imagen de pagina en construcción" />
    </div>
  )
}
