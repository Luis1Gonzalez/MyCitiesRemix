import { getSouvenirs } from "~/models/souvenirs.server"
import { useLoaderData } from "@remix-run/react"
import SouvenirsList from "~/components/souvenirsList"

// export function meta() {
//     return {
//       title: 'GuitarLA - Tienda de Guitarras',
//       description: 'GuitarLA - Nuestra colección de guitarras'
//     }
//   }

export async function loader(){
    const souvenirs = await getSouvenirs()
    
    return souvenirs.data
} 



export default function Souvenirs() {
    const souvenirs = useLoaderData()
    
  return (
    <main>
    <SouvenirsList
    souvenirs={souvenirs}
    />
    </main>
  )
}
