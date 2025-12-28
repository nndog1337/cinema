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

export const searchFilms = async (query) => {
  if (!query || query.trim() === '') {
    return []
  }
  
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(query)}`
    )
    
    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`)
    }
    
    const data = await response.json()

    if (data.Response === 'True') {
      return {
        films: data.Search || [],
      }
    } else {
      return {
        films: [],
      }
    }
  } catch (error) {
    console.error('Search error:', error)
    throw error
  }
}

