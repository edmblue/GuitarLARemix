export async function getGuitarras() {
  const url = `${process.env.API_URL}/guitarras?populate=image`;
  console.log(url);
  try {
    const respuesta = await fetch(url);
    return await respuesta.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getGuitarra(guitarUrl) {
  const url = `${process.env.API_URL}/guitarras?filters[url]=${guitarUrl}&populate=image`;
  console.log(url);
  try {
    const respuesta = await fetch(url);
    return await respuesta.json();
  } catch (error) {
    console.log(error);
  }
}
