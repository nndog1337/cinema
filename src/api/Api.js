export const fetchFilms = async (page=1) => {
  const response = await fetch(`http://www.omdbapi.com/?apikey=b0215b89&s=movie&page=${page}`)
  if (!response.ok) {
    throw new Error(`Ошибка HTTP: ${response.status}`);
  }
  const data = await response.json()
  return data.Search
}