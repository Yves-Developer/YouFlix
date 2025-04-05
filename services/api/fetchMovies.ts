const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDdhZmVmNWFlMjdiNzdmZmEwM2Q1ODAyYzE2YWE0NCIsIm5iZiI6MTc0Mzg3MDE4OC42NDIsInN1YiI6IjY3ZjE1OGVjMmY3ZDQzNzAyNzk5OWI1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JNHO9MlbU-vbqfd4d1JGg4ODQgxtfWwyIfj5TtkGhCg'
  }
};
export const fetchMovies = async () => {
const res = await fetch(url, options);
const data = await res.json();
return data.results.map((movie: any) => ({
  id: movie.id,
  title: movie.title,
  poster_path: movie.poster_path,
  release_date: movie.release_date,
}));
};      

 