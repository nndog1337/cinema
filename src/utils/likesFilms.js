export function addToLikes(film) {
  const likes = JSON.parse(localStorage.getItem('likes')) || [];
  const updatedFavorites = [...likes, film];
  localStorage.setItem('likes', JSON.stringify(updatedFavorites));
  return true;
}

export function removeFromLikes(filmId) {
  const likes = JSON.parse(localStorage.getItem('likes')) || [];
  const updatedLikes = likes.filter(film => film.imdbID !== filmId);
  localStorage.setItem('likes', JSON.stringify(updatedLikes));
}

export function getLikes() {
  return JSON.parse(localStorage.getItem('likes')) || [];
}

export function isLikes(filmId) {
  const likes = getLikes();
  return likes.some(film => film.imdbID === filmId);
}