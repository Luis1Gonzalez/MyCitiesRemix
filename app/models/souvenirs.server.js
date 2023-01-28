export async function getSouvenirs() {
  const respuesta = await fetch(`${process.env.API_URL}/souvenirs?populate=*`);

  return await respuesta.json();
}

export async function getSouvenir(url) {
  const respuesta = await fetch(`${process.env.API_URL}/souvenirs?filters[url]=${url}&populate=*`);

  return await respuesta.json();
}
