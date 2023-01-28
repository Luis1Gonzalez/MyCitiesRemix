import { getSouvenir } from "~/models/souvenirs.server"
import { useLoaderData, useOutletContext } from "@remix-run/react"
import { formatDate, formatCoins } from "~/utils/helpers"
import { useState } from "react"

export function meta({ data }) {
    if (!data) {
        return {
            title: 'My Cities - Producto no encontrado',
            description: `My Cities, Blog de viajes y reseñas de ciudades - Producto no encontrado`
        }
    }
    return {
        title: `My Cities - ${data?.data[0]?.attributes.titulo}`,
        description: `My Cities, Blog de viajes y reseñas de ciudades entrada ${data.data[0].attributes.titulo}`
    }
}

export async function loader({ params }) {
    const { souvenirUrl } = params
    const souvenir = await getSouvenir(souvenirUrl)
    if (souvenir.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Producto no encontrado'
        })
    }
    return souvenir
}


export default function Product() {


    const { addCart } = useOutletContext()


    const [quantity, setQuantity] = useState(0)

    const souvenir = useLoaderData()
    const { titulo, precio, ciudad, publishedAt, tipo, foto, url } = souvenir?.data[0].attributes

    const handleSubmit = (e) => {
        e.preventDefault()

        if (quantity < 1) {
            alert('Seleccione una Cantidad')
            return
        }
        const selectedSouvenir = {
            id: souvenir.data[0].id,
            image: foto.data.attributes.url,
            titulo,
            precio,
            quantity
        }
        addCart(selectedSouvenir)
    }

    return (
        <div className="container-souvenir-details">
            <div className="souvenir">
                <p className="tittle">{titulo}</p>
                <div className='wrap-img'>
                    <img src={foto.data.attributes.url} alt={`Imagen de guitarra ${titulo}`} />
                </div>
                <p className="sPrice"><span className="spanSouData">Precio:</span> {formatCoins(precio)}</p>
                <p className="sCity"><span className="spanSouData">Ciudad:</span> {ciudad}</p>
                <p className="sType"><span className="spanSouData">Tipo:</span> {tipo}</p>

                <form className="form" onSubmit={handleSubmit}>
                    <label htmlFor="quantity">Cantidad</label>

                    <select id="quantity" onChange={(e) => setQuantity(+e.target.value)}>
                        <option value="0">-- Seleccione --</option>
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

                    <input type="submit" value="Agregar al Carrito" />

                </form>


                <p className="sDate"><span className="">Publicado:</span> {formatDate(publishedAt)}</p>
            </div>
        </div>
    )
}
