const requests = {
  fetchNowPlaying: 'movie/now_playing',
  fetchNetflixOriginals: '/discover/tv?with_networks=213',
  fetchTrending: '/trending/all/week',
  fetchTopRated: '/movie/top_rated',
  fetchActionMovies: '/discover/movie?with_henres=28',
  fetchComedyMovies: '/discover/movie?with_henres=35',
  fetchHorrorMovies: '/discover/movie?with_henres=27',
  fetchRomanceMovies: '/discover/movie?with_henres=10749',
  fetchDocumentaries: '/discover/movie?with_henres=99',
};

export default requests;
