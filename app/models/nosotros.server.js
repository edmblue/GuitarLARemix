export async function getNosotrosData() {
  const url = `${process.env.API_URL}/info-nosotros?populate=image`;
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
