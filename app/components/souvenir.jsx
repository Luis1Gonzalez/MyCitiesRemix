import { Link } from '@remix-run/react'
import { formatDate, formatCoins } from '~/utils/helpers'

function Souvenir({souvenir}) {
    const  {titulo, precio, ciudad, publishedAt, tipo, foto, url} = souvenir

  return (
    <div className='souvenir'>
        <div className='wrap-img'>
            <img src={foto.data.attributes.url} alt={`Imagen de guitarra ${titulo}`} />
        </div>
        <div className='content'>
        <p className='tittle'>{titulo}</p>
         </div>
        <Link className='link-product' to={`/souvenirs/${url}`}>Ver Producto</Link>
    </div>
  )
}

export default Souvenir