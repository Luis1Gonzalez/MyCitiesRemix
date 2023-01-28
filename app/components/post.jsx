import { Link } from "@remix-run/react"
import { formatDate } from "~/utils/helpers"

export default function Post({post}) {
    const { nombre, titulo, publishedAt, texto1,  url,  imagen1, } = post
    
  return (
    <article className="post">
        <p className="date"><span className="spanDate">Publicado:</span> {formatDate(publishedAt)}</p>
        <p className="name">{nombre}</p>
        <p className="secondName">{titulo}</p>
        <p className="summary">{texto1}</p>
        <div className="wrap-imagen">
        <img className="imagen" src={imagen1.data.attributes.url} alt={`imagen blog ${nombre}`} />
        </div>        
        <Link className='link-read' to={`/blog/${url}`}>Leer Post</Link>
    </article>
  )
}
