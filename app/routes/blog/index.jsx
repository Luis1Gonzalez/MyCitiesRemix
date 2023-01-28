import { getPosts } from "~/models/posts.server"
import { useLoaderData } from "@remix-run/react"
import PostsList from "~/components/postsList"

export function meta() {
  return {
    title: 'My Cities - Nuestro Blog',
    description: 'My Cities, Blog de viajes y reseñas de ciudades'
  }
}

export async function loader(){
    const posts = await getPosts()
    

    return posts.data
}

export default function Blog() {
    const posts = useLoaderData()
  return (
    <PostsList 
    posts = {posts}
    />
  )
}
