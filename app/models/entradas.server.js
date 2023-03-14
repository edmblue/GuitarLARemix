export async function getEntradas() {
  const url = `${process.env.API_URL}/posts?populate=image`;
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getEntradaItem(urlItem) {
  const url = `${process.env.API_URL}/posts?populate=image&filters[url]=${urlItem}`;
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
