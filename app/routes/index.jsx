import { getPosts } from "~/models/posts.server"
import { getSouvenirs } from "~/models/souvenirs.server"
import { useLoaderData } from "@remix-run/react"
import PostsList from "~/components/postsList"
import SouvenirsList from "~/components/souvenirsList"
import stylesPosts from '~/styles/blog.css'


export function links() {
  return [
    {
      rel: 'stylesheet',
      href: stylesPosts
    }
  ]
}

export function meta() {
  return {
    title: 'My Cities - Home',
    description: 'My Cities, Blog de viajes y reseñas de ciudades'
  }
}

export async function loader() {
  const [posts, souvenirs] = await Promise.all([
    getPosts(),
    getSouvenirs()
  ])
 

  return {
    posts: posts.data,
    souvenirs: souvenirs.data
  }
}

export default function Index() {
  const {posts, souvenirs} = useLoaderData()

  return (
    <div className="big-wrap">
    
    <main className="container container-posts">
      <PostsList
        posts={posts}
      />
    </main>

    <section className="container container-souvenirs">
      <SouvenirsList
        souvenirs={souvenirs}
      />
    </section>
    </div>
  )
}
