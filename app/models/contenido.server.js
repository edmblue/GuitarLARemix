export async function getContent() {
  const url = `${process.env.API_URL}/curso?populate=image`;
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
