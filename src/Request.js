const api_key = 'b2b6910cb530d2b8f4b8e163d701ed77';

const requests={
    fetchtrending:`/trending/all/week?api_key=${api_key}&language=en=US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${api_key}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${api_key}&language=en=US`,
    fetchActionMovies:`/discover/movie?api_key=${api_key}&with_geners=28`,
    fetchComedyMovies:`/discover/movie?api_key=${api_key}&with_geners=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${api_key}&with_geners=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${api_key}&with_geners=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${api_key}&with_geners=99`
}

export default requests