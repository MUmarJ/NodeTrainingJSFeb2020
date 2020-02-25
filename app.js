const axios = require("axios");

const request = "The Phantom Menace";

function searchMovies(movies, request) {
  return movies.filter(movie => movie.title === request);
}

async function getMovies() {
  const url = "https://swapi.co/api/films/";
  axios
    .get(url)
    .then(res => {
      const movies = res.data.results;
      const filteredMovies = searchMovies(movies, request);
      console.log(filteredMovies);
    })
    .catch(e => {
      console.log(e.statusText);
    });
}

getMovies();
