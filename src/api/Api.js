const API_KEY = 'b0215b89'

export const fetchFilms = async (page=1) => {
  const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=movie&page=${page}`)
  if (!response.ok) {
    throw new Error(`Ошибка HTTP: ${response.status}`);
  }
  const data = await response.json()
  return data.Search
}

export const fetchFilmDetails = async (imdbID) => {
  const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}&plot=full`)
  if (!response.ok) {
    throw new Error(`Ошибка HTTP: ${response.status}`);
  }
  const data = await response.json()
  return data
}

