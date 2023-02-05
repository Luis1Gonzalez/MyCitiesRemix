
import { getPost } from "~/models/posts.server"
import { useLoaderData } from "@remix-run/react"
import { formatDate, formatNumbers } from "~/utils/helpers"


export function meta({data}) {
    if(!data) {
        return {
            title: 'My Cities - Entrada no encontrada',
            description: `My Cities, Blog de viajes y reseñas de ciudades - entrada no encontrada`
        }
    }
    return {
        title: `My Cities - ${data?.data[0]?.attributes.nombre}`,
        description: `My Cities, Blog de viajes y reseñas de ciudades entrada ${data.data[0].attributes.nombre}`
    }
  }

export async function loader({ params }) {
    const { postUrl } = params
    const post = await getPost(postUrl)
    if (post.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Entrada no encontrada'
        })
    }
    return post
}


export default function Post() {
    const post = useLoaderData()
    const { nombre, titulo, publishedAt, pais, texto1, texto2, extencion, poblacion, url, fuente, continente, imagen1, imagen2 } = post.data[0].attributes
    return (
        <article className="post">
        <p className="date"><span className="spanDate">Publicado:</span> {formatDate(publishedAt)}</p>
        <p className="name">{nombre}</p>
        <p className="secondName">{titulo}</p>
        <p className="country"><span className="spanData">País:</span> {pais}</p>
        <p className="country"><span className="spanData">Continente:</span> {continente}</p>
        <p className="numbers"><span className="spanData">Territorio:</span> {formatNumbers(extencion)} Km</p>
        <p className="numbers"><span className="spanData">Población:</span> {formatNumbers(poblacion)} Hab.</p>
        <p className="text">{texto1}</p>
        <div className="wrap-imagen">
        <img className="imagen" src={imagen1.data.attributes.url} alt={`imagen blog ${nombre}`} />
        </div>        
        <p className="text">{texto2}</p>
        <div className="wrap-imagen">
        <img className="imagen" src={imagen2.data.attributes.url} alt={`imagen blog ${nombre}`} />
        </div>
        <p className="date"><span className="spanDate">Fuente:</span> {fuente}</p>
    </article>
    )
}






